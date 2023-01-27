import { Heading } from "@ui/heading";
import React from "react";

import { ListWrapepr, Wrapper } from "./styled";

type ListWithTitleProps = {
  title: string;
  items: string[];
};

export const ListWithTitle = ({ title, items }: ListWithTitleProps) => {
  return (
    <Wrapper>
      <Heading level="h7" fontWeight="bold" color="white">
        {title}
      </Heading>
      <ListWrapepr>
        {items.map((item, index) => (
          <Heading key={index} fontWeight="medium" level="h7" color="grey">
            {item}
          </Heading>
        ))}
      </ListWrapepr>
    </Wrapper>
  );
};
