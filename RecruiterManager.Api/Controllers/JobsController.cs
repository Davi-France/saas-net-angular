using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecruiterManager.Api.Data;
using RecruiterManager.Api.Models;

namespace RecruiterManager.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class JobsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public JobsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetJobs()
        {
            var jobs = await _context.Jobs.ToListAsync();
            return Ok(jobs);
        }

        [HttpPost]
        public async Task<IActionResult> CreateJob([FromBody] Job job)
        {
            _context.Jobs.Add(job);
            await _context.SaveChangesAsync();
            return Ok(job);
        }
    }
}
