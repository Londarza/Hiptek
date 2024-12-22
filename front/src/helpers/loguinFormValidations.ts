import { IloginForm, IloginFormValidation } from "@/interfaces/Types";

const loguinFormValidations = (inputs: IloginForm): IloginFormValidation => {
  const errors: IloginFormValidation = {};
  if (!inputs.email) {
    errors.email = "El email es un campo obligatorio";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs.email)) {
    errors.email = "El email no tiene un formato válido";
  }
  // Validación para la contraseña
  if (!inputs.password) {
    errors.password = "La contraseña es un campo obligatorio";
  } else if (inputs.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (!/(?=.*[A-Z])(?=.*\d)/.test(inputs.password)) {
    errors.password =
      "La contraseña debe contener al menos un número y una letra mayúscula";
  }

  return errors;
};

export default loguinFormValidations;
