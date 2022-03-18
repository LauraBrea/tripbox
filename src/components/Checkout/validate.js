import swal from 'sweetalert';

export const validate = (values) => {
    if (values.nombre.length < 5) {
        swal("Ups!...", "El nombre ingresado es incorrecto", {
            buttons: false,
            timer: 1500,
          });
        return false
    }
    if (values.tel.length < 8) {
        swal("Ups!...", "El teléfono ingresado es incorrecto", {
            buttons: false,
            timer: 1500,
          });
        return false
    }
    if (values.email.length < 7) {
      swal("Ups!...", "El mail ingresado es incorrecto", {
          buttons: false,
          timer: 1500,
        });
      return false
  }
  return true
}