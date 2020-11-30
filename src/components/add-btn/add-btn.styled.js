
import styled from 'styled-components';

export const AddBtn = styled.button`
  cursor: pointer;
  color: #5ABC61;
  background-color: transparent;
  display: flex;
  margin: 0 50px;
  border: 2px solid #5ABC61;
  padding: 10px;
  border-radius: 5px;
  &:before {
    content: '+';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    border: 1px solid #5ABC61;
    color: #5ABC61;
    border-radius: 50%;
    margin-right: 10px;
  }
  @media (max-width: 1199px) {
    margin: 0 50px;
  }
`;