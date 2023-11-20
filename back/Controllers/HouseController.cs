using System.Reflection.Emit;
using System.Security.Cryptography;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using System;
using ARReactNative.Models;

namespace ARReactNative.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HouseController : ControllerBase
    {

        [HttpGet(Name = "GetHouse")]
        public IEnumerable<House> Get()
        {
            Random random = new Random();

            return Enumerable.Range(1, 5).Select(index =>
            new House(random.Next(1, 11),
                random.Next(1, 11),
                random.Next(1, 11)))
            .ToArray();
        }




        [HttpPost]
        public IActionResult GenerateARHouse([FromBody] HouseInputModel input)
        {
            try
            {
                // Validate input
                if (input == null)
                {
                    return BadRequest("Invalid input");
                }
                var house = new House(input.Width, input.Height, input.Length);

                house.GenerateARHouse();

                return Ok("AR house generated successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }

    public class HouseInputModel
    {
        public float Width { get; set; }
        public float Height { get; set; }
        public float Length { get; set; }
    }
}