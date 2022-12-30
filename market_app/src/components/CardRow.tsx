import travis from "../assets/travis.jpg";
import CategoryCard from "./CategoryCard";
import { Box } from "@mui/system";
import React from "react";
import travis from "../assets/travis.jpg"
export default function CardRow() {
  return (
    <Box>
      <CategoryCard items={[text: "Footwear", image:""]}></CategoryCard>
      <CategoryCard></CategoryCard>
    </Box>
  );
}
