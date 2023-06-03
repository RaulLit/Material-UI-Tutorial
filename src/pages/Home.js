import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { NoteCard } from "../components/NoteCard";

export const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((item) => item.id != id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes &&
          notes.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <NoteCard note={item} handleDelete={handleDelete} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
