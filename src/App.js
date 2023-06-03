import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, purple } from "@mui/material/colors";
import { Layout } from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  typography: {
    fontFamily: "Comfortaa",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
