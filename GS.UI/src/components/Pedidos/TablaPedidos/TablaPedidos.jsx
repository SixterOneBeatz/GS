import { useState } from 'react';
import { Save } from '@mui/icons-material';
import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  IconButton,
} from '@mui/material';
import { TablaPedidosStyles } from './TablaPedidos.styles';
import { PedidosService } from '../../../services/PedidosServices';
import { SweetAlertService } from '../../../services/SweetAlertService';

export const TablaPedidos = ({ pedidos }) => {
  const { StyledTable } = TablaPedidosStyles;

  const handleSave = pedido => {
    if (pedido.saldo)
      PedidosService.updateSaldoPedido(pedido)
        .then(res => {
          SweetAlertService.AlertSuccess(
            'Éxito',
            'Se actualizó el saldo del pedido correctamente'
          );
        })
        .catch(err => console.log(err));
    else
      SweetAlertService.AlertWarning(
        'Advertencia',
        'El saldo no puede estar vacío'
      );
  };

  return (
    <TableContainer component={Paper}>
      <StyledTable width={500} height={60} size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Fecha del pedido</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Saldo</TableCell>
            <TableCell>Guardar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pedidos.map(row => {
            const [saldo, setSaldo] = useState(row.saldo);
            return (
              <TableRow key={row.id}>
                <TableCell>
                  {new Date(row.fechaAlta).toLocaleString()}
                </TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>
                  <TextField
                    value={saldo}
                    label={'Saldo'}
                    size={'small'}
                    type={'number'}
                    onChange={e => setSaldo(e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    size='small'
                    onClick={() => handleSave({ ...row, saldo: Number(saldo) })}
                  >
                    <Save />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
