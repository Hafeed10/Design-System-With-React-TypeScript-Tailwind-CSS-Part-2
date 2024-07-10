export 
type ButtonType = "submit" | "reset" | "button";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  text: string;
  type: ButtonType;
  className?: string;
  Children?:React.ReactNode,
  
}

export default ButtonProps;
