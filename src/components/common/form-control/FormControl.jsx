import React, { useState } from 'react'

import { FormError, FormErrorIcon, FormErrorMessage, FormFieldWrapper } from './styled';
import { Window } from '../../../styled';


const FieldCreator = ({ input, child, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  const [isShown, setIsShown] = useState(false)

  return (
    <FormFieldWrapper>
      {props.children}
      {hasError && <FormError>
        {isShown
          ? <FormErrorMessage><Window hasError>{meta.error}</Window></FormErrorMessage>
          : null
        }
        <FormErrorIcon
          color={'red'}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
      </FormError>
      }
    </FormFieldWrapper>
  )
}

export const Textarea = props => {
  const {input, meta, child, ...restProps} = props;
  return <FieldCreator {...props}>
    <textarea {...input} {...restProps} />
  </FieldCreator>
}

export const Input = props => {
  const {input, meta, child, ...restProps} = props;
  return <FieldCreator {...props}>
    <input {...input} {...restProps} />
  </FieldCreator>
}