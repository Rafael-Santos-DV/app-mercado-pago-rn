import { ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import { theme } from "./src/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
