import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RenderInputs from "./render-inputs";
import useFormData from "../HOCS/useFormData";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      width: 300
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1)
    }
  }
}));

const Form = ({
  inputsData,
  inputs,
  submit,
  formHeader = "Заголовок",
  submitTitle = "title"
}) => {
  const classes = useStyles();
  const [formData, setFormData, setInitial] = useFormData(inputsData);
  useEffect(() => {
    setInitial(inputsData);
  }, [inputsData, setInitial]);

  return (
    <form
      onSubmit={e => submit(e, formData)}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <h1>{formHeader} </h1>
      <RenderInputs
        inputs={inputs}
        inputsVal={formData}
        setinputVal={setFormData}
      />
      <Button type="submit" className={classes.btn} variant="contained">
        {submitTitle}
      </Button>
    </form>
  );
};

export default Form;
