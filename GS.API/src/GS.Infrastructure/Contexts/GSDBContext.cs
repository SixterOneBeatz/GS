using GS.Domain;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace GS.Infrastructure.Contexts
{
    public class GSDBContext : DbContext
    {
        public GSDBContext(DbContextOptions<GSDBContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var entry in ChangeTracker.Entries<Pedido>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.FechaAlta = DateTime.Now;
                        break;
                    case EntityState.Modified:
                        entry.Entity.FechaMod = DateTime.Now;
                        break;
                    default:
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
    }
}
