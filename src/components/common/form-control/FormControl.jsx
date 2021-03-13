import React from 'react';

import { FormError, FormErrorMessage, FormFieldWrapper } from './styled';


const FieldCreator = ({ input, child, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  const { children, width } = props;

  return (
    <FormFieldWrapper style={{ width }}>
      {children}
      {hasError && (
        <FormError>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormError>
      )}
    </FormFieldWrapper>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FieldCreator {...props}>
      <textarea {...input} {...restProps} />
    </FieldCreator>
  );
};

export const FormInput = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FieldCreator {...props}>
      <input {...input} {...restProps} />
    </FieldCreator>
  );
};
