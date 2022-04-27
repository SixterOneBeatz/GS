using GS.Application.Common.DTOs;
using GS.Application.Pedidos.Commands;
using GS.Application.Pedidos.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PedidosController(IMediator mediator)
            => _mediator = mediator;

        [HttpGet("GetPedidosXCliente/{clienteId}")]
        public async Task<List<PedidoDTO>> GetPedidosXCliente(int clienteId)
            => await _mediator.Send(new GetPedidosXClienteQuery(clienteId));

        [HttpPut("UpdateSaldoPedido")]
        public async Task<int> UpdateSaldoPedido([FromBody] PedidoDTO pedido)
            => await _mediator.Send(new UpdateSaldoPedidoCommand(pedido));
    }
}
