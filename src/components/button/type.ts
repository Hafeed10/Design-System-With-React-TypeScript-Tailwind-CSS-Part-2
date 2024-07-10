type ButtonType = "submit" | "reset" | "button"
// type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger"
// type ButtonSize = "small" | "medium" | "large"
// type ButtonIcon = "check" | "close" | "info" | "warning" 
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: ButtonType
  className?: string;
  children?: React.ReactNode;
  tag?: string;
}

export default ButtonProps;
