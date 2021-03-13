import React from 'react';
import { AiOutlineSearch } from 'react-icons/all';
import { CustomInput, SearchWrapper } from './styled';


export const Search = ({ title }) => (
  <SearchWrapper>
    <AiOutlineSearch color="#ffffff" />
    <CustomInput placeholder={title} />
  </SearchWrapper>
);
