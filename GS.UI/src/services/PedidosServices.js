import { httpClient } from './HttpClient';

const ENDPOINT = 'Pedidos';

const getPedidosXCliente = clienteId =>
  httpClient.get(`${ENDPOINT}/GetPedidosXCliente/${clienteId}`);

const updateSaldoPedido = pedido =>
  httpClient.put(`${ENDPOINT}/updateSaldoPedido`, pedido);

export const PedidosService = {
  getPedidosXCliente,
  updateSaldoPedido,
};
