import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  margin-bottom: 2rem;

  input {
    color: #f1f1f1;
    background-color: #090b0f;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    transition: 0.3s;
    &:focus,
    &:hover {
      box-shadow: 0 0 4px 1px #ff9900;
    }
    caret-color: #ff9900;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin-left: 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;

export const Btn = styled.button`
  background-color: #ff9900 !important;
  transition: 0.3s;

  &:hover {
    background-color: #ff5000 !important;
  }
`;
