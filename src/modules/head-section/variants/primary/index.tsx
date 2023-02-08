/* eslint-disable react/no-unused-prop-types */
import { controlIcons } from "@assets/control-icons";
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
  return (
    <MainWrapper>
      <History>
        <Link to="/">Home</Link> <img src={controlIcons.Divider} alt="divider" /> {pageName}
      </History>
      <Head>
        <PageName>{pageName}</PageName>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Head>
    </MainWrapper>
  );
};
