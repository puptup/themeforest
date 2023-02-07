import { MainWrapper } from "@ui/main-wrapper";
import { useNavigate } from "react-router-dom";

import { BlockWrapper, Button, Container, Description, HeadingWrapper, Title } from "./styled";

export const AnaliticsPlatformSection = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <MainWrapper>
      <Container>
        <HeadingWrapper>
          <Title>
            The <span style={{ color: "#185CFF" }}>newest</span> business analytics platform
          </Title>
        </HeadingWrapper>
        <BlockWrapper>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </Description>
          <Button size="xl" onClick={routeChange}>
            Discover more
          </Button>
        </BlockWrapper>
      </Container>
    </MainWrapper>
  );
};
