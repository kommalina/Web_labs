using HousingProject.Data;
using HousingProject.Models;
using Microsoft.EntityFrameworkCore;

namespace HousingProject.Repositories
{
    public class HousingsRepository : IHousingsRepository
    {
        private readonly HousingDbContext _context;

        //CRUD паттерн, использование LINQ
        public HousingsRepository(HousingDbContext context)
        {
            _context = context;
        }

        public async Task<List<Housing>> GetHousings()
        {
            return await _context.Housings
                 .AsNoTracking()
                 .ToListAsync();
        }

        public async Task Create(Housing housing)
        {
            _context.Housings.Add(housing);
            await _context.SaveChangesAsync();

        }

        public async Task Update(Guid id, string title, decimal price, string description)
        {
            await _context.Housings
                .Where(p => p.Id == id)
                .ExecuteUpdateAsync(s => s
                    .SetProperty(p => p.Title, p => title)
                    .SetProperty(p => p.Price, p => price)
                    .SetProperty(p => p.Description, p => description));
        }

        public async Task Delete(Guid id)
        {
            await _context.Housings
                .Where(p => p.Id == id)
                .ExecuteDeleteAsync();
        }
    }
}
