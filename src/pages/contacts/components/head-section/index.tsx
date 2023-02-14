/* eslint-disable @typescript-eslint/no-shadow */
import { controlIcons } from "@assets/control-icons";
import { contacts } from "@constants/contacts";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { ContactUsForm } from "@modules/contact-us-form";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import {
  Container,
  History,
  Icon,
  InfoBlock,
  InfoDescription,
  InfoTitle,
  InfoWrapper,
  PrimaryText,
  Title,
} from "./styled";

export const HeadSection = () => {
  const { t } = useLocalization();

  const title = t("contactsPage.title");
  return (
    <MainWrapper>
      <History>
        <Link to={`${Links.home}`}>{t("mainLinks.home")}</Link>
        <img src={controlIcons.Divider} alt="divider" /> {t("mainLinks.contacts")}
      </History>
      <Container>
        <Title>
          {`${title.split(" ").slice(0, -2).join(" ")} `}
          <PrimaryText>{title.split(" ").slice(-2).join(" ")}</PrimaryText>
        </Title>
        <ContactUsForm variant="secondary" />
      </Container>
      <InfoBlock>
        {contacts.map(({ title, icon, subTitle, path }) => (
          <div key={title}>
            <InfoWrapper>
              <Icon src={icon} />
              <InfoTitle>{t(subTitle)}</InfoTitle>
            </InfoWrapper>
            <InfoDescription href={path} target="_blank">
              {t(title)}
            </InfoDescription>
          </div>
        ))}
      </InfoBlock>
    </MainWrapper>
  );
};
