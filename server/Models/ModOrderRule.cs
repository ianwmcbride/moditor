namespace Moditor.Api.Models;

public enum OrderRuleType
{
    Before,
    After
}

public class ModOrderRule
{
    public int Id { get; set; }

    public int ModId { get; set; }
    public Mod Mod { get; set; } = null!;

    public int RelatedModId { get; set; }
    public Mod RelatedMod { get; set; } = null!;

    public OrderRuleType Type { get; set; }
}