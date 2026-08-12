namespace Moditor.Api.Models;

public class Mod
{
    public int Id { get; set; }
    public int NexusId { get; set; }
    public int GameId { get; set; }
    public Game Game { get; set; } = null!;
    public string Name { get; set; } = string.Empty;
    public string? Category { get; set; }
    public bool HasFomod { get; set; }
    public int LoadOrder { get; set; }
    public bool IsValid { get; set; }
    public string? Notes { get; set; } = string.Empty;
}