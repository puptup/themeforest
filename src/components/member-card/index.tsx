import { MemberCardWrapper, Name, Role } from "./styled";

type MemberCardProps = {
  name: string;
  role: string;
  image: string;
};

export const MemberCard = ({ name, role, image }: MemberCardProps) => {
  return (
    <MemberCardWrapper background={image}>
      <div>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </div>
    </MemberCardWrapper>
  );
};
