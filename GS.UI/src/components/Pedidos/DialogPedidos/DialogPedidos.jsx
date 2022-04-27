import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';
import { PedidosService } from '../../../services/PedidosServices';
import { TablaPedidos } from '../TablaPedidos/TablaPedidos';

export const DialogPedidos = ({ open, onClose, idCliente }) => {
  const handleClose = () => onClose();
  const [pedidos, setPedidos] = useState([]);

  const getPedidos = () => {
    if (idCliente !== 0)
      PedidosService.getPedidosXCliente(idCliente)
        .then(res => setPedidos([...res.data]))
        .catch(err => {
          console.error(err);
          setPedidos([]);
        });
  };

  useEffect(() => {
    getPedidos(idCliente);
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Pedidos</DialogTitle>
      <DialogContent>
        <TablaPedidos pedidos={pedidos} />
      </DialogContent>
    </Dialog>
  );
};
