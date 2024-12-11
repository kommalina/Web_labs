using HousingProject.Models;
using HousingProject.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HousingProject.Services
{
    public class HousingsService : IHousingsService
    {
        private readonly IHousingsRepository _housingsRepository;

        public HousingsService(IHousingsRepository housingsRepository)
        {
            _housingsRepository = housingsRepository;
        }

        public async Task<List<Housing>> GetAllHousings()
        {
            return await _housingsRepository.GetHousings();
        }

        public async Task CreateHousing(Housing housing)
        {
            await _housingsRepository.Create(housing);
        }

        public async Task UpdateHousing(Guid id, string title, decimal price, string description)
        {
            await _housingsRepository.Update(id, title, price, description);
        }

        public async Task DeleteHousing(Guid id)
        {
            await _housingsRepository.Delete(id);
        }
    }
}
