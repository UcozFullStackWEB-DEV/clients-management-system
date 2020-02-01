import { useState } from "react";

const useFormData = (formFields = []) => {
  const [formData, setInitialData] = useState(formFields);

  const setDataFromEvent = e => {
    // console.log(e.target.name);
    setInitialData({ ...formData, [e.target.name]: e.target.value });
  };
  return [formData, setDataFromEvent, setInitialData];
};

export default useFormData;
