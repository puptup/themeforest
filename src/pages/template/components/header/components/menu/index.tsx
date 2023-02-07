import { NavLink } from "@ui/nav-link";

import { links } from "../../constants";
import { Container, Text } from "./styled";

export const Menu = () => {
  return (
    <Container>
      {links.map((element) => {
        const { path, title } = element;
        return (
          <NavLink key={path} to={path} end>
            <Text>{title}</Text>
          </NavLink>
        );
      })}
    </Container>
  );
};
