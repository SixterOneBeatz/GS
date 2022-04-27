using AutoMapper;
using GS.Application.Common.DTOs;
using GS.Application.Common.Exceptions;
using GS.Application.Common.Interfaces;
using MediatR;
using System.Net;

namespace GS.Application.Pedidos.Queries
{
    public class GetPedidosXClienteQuery : IRequest<List<PedidoDTO>>
    {
        public GetPedidosXClienteQuery(int clienteId)
            => ClienteId = clienteId;

        public int ClienteId { get; set; }
    }

    public class GetPedidosXClienteQueryHandler : IRequestHandler<GetPedidosXClienteQuery, List<PedidoDTO>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetPedidosXClienteQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<List<PedidoDTO>> Handle(GetPedidosXClienteQuery request, CancellationToken cancellationToken)
        {
            var cliente = await _unitOfWork.ClienteRepository.GetCliente(request.ClienteId);

            if (cliente == null)
                throw new EstatusException($"No se encontró el cliente con id {request.ClienteId}", HttpStatusCode.NotFound);

            var pedidos = await _unitOfWork.PedidoRepository.GetPedidosXCliente(request.ClienteId);

            if (pedidos == null || pedidos.Count == 0)
                throw new EstatusException($"No pedidos para el cliente", HttpStatusCode.NoContent);

            var response = _mapper.Map<List<PedidoDTO>>(pedidos);

            return response;
        }
    }
}
