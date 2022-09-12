import { StyledButton } from "./Button.styles";

export interface ButtonProps {
  label: string;
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label = "button",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
};
