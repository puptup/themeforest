import IMG1 from "@assets/img_2.png";
import IMG2 from "@assets/img_3.png";
import { useNavigate } from "react-router-dom";

import { Block, Button, Description, FullImg, HalfImg, NewSolutionsWrapper, Title } from "./styled";

export const NewSolutionsSection = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <NewSolutionsWrapper>
      <HalfImg src={IMG1} />
      <Block>
        <Title>Radically new solutions for data</Title>
        <FullImg src={IMG2} />
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
        </Description>
        <Button size="xl" onClick={routeChange}>
          Discover more
        </Button>
      </Block>
    </NewSolutionsWrapper>
  );
};
