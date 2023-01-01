import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


export default function CategoryCard(props) {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {props.item.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
