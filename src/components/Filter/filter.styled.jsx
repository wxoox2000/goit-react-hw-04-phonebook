import styled from 'styled-components';
import { Field } from 'formik';


export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${p => {
    return p.theme.mainColor;
  }};
  margin-bottom: 20px;
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