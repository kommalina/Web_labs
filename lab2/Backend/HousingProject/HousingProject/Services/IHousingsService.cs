using HousingProject.Models;

namespace HousingProject.Services
{
    public interface IHousingsService
    {
        Task CreateHousing(Housing housing);
        Task DeleteHousing(Guid id);
        Task<List<Housing>> GetAllHousings();
        Task UpdateHousing(Guid id, string title, decimal price, string description);
    }
}
