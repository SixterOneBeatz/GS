namespace GS.Domain
{
    public class Pedido
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public string Descripcion { get; set; }
        public decimal Saldo { get; set; }
        public DateTime FechaAlta { get; set; } = DateTime.Now;
        public DateTime? FechaMod { get; set; }
        public virtual Cliente Cliente { get; set; }
    }
}
