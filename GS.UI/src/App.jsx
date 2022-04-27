import { Home } from './Pages/Home/Home';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from './shared/GlobalStyle';
import { MainTheme } from './shared/Theme';
export const App = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
