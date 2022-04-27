import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ClientesService } from '../../../services/ClientesService';

import { DialogClienteStyles } from './DialogCliente.styles';

export const DialogCliente = ({ open, onClose, idCliente }) => {
  const [cliente, setCliente] = useState({});
  const handleClose = () => onClose();

  const getCliente = idCliente => {
    if (idCliente !== 0)
      ClientesService.getCliente(idCliente)
        .then(res => setCliente(res.data))
        .catch(err => {
          console.error(err);
          setCliente({});
        });
  };

  useEffect(() => {
    getCliente(idCliente);
  }, [open]);

  const { StyledTitle } = DialogClienteStyles;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Info del cliente</DialogTitle>
      <DialogContent>
        <Card>
          <CardContent>
            <StyledTitle gutterBottom>ID_CLIENTE</StyledTitle>
            <Typography variant='h6' component='span'>
              {cliente.id}
            </Typography>
            <StyledTitle gutterBottom>Nombre</StyledTitle>
            <Typography variant='h6' component='span'>
              {cliente.nombre} {cliente.aPaterno} {cliente.aMaterno}
            </Typography>
            <StyledTitle gutterBottom>RFC</StyledTitle>
            <Typography variant='h6' component='span'>
              {cliente.rfc}
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
