using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HousingProject.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Housings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    HousingTitle = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    HousingPrice = table.Column<decimal>(type: "numeric", nullable: false),
                    HousingDescription = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Housings", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Housings");
        }
    }
}
