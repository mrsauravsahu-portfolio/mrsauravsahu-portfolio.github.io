using mrsauravsahu.data.models;
using Microsoft.EntityFrameworkCore;


using kDg.FileBaseContext.Extensions;
using kDg.FileBaseContext.Serializers;
namespace mrsauravsahu.data.context
{
    public class BlogsContext : DbContext
    {
        public BlogsContext(DbContextOptions<BlogsContext> options) : base(options) { }
        public BlogsContext(string databaseName)  { 
            this.databaseName = databaseName;
        }

        private readonly string databaseName;
        public DbSet<Link> Links { get; set; } = default!;
        public DbSet<Blog> Blogs { get; set; } = default!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseFileBaseContextDatabase(this.databaseName, null, services =>
            {
                services.AddCsvRowDataSerializer();
            });
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Blog>()
                .Property<string>("images")
                .HasField("images")
                .HasColumnName("Images");
        }
    }
}