import { companiesLogos } from "@assets/companies";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import React from "react";
import styled from "styled-components";

import { Block, Container, ParagraphBlock, StatisticsWrapper } from "./styled";

export const CompaniesListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CompanyLogo = styled.img``;

export const StatiscticsSection = () => {
  return (
    <MainWrapper>
      <Container>
        <Heading level="h2" fontWeight="bold">
          We provide services that guarantee your success
        </Heading>
        <StatisticsWrapper>
          <Block>
            <Paragraph level="p0" fontWeight="extraBold" color="primary">
              1830+
            </Paragraph>
            <Paragraph level="p2" fontWeight="regular" color="grey">
              Project executed
            </Paragraph>
          </Block>
          <Block>
            <Paragraph level="p0" fontWeight="extraBold" color="primary">
              843+
            </Paragraph>
            <Paragraph level="p2" fontWeight="regular" color="grey">
              Satisfied customers
            </Paragraph>
          </Block>
          <Block>
            <Paragraph level="p0" fontWeight="extraBold" color="primary">
              390
            </Paragraph>
            <Paragraph level="p2" fontWeight="regular" color="grey">
              Data management
            </Paragraph>
          </Block>
          <ParagraphBlock>
            <Paragraph level="p1" fontWeight="regular" color="grey">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt
              tempor quam, non mollis quam finibus nec.
            </Paragraph>
          </ParagraphBlock>
        </StatisticsWrapper>
        <CompaniesListWrapper>
          {companiesLogos.map((logo, index) => (
            <CompanyLogo key={index} src={logo} />
          ))}
        </CompaniesListWrapper>
      </Container>
    </MainWrapper>
  );
};
