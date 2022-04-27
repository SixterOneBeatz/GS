using AutoMapper;
using GS.Application.Common.DTOs;

namespace GS.Application.Common.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Domain.Cliente, ClienteDTO>();
            CreateMap<Domain.Pedido, PedidoDTO>().ReverseMap();
        }
    }
}
