namespace GS.Application.Common.Interfaces
{
    public interface IClienteRepository
    {
        Task<List<Domain.Cliente>> GetClientes();
        Task<Domain.Cliente> GetCliente(int id);

    }
}
