import IMG2 from "@assets/img_10.png";
import IMG1 from "@assets/img_11.png";
import { MainWrapper } from "@ui/main-wrapper";

import { Block, Container, Description, Img, TextBlock, Title } from "./styled";

export const DescriptionSection = () => {
  return (
    <MainWrapper>
      <Container>
        <Block>
          <TextBlock>
            <Title>Who we are</Title>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis
              quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi
              vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia
              lectus.
            </Description>
          </TextBlock>
          <Img src={IMG2} />
        </Block>
        <Block>
          <Img src={IMG1} />
          <TextBlock>
            <Title>Our mission</Title>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis
              quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi
              vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia
              lectus.
            </Description>
          </TextBlock>
        </Block>
      </Container>
    </MainWrapper>
  );
};
