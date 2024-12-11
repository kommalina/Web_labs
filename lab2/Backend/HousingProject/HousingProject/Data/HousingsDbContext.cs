using HousingProject.Models;
using Microsoft.EntityFrameworkCore;
namespace HousingProject.Data
{
    public class HousingDbContext : DbContext   //HousingDbContext наследуется от DbContext из пакета Microsoft.EntityFrameworkCore
    {

        public HousingDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Housing> Housings { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)  //Fluent API, настрока конфигурации модели Housing 
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<Housing>().HasKey(p => p.Id);   //Первичный ключ

            modelBuilder.Entity<Housing>().Property(p => p.Title)
                .IsRequired()
                .HasColumnName("HousingTitle")
                .HasMaxLength(100);

            modelBuilder.Entity<Housing>().Property(p => p.Price)
                .IsRequired()
                .HasColumnName("HousingPrice");

            modelBuilder.Entity<Housing>().Property(p => p.Description)
                .IsRequired()
                .HasColumnName("HousingDescription")
                .HasMaxLength(500);

        }
    }
}

