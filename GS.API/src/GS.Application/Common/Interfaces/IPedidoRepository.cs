namespace GS.Application.Common.Interfaces
{
    public interface IPedidoRepository
    {
        Task<List<Domain.Pedido>> GetPedidosXCliente(int clienteId);
        Task<Domain.Pedido> GetPedido(int id);
        void UpdateSaldo(Domain.Pedido pedido);
    }
}
