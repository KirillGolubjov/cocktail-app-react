import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return <form action=''></form>;
};

export default SearchForm;
