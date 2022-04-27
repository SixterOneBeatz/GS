import { useState } from 'react';
import { DialogCliente } from '../../components/Clientes/DialogCliente/DialogCliente';
import { TablaClientes } from '../../components/Clientes/TablaClientes/TablaClientes';
import { DialogPedidos } from '../../components/Pedidos/DialogPedidos/DialogPedidos';

export const Home = () => {
  const [openDialogCliente, setOpenDialogCliente] = useState(false);
  const [openDialogPedidos, setOpenDialogPedidos] = useState(false);
  const [idCliente, setIdCliente] = useState(0);

  const handleInfo = idCliente => {
    setIdCliente(idCliente);
    setOpenDialogCliente(true);
  };

  const handlePedidos = idCliente => {
    setIdCliente(idCliente);
    setOpenDialogPedidos(true);
  };

  return (
    <>
      <TablaClientes onInfo={handleInfo} onPedidos={handlePedidos} />
      <DialogCliente
        open={openDialogCliente}
        onClose={() => setOpenDialogCliente(false)}
        idCliente={idCliente}
      />
      <DialogPedidos
        open={openDialogPedidos}
        onClose={() => setOpenDialogPedidos(false)}
        idCliente={idCliente}
      />
    </>
  );
};
