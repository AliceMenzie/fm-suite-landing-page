import { StyledTypography } from "./Typography.styles";

// interface TypographyProps {
//   variant?: React.ReactHTMLElement;
//   children: React.ReactNode;
// }

// export interface VariantProps {
//   xl?: string;
//   l?: string;
//   m?: string;
//   s?: string;
//   quote?: string;
//   body?: string;
//   footer?: string;
// }

export const Typography = <C extends React.ElementType>({
  as,
  variant,
  bold,
  light,
  appearance,
  children,
  className,
  ...props
}: {
  as?: C;
  children: React.ReactNode;
  variant?: string;
  bold?: boolean;
  appearance?: string;
  light?: boolean;
  className?: string;
}) => {
  return (
    <StyledTypography
      className={className}
      appearance={appearance}
      bold={bold}
      variant={variant}
      light={light}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
