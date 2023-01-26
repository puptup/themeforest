import { Heading } from "@ui/heading";
import { NavLink } from "@ui/nav-link";
import React from "react";

import { links } from "../constants";
import { Container } from "../styled";

export const Menu = () => {
  return (
    <Container>
      {links.map((element) => {
        return (
          <NavLink key={element.path} to={element.path} end>
            <Heading fontWeight="medium" level="h7">
              {element.title}
            </Heading>
          </NavLink>
        );
      })}
    </Container>
  );
};
