namespace ARReactNative.Models
{
    public class House
    {
        public float Width { get; set; }
        public float Height { get; set; }
        public float Length { get; set; }

        public float Volume
        {
            get
            {
                return Width * Height * Length;
            }
        }

        public float Area
        {
            get
            {
                return Width * Length;
            }
        }

        public House(float width, float height, float length)
        {
            Width = width;
            Height = height;
            Length = length;
        }

        public void GenerateARHouse()
        {
            // Logic to generate the AR house with the specified configuration
            Console.WriteLine($"Generating AR house with width: {Width}, height: {Height}, length: {Length}");
        }
    }
}