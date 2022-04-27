using GS.Application.Common.Interfaces;
using GS.Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GS.Infrastructure
{
    public static class InfrastructureServicesRegistration
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<GSDBContext>(options => options.UseSqlServer(configuration.GetConnectionString("GSDb")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }
    }
}
