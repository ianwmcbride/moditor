using Microsoft.EntityFrameworkCore;
using Moditor.Api.Models;

namespace Moditor.Api.Data;

public class ModitorDbContext(DbContextOptions<ModitorDbContext> options) : DbContext(options)
{
    public DbSet<Mod> Mods => Set<Mod>();
    public DbSet<ModRequirement> ModRequirements => Set<ModRequirement>();
    public DbSet<ModCompatibility> ModConflicts => Set<ModCompatibility>();
    public DbSet<ModOrderRule> ModOrderRules => Set<ModOrderRule>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ModRequirement>()
            .HasOne(r => r.Mod).WithMany()
            .HasForeignKey(r => r.ModId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<ModRequirement>()
            .HasOne(r => r.RequiredMod).WithMany()
            .HasForeignKey(r => r.RequiredModId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<ModCompatibility>()
            .HasOne(c => c.ModA).WithMany()
            .HasForeignKey(c => c.ModIdA)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<ModCompatibility>()
            .HasOne(c => c.ModB).WithMany()
            .HasForeignKey(c => c.ModIdB)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<ModOrderRule>()
            .HasOne(o => o.Mod).WithMany()
            .HasForeignKey(o => o.ModId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<ModOrderRule>()
            .HasOne(o => o.RelatedMod).WithMany()
            .HasForeignKey(o => o.RelatedModId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}