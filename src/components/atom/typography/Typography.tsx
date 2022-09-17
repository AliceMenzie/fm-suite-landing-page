import { StyledTypography } from "./Typography.styles";

// interface TypographyProps {
//   variant?: React.ReactHTMLElement;
//   children: React.ReactNode;
// }

export interface Props {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: string;
  bold?: boolean;
  appearance?: string;
  light?: boolean;
  className?: string;
}

export const Typography = ({
  as,
  variant,
  bold,
  light,
  appearance,
  children,
  className,
  ...props
}: Props) => {
  return (
    <StyledTypography
      className={className}
      appearance={appearance}
      bold={bold}
      variant={variant}
      light={light}
      as={as}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
