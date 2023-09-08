import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const PhonebookForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${p => {
    return p.theme.mainColor;
  }};
`;

export const Input = styled(Field)`
  font-size: 24px;
  height: 40px;
  padding-left: 8px;
  border:  2px solid ${p => {
    return p.theme.khakiGreen
  }};
  border-radius: 10px;
  color: ${p => {
    return p.theme.khakiGreen
  }};
  background-color: ${p => {
    return p.theme.lightText
  }};
`;

export const AddBtn = styled.button`
  font-size: 24px;
  height: 40px;
  border:  2px solid ${p => {
    return p.theme.khakiGreen
  }};
  border-radius: 10px;
  color: ${p => {
    return p.theme.mainColor
  }};
  background-color: ${p => {
    return p.theme.buttonColor
  }};
  transition: background-color ${p => p.theme.trans}, color ${p => p.theme.trans};
  cursor: pointer;
  &:hover {
    background-color: ${p => {
    return p.theme.khakiGreen
  }};
  color: ${p => {
    return p.theme.lightText
  }};

  }
`;
