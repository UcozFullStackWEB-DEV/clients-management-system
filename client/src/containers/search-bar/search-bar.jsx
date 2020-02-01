import React from "react";
import Form from "../../components/Form/form";
const inputsList = {
  search: ""
};

const inputs = [
  {
    label: "Введите данные для поиска",
    variant: "standard",
    type: "text",
    name: "search",
    id: "search"
  }
];

const SearchBar = () => {
  const onSubmit = (e, formData) => {
    e.preventDefault();
    console.log("stab search");
  };
  return (
    <Form
      inputs={inputs}
      formHeader="Поиск по базе клиентов"
      submitTitle="Искать"
      submit={onSubmit}
      inputsData={inputsList}
    />
  );
};

export default SearchBar;
