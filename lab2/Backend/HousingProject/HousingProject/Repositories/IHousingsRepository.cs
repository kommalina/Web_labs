using HousingProject.Models;

namespace HousingProject.Repositories
{
    public interface IHousingsRepository
    {
        Task Create(Housing housing);
        Task<List<Housing>> GetHousings();
        Task Update(Guid id, string title, decimal price, string description);
        Task Delete(Guid id);
    }
}
