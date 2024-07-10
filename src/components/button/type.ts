
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: 'ubmit' | 'eset' | 'button';
  className?: string;
  children?: React.ReactNode;
  tag?: string;
}

export default ButtonProps;
