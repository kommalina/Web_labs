namespace HousingProject.Contracts
{
    public record HousingResponse(
        Guid Id,
        string Title,
        string Description,
        decimal Price);

    public record HousingRequest(
        string Title,
        string Description,
        decimal Price);
}
