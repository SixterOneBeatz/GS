using GS.Application.Common.Interfaces;
using GS.Domain;
using GS.Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;

namespace GS.Infrastructure.Repositories
{
    public class PedidoRepository : IPedidoRepository
    {
        private readonly GSDBContext _context;

        public PedidoRepository(GSDBContext context)
            => _context = context;

        public async Task<Pedido> GetPedido(int id)
            => await _context.Pedidos.FindAsync(id);

        public async Task<List<Pedido>> GetPedidosXCliente(int clienteId)
            => await _context.Pedidos
            .Where(x => x.ClienteId == clienteId)
            .OrderByDescending(x => x.FechaAlta)
            .ToListAsync();

        public void UpdateSaldo(Pedido pedido)
        {
            _context.Pedidos.Attach(pedido);
            _context.Entry(pedido).State = EntityState.Modified;
        }
    }
}
