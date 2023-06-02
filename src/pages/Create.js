import { Typography, Button, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="text.secondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("Clicked")}
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};
