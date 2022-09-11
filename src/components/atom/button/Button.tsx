import { StyledButton } from "./Button.styles";

export interface ButtonProps {
  label: string;
  appearance: string;
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label = "button",
  appearance,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
};
