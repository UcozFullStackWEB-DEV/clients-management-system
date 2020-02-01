import React from "react";
import TextField from "@material-ui/core/TextField";

const RenderInputs = ({ inputs, inputsVal, setinputVal }) => {
  return inputs.map(input => {
    return (
      <TextField
        key={input.name}
        label={input.label}
        variant={input.variant}
        type={input.type}
        onChange={setinputVal}
        name={input.name}
        value={inputsVal[input.name]}
        id={input.id}
        placeholder={input.placeholder}
      />
    );
  });
};

export default RenderInputs;
