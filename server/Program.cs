using Microsoft.EntityFrameworkCore;
using Moditor.Api.Data;
using Moditor.Api.Models;

var builder = WebApplication.CreateBuilder(args);

// Allow Vite to access the API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<ModitorDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("ModitorDb")
));

// Add services to the container.
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseCors("AllowClient");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// GET mods, ordered by load order
app.MapGet("/api/mods", async (ModitorDbContext db) =>
    await db.Mods.OrderBy(m => m.LoadOrder).ToListAsync());

// GET mod by ID
app.MapGet("/api/mods/{id}", async (int id, ModitorDbContext db) =>
    await db.Mods.FindAsync(id) is Mod mod
        ? Results.Ok(mod)
        : Results.NotFound());

// POST new mod
app.MapPost("/api/mods", async (Mod mod, ModitorDbContext db) =>
{
    db.Mods.Add(mod);
    await db.SaveChangesAsync();
    return Results.Created($"/api/mods/{mod.Id}", mod);
});

// PUT update mod by ID
app.MapPut("/api/mods/{id}", async (int id, Mod input, ModitorDbContext db) =>
{
    var mod = await db.Mods.FindAsync(id);
    if (mod is null) return Results.NotFound();

    mod.NexusId = input.NexusId;
    mod.Name = input.Name;
    mod.Category = input.Category;
    mod.HasFomod = input.HasFomod;
    mod.LoadOrder = input.LoadOrder;
    mod.Notes = input.Notes;
    // IsValid intentionally untouched — only the future scan endpoint sets this.

    await db.SaveChangesAsync();
    return Results.NoContent();
});

// DELETE mod by ID
app.MapDelete("/api/mods/{id}", async (int id, ModitorDbContext db) =>
{
    var mod = await db.Mods.FindAsync(id);
    if (mod is null) return Results.NotFound();

    db.Mods.Remove(mod);

    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();