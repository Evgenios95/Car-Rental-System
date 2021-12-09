//These are for the labeled inputs and the dropdowns
export const onChangeHandler = (e, inputValue, setFormData) => {
  setFormData((c) => ({
    ...c,
    [inputValue]: e.target.value,
  }));
};

export const onChangeIntHandler = (e, inputValue, setFormData) => {
  setFormData((c) => ({
    ...c,
    [inputValue]: parseInt(e.target.value),
  }));
};
