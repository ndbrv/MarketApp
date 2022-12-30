import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Paper, Button, Box } from "@mui/material";
import newbs from "../assets/newbs.jpg";
import samba from "../assets/Samba.jpg";
import ricks from "../assets/ricks.jpg";

function HomeCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      button: "Shop Menswear",
      image: newbs,
    },
    {
      name: "Random Name #2",
      button: "Shop Womenswear",
      image: ricks,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      elevation={2}
      sx={{
        height: "500px",
        with: "500px",
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "auto 100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          outlineColor: "black",
          border: "white",
        }}
      >
        <Typography variant="h3">{props.item.name}</Typography>
        <Button color="inherit" size="large" variant="outlined">
          {props.item.button}
        </Button>
      </Box>
    </Paper>
  );
}

export default HomeCarousel;
