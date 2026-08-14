using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Moditor.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Mods",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    NexusId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Category = table.Column<string>(type: "text", nullable: true),
                    HasFomod = table.Column<bool>(type: "boolean", nullable: false),
                    LoadOrder = table.Column<int>(type: "integer", nullable: false),
                    IsValid = table.Column<bool>(type: "boolean", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ModConflicts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ModIdA = table.Column<int>(type: "integer", nullable: false),
                    ModIdB = table.Column<int>(type: "integer", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModConflicts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModConflicts_Mods_ModIdA",
                        column: x => x.ModIdA,
                        principalTable: "Mods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModConflicts_Mods_ModIdB",
                        column: x => x.ModIdB,
                        principalTable: "Mods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModOrderRules",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ModId = table.Column<int>(type: "integer", nullable: false),
                    RelatedModId = table.Column<int>(type: "integer", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModOrderRules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModOrderRules_Mods_ModId",
                        column: x => x.ModId,
                        principalTable: "Mods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModOrderRules_Mods_RelatedModId",
                        column: x => x.RelatedModId,
                        principalTable: "Mods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModRequirements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ModId = table.Column<int>(type: "integer", nullable: false),
                    RequiredModId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModRequirements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModRequirements_Mods_ModId",
                        column: x => x.ModId,
                        principalTable: "Mods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModRequirements_Mods_RequiredModId",
                        column: x => x.RequiredModId,
                        principalTable: "Mods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ModConflicts_ModIdA",
                table: "ModConflicts",
                column: "ModIdA");

            migrationBuilder.CreateIndex(
                name: "IX_ModConflicts_ModIdB",
                table: "ModConflicts",
                column: "ModIdB");

            migrationBuilder.CreateIndex(
                name: "IX_ModOrderRules_ModId",
                table: "ModOrderRules",
                column: "ModId");

            migrationBuilder.CreateIndex(
                name: "IX_ModOrderRules_RelatedModId",
                table: "ModOrderRules",
                column: "RelatedModId");

            migrationBuilder.CreateIndex(
                name: "IX_ModRequirements_ModId",
                table: "ModRequirements",
                column: "ModId");

            migrationBuilder.CreateIndex(
                name: "IX_ModRequirements_RequiredModId",
                table: "ModRequirements",
                column: "RequiredModId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ModConflicts");

            migrationBuilder.DropTable(
                name: "ModOrderRules");

            migrationBuilder.DropTable(
                name: "ModRequirements");

            migrationBuilder.DropTable(
                name: "Mods");
        }
    }
}
