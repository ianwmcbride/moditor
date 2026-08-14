using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moditor.Api.Migrations
{
    /// <inheritdoc />
    public partial class RenameConflictToCompatibility : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ModConflicts_Mods_ModIdA",
                table: "ModConflicts");

            migrationBuilder.DropForeignKey(
                name: "FK_ModConflicts_Mods_ModIdB",
                table: "ModConflicts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ModConflicts",
                table: "ModConflicts");

            migrationBuilder.RenameTable(
                name: "ModConflicts",
                newName: "ModCompatibility");

            migrationBuilder.RenameIndex(
                name: "IX_ModConflicts_ModIdB",
                table: "ModCompatibility",
                newName: "IX_ModCompatibility_ModIdB");

            migrationBuilder.RenameIndex(
                name: "IX_ModConflicts_ModIdA",
                table: "ModCompatibility",
                newName: "IX_ModCompatibility_ModIdA");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ModCompatibility",
                table: "ModCompatibility",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ModCompatibility_Mods_ModIdA",
                table: "ModCompatibility",
                column: "ModIdA",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ModCompatibility_Mods_ModIdB",
                table: "ModCompatibility",
                column: "ModIdB",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ModCompatibility_Mods_ModIdA",
                table: "ModCompatibility");

            migrationBuilder.DropForeignKey(
                name: "FK_ModCompatibility_Mods_ModIdB",
                table: "ModCompatibility");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ModCompatibility",
                table: "ModCompatibility");

            migrationBuilder.RenameTable(
                name: "ModCompatibility",
                newName: "ModConflicts");

            migrationBuilder.RenameIndex(
                name: "IX_ModCompatibility_ModIdB",
                table: "ModConflicts",
                newName: "IX_ModConflicts_ModIdB");

            migrationBuilder.RenameIndex(
                name: "IX_ModCompatibility_ModIdA",
                table: "ModConflicts",
                newName: "IX_ModConflicts_ModIdA");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ModConflicts",
                table: "ModConflicts",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ModConflicts_Mods_ModIdA",
                table: "ModConflicts",
                column: "ModIdA",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ModConflicts_Mods_ModIdB",
                table: "ModConflicts",
                column: "ModIdB",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
