using AutoMapper;
using GS.Application.Common.DTOs;
using GS.Application.Common.Exceptions;
using GS.Application.Common.Interfaces;
using MediatR;
using System.Net;

namespace GS.Application.Cliente.Queries
{
    public class GetClientesQuery : IRequest<List<ClienteDTO>>
    {
    }

    public class GetClientesHandler : IRequestHandler<GetClientesQuery, List<ClienteDTO>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetClientesHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<List<ClienteDTO>> Handle(GetClientesQuery request, CancellationToken cancellationToken)
        {
            var clientesdb = await _unitOfWork.ClienteRepository.GetClientes();

            if (clientesdb == null)
                throw new EstatusException($"No se hay clientes registrados", HttpStatusCode.NoContent);

            var clientes = _mapper.Map<List<ClienteDTO>>(clientesdb);

            return clientes;
        }
    }
}
