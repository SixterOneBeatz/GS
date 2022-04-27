import { useEffect, useState } from 'react';
import { ClientesService } from '../../../services/ClientesService';
import { TablaClientesStyles } from './TablaClientes.styles';
import {
  AppBar,
  Table,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
} from '@mui/material';
import { Info, ListAlt } from '@mui/icons-material';

const columns = [
  {
    id: 'id',
    label: 'Id Cliente',
    width: '10%',
    align: 'justify',
  },
  {
    id: 'nombre',
    label: 'Nombre',
    width: '20%',
    align: 'justify',
  },
  {
    id: 'aPaterno',
    label: 'Apellido Paterno',
    width: '20%',
    align: 'justify',
  },
  {
    id: 'aMaterno',
    label: 'Apellido Materno',
    width: '20%',
    align: 'justify',
  },
];

export const TablaClientes = ({ onInfo, onPedidos }) => {
  const {
    StyledPaper,
    StyledTableContainer,
    StyledBox,
    StyledTableCell,
    StyledToolbar,
  } = TablaClientesStyles;

  const [clientes, setClientes] = useState([]);

  const getClientes = () => {
    ClientesService.getClientes()
      .then(res => setClientes([...res.data]))
      .catch(err => {
        console.error(err);
        setClientes([]);
      });
  };

  useEffect(() => {
    getClientes();
  }, []);

  // Altura dinámica de tabla
  const getTableHeigth = () => {
    try {
      const footer = document
        .getElementsByClassName('MuiBox-root')[0]
        .getBoundingClientRect();
      return window.innerHeight - footer.height;
    } catch (error) {
      return 500;
    }
  };
  useEffect(() => {
    setTableHeight(getTableHeigth());
    const handleResize = () => {
      setTableHeight(getTableHeigth());
    };
    window.addEventListener('resize', handleResize);
    getClientes();
  }, []);

  const [tableHeight, setTableHeight] = useState(getTableHeigth());

  // Paginador
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <StyledPaper>
      <StyledTableContainer height={tableHeight}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  width={column.width}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              <StyledTableCell key={'acciones'} align={'center'} width={'20%'}>
                Acciones
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex='-1' key={row.id}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {value}
                        </StyledTableCell>
                      );
                    })}
                    <StyledTableCell
                      key={'acciones'}
                      align={'center'}
                      width='20%'
                    >
                      <IconButton
                        color='primary'
                        component='span'
                        onClick={() => onInfo(row.id)}
                      >
                        <Info />
                      </IconButton>
                      <IconButton
                        color='primary'
                        component='span'
                        onClick={() => onPedidos(row.id)}
                      >
                        <ListAlt />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <StyledBox>
        <AppBar position='static'>
          <StyledToolbar>
            <span></span>
            <TablePagination
              rowsPerPageOptions={[
                10,
                25,
                100,
                { value: clientes.length, label: 'Tod@s' },
              ]}
              component='div'
              count={clientes.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </StyledToolbar>
        </AppBar>
      </StyledBox>
    </StyledPaper>
  );
};
