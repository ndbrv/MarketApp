import { Box } from "@mui/system";
import React from "react";
import travis from "../assets/travis.jpg"
import blazer from "../assets/blazer.jpg"
import needles from "../assets/needles.jpg"
import goose from "../assets/goose.jpg"
import lvglasses from "../assets/lvglasses.jpg"
import kapital from "../assets/kapital.jpg"
import CategoryCard from "./CategoryCard.tsx";
export default function CardRow() {
  return (
    <Box sx={{display: 'flex', justifyContent:'space-evenly'}}>
      <CategoryCard item={{text: "Footwear", image: blazer}}></CategoryCard>
      <CategoryCard item={{text: "Outerwear", image: goose}}></CategoryCard>
      <CategoryCard item={{text: "Tops", image: kapital}}></CategoryCard>
      <CategoryCard item={{text: "Bottoms", image: needles}}></CategoryCard>
      <CategoryCard item={{text: "Accesories", image: lvglasses}}></CategoryCard>
    </Box>
  );
}
