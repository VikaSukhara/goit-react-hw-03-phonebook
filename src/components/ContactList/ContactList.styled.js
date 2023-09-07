import { styled } from 'styled-components';

// export const Item = styled.li`
// display: flex;
// height: 50px;
// margin-bottom: 10px;
// /* flex-direction: row; */
// `;

// export const Button = styled.button`
// /* height: 50px;
// /* width: 100px; */

//   padding: 0;
//   border: none;
//   font: inherit;
//   color: inherit;
//   background-color: transparent;
// border: 1px solid black;
// border-radius: 7px;
// background-color: white;
// cursor: pointer;
// margin-left: 10px;
// `;

export const List = styled.ol`
  margin-top: 15px;
  padding-left: 20px;
`;
export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 5px;
`;
export const Paragraph = styled.p`
  margin: 0;
  font-size: 18px;
`;
export const Button = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 25px;
  border: 1px solid black;
  border-radius: 7px;
  background-color: white;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }
`;
