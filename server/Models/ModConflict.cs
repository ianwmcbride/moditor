namespace Moditor.Api.Models;

public class ModConflict
{
    public int Id { get; set; }

    public int ModIdA { get; set; }
    public Mod ModA { get; set; } = null!;

    public int ModIdB { get; set; }
    public Mod ModB { get; set; } = null!;

    public string? Notes { get; set; }
}