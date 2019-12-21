import { useState } from "react";

const useFormInput = (init = "") => {
  const [value, setValue] = useState(init);

  function handleChange(e) {
    if (typeof e == "string") setValue(e);
    else setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange: handleChange
  };
};

export default useFormInput;
