import styled from "styled-components";

export const Wrapper = styled.a`
  padding: 8px;
  border-radius: 8px;
  background-color: #090b0f;
  margin: 16px 16px;
  flex: 1 1 350px;
  align-content: center;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 5px 1px #ff9900;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  color: #ff9900;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748;
`;

export const FullName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;

export const Description = styled.p`
  color: #a2a4a5;
  margin: 1rem 0;
`;
