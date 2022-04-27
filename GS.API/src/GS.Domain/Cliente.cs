namespace GS.Domain
{
    public class Cliente
    {
        public Cliente()
        {
            Pedidos = new HashSet<Pedido>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string APaterno { get; set; }
        public string AMaterno { get; set; }
        public string RFC { get; set; }
        public ICollection<Pedido> Pedidos { get; set; }
    }
}