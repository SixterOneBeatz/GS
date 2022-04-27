namespace GS.Application.Common.DTOs
{
    public class PedidoDTO
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public decimal Saldo { get; set; }
    }
}
