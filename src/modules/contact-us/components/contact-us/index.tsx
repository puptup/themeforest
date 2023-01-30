import { Button } from "@ui/button";
import { Heading } from "@ui/heading";
import { MainWrapper } from "@ui/main-wrapper";
import { Paragraph } from "@ui/paragraph";
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.betweenSections.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.betweenSections.xxl};
`;

export const ContactUsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing.block.width.xl};
  gap: ${({ theme }) => theme.spacing.betweenItems.l};
  padding: 0 ${({ theme }) => theme.spacing.betweenItems.xs};
`;

export const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <MainWrapper>
        <Container>
          <Wrapper>
            <Heading level="h2" fontWeight="bold" color="black">
              Do you need help?
            </Heading>
            <Paragraph level="p2" fontWeight="regular" color="grey">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </Paragraph>
            <Button size="xl">
              <Heading level="h6" fontWeight="bold" color="white">
                Contact us
              </Heading>
            </Button>
          </Wrapper>
        </Container>
      </MainWrapper>
    </ContactUsWrapper>
  );
};
