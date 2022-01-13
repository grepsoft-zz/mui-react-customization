import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Input, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from './styles/Styles';
import MyButton from './styles/MyButton';
import { RoundedButton } from './styles/MyButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          maxWidth: "400px",
        }}
      >
        <Paper
          sx={{
            marginTop: "2rem",
            padding: "1rem",
          }}
        >
          <Input fullWidth placeholder="First Name" />
          <Input fullWidth placeholder="Last Name" />
          <Input fullWidth placeholder="Email" />
          <Input fullWidth placeholder="Website" />
          <Button
            sx={{
              marginTop: "2px",
            }}
            variant="contained"
          >
            Submit
          </Button>
          <RoundedButton
            color="secondary"
            sx={{
              marginTop: "2px",
            }}
            variant="contained"
          >
            Cancel
          </RoundedButton>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
