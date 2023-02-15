/* eslint-disable react/no-unused-prop-types */
import { controlIcons } from "@assets/control-icons";
import { Links } from "@constants/links";
import { useLocalization } from "@hooks/useLocalization";
import { Link } from "@ui/link";
import { MainWrapper } from "@ui/main-wrapper";

import { Description, Head, History, PageName, Title } from "./styled";

export type PrimaryVariantProps = {
  variant?: "primary";
  pageName: string;
  title: string;
  description: string;
};

export const PrimaryVariant = ({ pageName, title, description }: PrimaryVariantProps) => {
  const { t } = useLocalization();

  return (
    <MainWrapper>
      <History>
        <Link to={`${Links.home}`}>{t("mainLinks.home")}</Link>{" "}
        <img src={controlIcons.Divider} alt="divider" /> {pageName}
      </History>
      <Head>
        <PageName>{pageName}</PageName>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Head>
    </MainWrapper>
  );
};
