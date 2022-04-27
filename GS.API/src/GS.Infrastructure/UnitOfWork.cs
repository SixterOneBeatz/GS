using GS.Application.Common.Interfaces;
using GS.Infrastructure.Contexts;
using GS.Infrastructure.Repositories;

namespace GS.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly GSDBContext _context;
        private protected IClienteRepository _clienteRepository;
        private protected IPedidoRepository _pedidoRepository;

        public UnitOfWork(GSDBContext context)
            => _context = context;

        public IClienteRepository ClienteRepository => _clienteRepository = new ClienteRepository(_context);
        public IPedidoRepository PedidoRepository => _pedidoRepository = new PedidoRepository(_context);

        public async Task<int> Complete()
            => await _context.SaveChangesAsync();
    }
}
