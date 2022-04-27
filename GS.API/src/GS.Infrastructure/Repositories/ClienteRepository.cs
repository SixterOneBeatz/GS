using GS.Application.Common.Interfaces;
using GS.Domain;
using GS.Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;

namespace GS.Infrastructure.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly GSDBContext _context;

        public ClienteRepository(GSDBContext context)
            => _context = context;

        public async Task<Cliente> GetCliente(int id)
            => await _context.Clientes.FindAsync(id);

        public async Task<List<Cliente>> GetClientes()
            => await _context.Clientes.ToListAsync();

    }
}
