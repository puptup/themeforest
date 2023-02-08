import { useNavigate } from "react-router-dom";

import { MemberCardWrapper, Name, Role } from "./styled";

type MemberCardProps = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const MemberCard = ({ id, name, role, image }: MemberCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/our-team/${id}`);
  };

  return (
    <MemberCardWrapper background={image} onClick={handleClick}>
      <div>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </div>
    </MemberCardWrapper>
  );
};
