using HousingProject.Models;
using HousingProject.Contracts;
using HousingProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace HousingProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HousingsController : ControllerBase
    {
        private readonly IHousingsService _housingsService;

        public HousingsController(IHousingsService housingsService)
        {
            _housingsService = housingsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<HousingResponse>>> GetHousings()
        {
            var housings = await _housingsService.GetAllHousings();

            var response = housings.Select(p => new HousingResponse(p.Id, p.Title, p.Description, p.Price));

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> CreateHousing([FromBody] HousingRequest request)
        {
            var (housing, error) = Housing.Create(Guid.NewGuid(), request.Title, request.Price, request.Description);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }
            await _housingsService.CreateHousing(housing);
            return Ok();
        }

        [HttpPut("{id:Guid}")]
        public async Task<ActionResult> UpdateHousing(Guid id, [FromBody] HousingRequest request)
        {
            await _housingsService.UpdateHousing(id, request.Title, request.Price, request.Description);

            return NoContent();

        }

        [HttpDelete("{id:Guid}")]
        public async Task<ActionResult> DeleteHousing(Guid id)
        {
            await _housingsService.DeleteHousing(id);
            return NoContent();
        }
    }
}
