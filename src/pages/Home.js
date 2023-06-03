import { Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

export const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container>
        {notes &&
          notes.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Paper>{item.title}</Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
