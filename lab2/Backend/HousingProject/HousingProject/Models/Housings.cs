namespace HousingProject.Models
{
    public class Housing
    {
        const int MAX_TITLE_LENGTH = 100;
        const int MAX_DESCRIPTION_LENGTH = 500;

        private Housing(Guid id, string title, decimal price, string description)
        {
            Id = id;
            Title = title;
            Price = price;
            Description = description;
        }

        public Guid Id { get; set; }

        public string Title { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }

        public static (Housing housing, string error) Create(Guid id, string title, decimal price, string description)
        {

            var error = string.Empty;
            var housing = new Housing(id, title, price, description);

            if (string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                error = "Заголовок не может быть пустым или превышать максимальное число символов = 100";
            }

            if (string.IsNullOrEmpty(description) || description.Length > MAX_DESCRIPTION_LENGTH)
            {
                error = "Описание не может быть пустым или превышать максимальное число символов = 500";
            }

            return (housing, error);
        }

    }
}
