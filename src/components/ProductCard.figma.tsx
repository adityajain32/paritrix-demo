import figma from "@figma/code-connect/react";
import { ProductCard } from "./ProductCard";

figma.connect(ProductCard, "https://www.figma.com/design/NorthwindDS/Northwind?node-id=3-4", {
  props: {
    onSale: figma.boolean("On sale"),
    layout: figma.enum("Layout", { Vertical: "vertical", Horizontal: "horizontal" }),
    name: figma.textContent("Name"),
    price: figma.textContent("Price"),
  },
  example: ({ onSale, layout, name, price }) => <ProductCard name={name} price={price} image="/product.jpg" onSale={onSale} layout={layout} />,
});
