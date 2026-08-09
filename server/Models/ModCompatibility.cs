namespace Moditor.Api.Models;

public class ModCompatibility
{
    public int Id { get; set; }

    public int ModIdA { get; set; }
    public Mod ModA { get; set; } = null!;

    public int ModIdB { get; set; }
    public Mod ModB { get; set; } = null!;

    public bool IsCompatible { get; set; }

    public int? PatchNexusId { get; set; }

    public string? Notes { get; set; }
}