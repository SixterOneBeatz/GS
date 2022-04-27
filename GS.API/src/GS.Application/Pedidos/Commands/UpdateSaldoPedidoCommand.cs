using AutoMapper;
using GS.Application.Common.DTOs;
using GS.Application.Common.Exceptions;
using GS.Application.Common.Interfaces;
using MediatR;
using System.Net;

namespace GS.Application.Pedidos.Commands
{
    public class UpdateSaldoPedidoCommand : IRequest<int>
    {
        public UpdateSaldoPedidoCommand(PedidoDTO pedido)
            => Pedido = pedido;

        public PedidoDTO Pedido { get; set; }
    }

    public class UpdateSaldoPedidoCommandHandler : IRequestHandler<UpdateSaldoPedidoCommand, int>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateSaldoPedidoCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<int> Handle(UpdateSaldoPedidoCommand request, CancellationToken cancellationToken)
        {
            var pedido = await _unitOfWork.PedidoRepository.GetPedido(request.Pedido.Id);

            if (pedido == null)
                throw new EstatusException($"No se encontró ningún pedido con id: {request.Pedido.Id}", HttpStatusCode.NotFound);

            _unitOfWork.PedidoRepository.UpdateSaldo(pedido);
            _mapper.Map(request.Pedido, pedido);
            _ = _unitOfWork.Complete();

            return pedido.Id;
        }
    }
}
