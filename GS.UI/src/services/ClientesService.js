import { httpClient } from './HttpClient';

const ENDPOINT = 'Clientes';

const getClientes = () => {
  return httpClient.get(ENDPOINT);
};

const getCliente = id => httpClient.get(`${ENDPOINT}/${id}`);

export const ClientesService = {
  getClientes,
  getCliente,
};
