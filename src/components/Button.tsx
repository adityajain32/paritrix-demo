import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", size = "medium", className, ...rest }: ButtonProps) {
  return <button className={[styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ")} {...rest} />;
}
