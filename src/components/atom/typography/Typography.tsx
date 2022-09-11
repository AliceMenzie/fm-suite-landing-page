import { StyledTyporgraphy } from "./Typography.styles";

// interface TypographyProps {
//   variant?: React.ReactHTMLElement;
//   children: React.ReactNode;
// }

export const Typography = <C extends React.ElementType>({
  as,
  children,
  ...props
}: {
  as?: C;
  children: React.ReactNode;
}) => {
  //   const htmlAttr = VariantMap[variant];
  const StyledTyporgraphy = as || "span";
  return <StyledTyporgraphy {...props}>{children}</StyledTyporgraphy>;
};
