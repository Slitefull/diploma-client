/*eslint-disable*/
export const required = (value) => (value ? null : 'Field is required');
export const onlyDigits = (value) => (value && /^\d+$/.test(value) ? null : 'Only digits');
export const onlyLetters = (value) => (value && /^[a-zA-Z]/.test(value) ? null : 'Only letters');
export const onlyUrl = (value) => (/^(ftp|http|https):\/\/[^ "]+$/.test(value) ? null : 'Only URL');
export const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : null);
export const maxLengthCreator = (maxLength) => (value) => (value !== undefined && (value.length > maxLength) ? `Max length is ${maxLength} symbols` : null);
