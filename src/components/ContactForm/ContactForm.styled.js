import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border: 1px solid black;
  width: 300px;
`;

export const StyledInput = styled(Field)`
  width: 150px;
  margin-top: 5px;
  border-radius: 7px;
  border: 1px solid black;
  padding: 3px 3px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 15px;
`;

export const StyledButton = styled.button`
  width: 100px;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 15px;
  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }
`;

export const StyledLavel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 5px;
`;
