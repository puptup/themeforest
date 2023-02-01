import { Link as LinkType } from "@types";
import React from "react";

import { Link, LinkText, ListWrapepr, Title, Wrapper } from "./styled";

type ListWithLinksProps = {
  title: string;
  items: LinkType[];
};

export const ListWithTitleAndLinks = ({ title, items }: ListWithLinksProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ListWrapepr>
        {items.map((item) => (
          <Link key={title + item.path} to={item.path}>
            <LinkText>{item.title}</LinkText>
          </Link>
        ))}
      </ListWrapepr>
    </Wrapper>
  );
};
