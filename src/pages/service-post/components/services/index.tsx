import { DropdownList } from "@components/dropdown-list";

import { CategoryTitle, Title, Wrapper } from "./styled";

const services = [
  {
    title: "Machine learning",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Embed analytics",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Data analytics",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Big data consulting",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Artificial intelligence",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];

export const Services = () => {
  return (
    <Wrapper>
      <Title>Services</Title>
      {services.map(({ title, value }) => (
        <DropdownList
          key={title}
          title={<CategoryTitle>{title}</CategoryTitle>}
          textColor="black"
          lineColor="black"
        >
          <p>{value}</p>
        </DropdownList>
      ))}
    </Wrapper>
  );
};
