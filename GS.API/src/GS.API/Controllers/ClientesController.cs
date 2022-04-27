using GS.Application.Cliente.Queries;
using GS.Application.Common.DTOs;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ClientesController(IMediator mediator)
            => _mediator = mediator;

        [HttpGet]
        public async Task<List<ClienteDTO>> Get()
            => await _mediator.Send(new GetClientesQuery());

        [HttpGet("{id}")]
        public async Task<ClienteDTO> Get(int id)
            => await _mediator.Send(new GetClienteQuery(id));
    }
}
