import React from "react";

import { ListWrapepr, Text, Title, Wrapper } from "./styled";

type ListWithTitleProps = {
  title: string;
  items: string[];
};

export const ListWithTitle = ({ title, items }: ListWithTitleProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ListWrapepr>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ListWrapepr>
    </Wrapper>
  );
};
