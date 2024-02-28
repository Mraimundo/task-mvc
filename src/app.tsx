import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/home";
import { AppProvider } from "./contexts";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Home />
        <GlobalStyle />
        <Toaster richColors />
      </AppProvider>
    </ThemeProvider>
  );
}
