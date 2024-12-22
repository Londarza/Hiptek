import { IregisterFormvalids } from "@/interfaces/Types";

const registerFormValidations = (
  inputs: IregisterFormvalids,
): IregisterFormvalids => {
  const errors: IregisterFormvalids = {};
  // Validación para el nombre
  if (!inputs.name) {
    errors.name = "El nombre es un campo obligatorio";
  } else if (inputs.name.length < 3) {
    errors.name = "El nombre debe tener 3 caracteres por lo menos";
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(inputs.name)) {
    errors.name = "El nombre no debe contener caracteres especiales";
  }

  // Validación para el email
  if (!inputs.email) {
    errors.email = "El email es un campo obligatorio";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs.email)) {
    errors.email = "El email no tiene un formato válido";
  }
  // Validación para direccion
  if (!inputs.address) {
    errors.address = "El nombre es un campo obligatorio";
  } else if (inputs.address.length < 10) {
    errors.address = "El nombre debe tener 10 caracteres por lo menos";
  }
  // Validación para el número de telefono
  if (!inputs.phone) {
    errors.phone = "El número de telefono es un campo obligatorio";
  } else if (!/^\d{7,8}$/.test(inputs.phone)) {
    errors.phone =
      "El número de telefono debe ser numérico y tener entre 7 y 8 caracteres";
  }

  // Validación para el username
  if (!inputs.username) {
    errors.username = "El username es un campo obligatorio";
  } else if (inputs.username.length < 6) {
    errors.username = "El username debe tener al menos 6 caracteres";
  } else if (!/^[a-zA-Z0-9]+$/.test(inputs.username)) {
    errors.username = "El username no debe contener caracteres especiales";
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

  // Validación para repetir contraseña
  if (!inputs.repeatPassword) {
    errors.repeatPassword = "Repetir la contraseña es un campo obligatorio";
  } else if (inputs.repeatPassword !== inputs.password) {
    errors.repeatPassword = "Las contraseñas no coinciden";
  }

  return errors;
};

export default registerFormValidations;

/* Validación para el número de documento
    if (!inputs.nDni) {
        errors.nDni = 'El número de documento es un campo obligatorio'
    } else if (!/^\d{7,8}$/.test(inputs.nDni)) {
        errors.nDni = 'El número de documento debe ser numérico y tener entre 7 y 8 caracteres'
    }*/

/* Validación para la fecha de nacimiento
    if (!inputs.birthdate) {
        errors.birthdate = 'La fecha de nacimiento es un campo obligatorio'
    } else {
        const today = new Date()
        const birthdate = new Date(inputs.birthdate)
        let age = today.getFullYear() - birthdate.getFullYear()
        const month = today.getMonth() - birthdate.getMonth()

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            // eslint-disable-next-line no-const-assign
            age--
        }

        if (age < 12) {
            errors.birthdate = 'Debes ser mayor de 12 años'
        }
    }*/
