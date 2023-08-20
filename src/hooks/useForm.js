import { useState } from "react";

export const useForm = (initialForm = {}) => {
    //estado inicializado con valor que recibe la F
  const [formState, setFormState] = useState(initialForm);

  //Controla cambio del input
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //Resetea formulario
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
