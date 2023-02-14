import IMG1 from "@assets/img_2.png";
import IMG2 from "@assets/img_3.png";
import { useLocalization } from "@hooks/useLocalization";
import { useNavigate } from "react-router-dom";

import { Block, Button, Description, FullImg, HalfImg, NewSolutionsWrapper, Title } from "./styled";

const tPath = "home.newSolutions.";

export const NewSolutionsSection = () => {
  const navigate = useNavigate();
  const { t } = useLocalization();

  const routeChange = () => {
    navigate("/solutions");
  };

  return (
    <NewSolutionsWrapper>
      <HalfImg src={IMG1} />
      <Block>
        <Title>{t(`${tPath}title`)}</Title>
        <FullImg src={IMG2} />
        <Description>{t(`${tPath}description`)}</Description>
        <Button size="xl" onClick={routeChange}>
          {t(`${tPath}discoverMore`)}
        </Button>
      </Block>
    </NewSolutionsWrapper>
  );
};
