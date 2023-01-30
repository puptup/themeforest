import { Link as LinkType } from "@types";
import { Heading } from "@ui/heading";
import React from "react";

import { Link, ListWrapepr, Wrapper } from "./styled";

type ListWithLinksProps = {
  title: string;
  items: LinkType[];
};

export const ListWithTitleAndLinks = ({ title, items }: ListWithLinksProps) => {
  return (
    <Wrapper>
      <Heading level="h7" fontWeight="bold" color="white">
        {title}
      </Heading>
      <ListWrapepr>
        {items.map((item) => (
          <Link key={title + item.path} to={item.path}>
            <Heading fontWeight="medium" level="h7" color="grey">
              {item.title}
            </Heading>
          </Link>
        ))}
      </ListWrapepr>
    </Wrapper>
  );
};

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
