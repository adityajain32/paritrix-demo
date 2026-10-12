import figma from "@figma/code-connect/react";
import { Badge } from "./Badge";

figma.connect(Badge, "https://www.figma.com/design/cuAOfrFNU2mdX4hrevlDh0/?node-id=5199-2280", {
  props: {
    children: figma.textContent("Single text"),
  },
  example: ({ children }) => (
    <Badge>
      {children}
    </Badge>
  ),
});
