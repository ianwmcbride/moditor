namespace Moditor.Api.Models;

public class ModRequirement
{
    public int Id { get; set; }

    public int ModId { get; set; }
    public Mod Mod { get; set; } = null!;

    public int RequiredModId { get; set; }
}