import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName, description }) => {
  console.log(linkToRepo);
  return (
    <S.Wrapper
      href={`https://github.com/${linkToRepo}`}
      target="_blank"
      rel="noreferrer"
    >
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.FullName>{fullName}</S.FullName>
      <S.Description>{description || "Sem descrição"}</S.Description>
    </S.Wrapper>
  );
};

export default RepositoryItem;
