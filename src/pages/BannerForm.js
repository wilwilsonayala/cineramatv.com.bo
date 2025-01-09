import React, { useState } from "react";
import { Typography, Container, TextField, Button, List, ListItem } from "@mui/material";

const BannerForm = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  const handleAddImage = () => {
    if (newImage) {
      setImages([...images, newImage]);
      setNewImage("");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestionar Imágenes del Banner
      </Typography>
      <TextField
        label="URL de la nueva imagen"
        fullWidth
        margin="normal"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddImage}>
        Agregar Imagen
      </Button>
      <List>
        {images.map((img, index) => (
          <ListItem key={index}>{img}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BannerForm;
