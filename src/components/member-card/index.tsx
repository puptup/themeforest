import { MemberCardWrapper, Name, Role } from "./styled";

type MemberCardProps = {
  id: string;
  name: string;
  role: string;
  image: string;
  handleLinkClick: (id: string) => () => void;
};

export const MemberCard = ({ id, name, role, image, handleLinkClick }: MemberCardProps) => {
  return (
    <MemberCardWrapper background={image} onClick={handleLinkClick(id)}>
      <div>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </div>
    </MemberCardWrapper>
  );
};
