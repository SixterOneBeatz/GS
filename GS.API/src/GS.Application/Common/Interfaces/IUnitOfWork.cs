namespace GS.Application.Common.Interfaces
{
    public interface IUnitOfWork
    {
        public IClienteRepository ClienteRepository { get; }
        public IPedidoRepository PedidoRepository { get; }
        Task<int> Complete();
    }
}
