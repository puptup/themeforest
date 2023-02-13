import { Item, Link, Wrapper } from "./styled";

type ScrollIndicatorProps = {
  titles: string[];
  activeStep: string;
};

export const ScrollIndicator = ({ titles, activeStep }: ScrollIndicatorProps) => {
  return (
    <Wrapper>
      {titles.map((title) => (
        <Item active={activeStep === title} key={title}>
          <Link active={activeStep === title} href={`#${title}`}>
            {title}
          </Link>
        </Item>
      ))}
    </Wrapper>
  );
};
