import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #a62440;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  font-size: 1.1rem;
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin-right: 2rem 0.5rem;
  cursor: pointer;
  &:hover{opacity: 0.9; transform:scale(0.97)}
`;

export default Button;
