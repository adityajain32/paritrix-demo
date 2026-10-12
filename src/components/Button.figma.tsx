import figma from "@figma/code-connect/react";
import { Button } from "./Button";

figma.connect(Button, "https://www.figma.com/design/NorthwindDS/Northwind?node-id=1-2", {
  props: {
    variant: figma.enum("Variant", { Primary: "primary", Secondary: "secondary", Danger: "danger" }),
    size: figma.enum("Size", { Small: "small", Medium: "medium" }),
    disabled: figma.boolean("Disabled"),
    label: figma.textContent("Label"),
  },
  example: ({ variant, size, disabled, label }) => (
    <Button variant={variant} size={size} disabled={disabled}>
      {label}
    </Button>
  ),
});
