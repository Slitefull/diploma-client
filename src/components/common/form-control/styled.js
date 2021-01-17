import styled from 'styled-components'
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom'


export const Form = styled.form`
  border-radius: 5px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 850px;
  padding: 0 100px;
`

export const FormField = styled(Field)`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  background: #ffffff;
  outline: none;
  padding: 12px 0 12px 10px;
  border: 1px solid #e1e4e8;
  
  &:focus {
    background: #e8f0fe;
    box-shadow: 0 0 4px #0366d6;
  }
`

export const FormFieldWrapper = styled.div`
  width: 100%;
`

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`

export const FormLabel = styled.label`
  font-weight: 500;
`

export const FormError = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FormErrorMessage = styled.div`
  color: red;
  font-weight: 500;
  font-size: 14px;
`

export const AuthLink = styled(NavLink)`
  border-bottom: 1px black dotted;
  display: flex;
  align-self: flex-end;
  color: #3e46a2;
  margin: 10px 0 0;
`