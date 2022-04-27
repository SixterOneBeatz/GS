import { Paper, TableCell, TableContainer, Toolbar, Box } from '@mui/material';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  width: 100%;
  overflow: hidden;
`;

const StyledTableContainer = styled(TableContainer)`
  height: ${props => props.height}px;
`;

const StyledTableCell = styled(TableCell)`
  width: ${props => props.width};
`;

const StyledBox = styled(Box)`
  position: 'fixed';
  left: 0;
  bottom: 0;
  width: '100%';
  text-align: 'center';
  flex-grow: 1;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: 'space-between';
  background-color: 'whitesmoke';
`;

export const TablaClientesStyles = {
  StyledPaper,
  StyledTableContainer,
  StyledBox,
  StyledTableCell,
  StyledToolbar,
};
