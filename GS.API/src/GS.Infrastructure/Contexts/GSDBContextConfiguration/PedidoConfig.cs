

using GS.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GS.Infrastructure.Contexts.GSDBContextConfiguration
{
    public class PedidoConfig : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.Property(x => x.Saldo)
                .HasColumnType("decimal(16,2)");

            builder.Property(x => x.FechaAlta)
                .HasColumnType("datetime");

            builder.Property(x => x.FechaMod)
                .HasColumnType("datetime");
        }
    }
}
