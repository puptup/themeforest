import { DropdownList } from "@components/dropdown-list";

import { CategoryTitle, Title } from "./styled";

const categories = [
  {
    title: "Software development",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Information security",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Internet of things",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Digital transformation",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    title: "Healthcare it",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];

export const Categories = () => {
  return (
    <div>
      <Title>Categories</Title>
      {categories.map(({ title, value }) => (
        <DropdownList
          title={<CategoryTitle>{title}</CategoryTitle>}
          textColor="black"
          lineColor="black"
        >
          <p>{value}</p>
        </DropdownList>
      ))}
    </div>
  );
};
