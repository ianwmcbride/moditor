using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moditor.Api.Migrations
{
    /// <inheritdoc />
    public partial class RenameConflictToCompatibilityAndFixDeleteBehaviors : Migration
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

            migrationBuilder.DropForeignKey(
                name: "FK_ModOrderRules_Mods_ModId",
                table: "ModOrderRules");

            migrationBuilder.DropForeignKey(
                name: "FK_ModOrderRules_Mods_RelatedModId",
                table: "ModOrderRules");

            migrationBuilder.DropForeignKey(
                name: "FK_ModRequirements_Mods_ModId",
                table: "ModRequirements");

            migrationBuilder.DropForeignKey(
                name: "FK_ModRequirements_Mods_RequiredModId",
                table: "ModRequirements");

            migrationBuilder.DropIndex(
                name: "IX_ModRequirements_RequiredModId",
                table: "ModRequirements");

            migrationBuilder.AddColumn<bool>(
                name: "IsCompatible",
                table: "ModConflicts",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "PatchNexusId",
                table: "ModConflicts",
                type: "integer",
                nullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_ModOrderRules_Mods_ModId",
                table: "ModOrderRules",
                column: "ModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ModOrderRules_Mods_RelatedModId",
                table: "ModOrderRules",
                column: "RelatedModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ModRequirements_Mods_ModId",
                table: "ModRequirements",
                column: "ModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ModConflicts_Mods_ModIdA",
                table: "ModConflicts");

            migrationBuilder.DropForeignKey(
                name: "FK_ModConflicts_Mods_ModIdB",
                table: "ModConflicts");

            migrationBuilder.DropForeignKey(
                name: "FK_ModOrderRules_Mods_ModId",
                table: "ModOrderRules");

            migrationBuilder.DropForeignKey(
                name: "FK_ModOrderRules_Mods_RelatedModId",
                table: "ModOrderRules");

            migrationBuilder.DropForeignKey(
                name: "FK_ModRequirements_Mods_ModId",
                table: "ModRequirements");

            migrationBuilder.DropColumn(
                name: "IsCompatible",
                table: "ModConflicts");

            migrationBuilder.DropColumn(
                name: "PatchNexusId",
                table: "ModConflicts");

            migrationBuilder.CreateIndex(
                name: "IX_ModRequirements_RequiredModId",
                table: "ModRequirements",
                column: "RequiredModId");

            migrationBuilder.AddForeignKey(
                name: "FK_ModConflicts_Mods_ModIdA",
                table: "ModConflicts",
                column: "ModIdA",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ModConflicts_Mods_ModIdB",
                table: "ModConflicts",
                column: "ModIdB",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ModOrderRules_Mods_ModId",
                table: "ModOrderRules",
                column: "ModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ModOrderRules_Mods_RelatedModId",
                table: "ModOrderRules",
                column: "RelatedModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ModRequirements_Mods_ModId",
                table: "ModRequirements",
                column: "ModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ModRequirements_Mods_RequiredModId",
                table: "ModRequirements",
                column: "RequiredModId",
                principalTable: "Mods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
