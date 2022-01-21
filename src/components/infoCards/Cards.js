import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Cards = ({ info }) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
        marginLeft: "20px",
        height: "400px",
        marginTop: "15px",
      }}
    >
      <CardMedia component="img" alt="img" height="140" image={info.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" style={{ margin: "auto" }} size="small">
          Mehr Lernen
        </Button>
      </CardActions>
    </Card>
  );
};
