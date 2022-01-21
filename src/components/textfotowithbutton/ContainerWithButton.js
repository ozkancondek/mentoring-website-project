import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const ContainerWithButton = () => {
  return (
    <div>
      <Card
        style={{
          margin: "auto",
          boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",

          height: "auto",
          marginTop: "25px",
          padding: "10px",
          width: "80%",
          marginBottom: "60px",
        }}
      >
        <CardMedia
          component="img"
          alt="img"
          height="300"
          image="https://www.ldatschool.ca/wp-content/uploads/2014/02/Mobile-Assistive-Technology1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ausrüstung durch Stipendium und Sponsoring
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Die Migranten Jugendlichen werden mit Geräten und Büchern versorgt,
            die sie brauchen, um das Mentoring Programm vernünftig zu verfolgen
            und um Ihre Fähigkeiten und Talente umzusetzen
          </Typography>
          <Typography variant="body1" color="text.primary">
            . Sie können hier ein Stipendium schenken oder die Geräte sponsoren
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" style={{ margin: "auto" }} size="small">
            Sponsoren&Schenken
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
