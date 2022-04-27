using AutoMapper;
using GS.Application.Common.DTOs;
using GS.Application.Common.Exceptions;
using GS.Application.Common.Interfaces;
using MediatR;
using System.Net;

namespace GS.Application.Cliente.Queries
{
    public class GetClienteQuery : IRequest<ClienteDTO>
    {
        public GetClienteQuery(int id)
            => Id = id;

        public int Id { get; set; }
    }

    public class GetClienteQueryHandler : IRequestHandler<GetClienteQuery, ClienteDTO>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetClienteQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ClienteDTO> Handle(GetClienteQuery request, CancellationToken cancellationToken)
        {
            var cliente = await _unitOfWork.ClienteRepository.GetCliente(request.Id);

            if (cliente == null)
                throw new EstatusException($"No se encontró el cliente con id {request.Id}", HttpStatusCode.NotFound);

            var dto = _mapper.Map<ClienteDTO>(cliente);

            return dto;
        }
    }
}
