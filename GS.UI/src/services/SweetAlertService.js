import Swal from 'sweetalert2';

export function AlertSuccess(title = 'Success', msg = '') {
  Swal.fire({
    icon: 'success',
    title: title,
    html: msg,
  });
}

export function AlertError(title = 'Error', msg = '') {
  Swal.fire({
    icon: 'error',
    title: title,
    html: msg,
  });
}

export function AlertWarning(title = 'Warning', msg = '') {
  Swal.fire({
    icon: 'warning',
    title: title,
    html: msg,
  });
}

export function AlertConfirm(
  title = 'Confirm',
  msg = '',
  onConfirmFn = () => {},
  onDenyFn = () => {}
) {
  Swal.fire({
    icon: 'question',
    title: title,
    html: msg,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
  }).then(result => {
    if (result.isConfirmed) {
      onConfirmFn();
    } else {
      onDenyFn();
    }
  });
}

export const SweetAlertService = {
  AlertConfirm,
  AlertError,
  AlertSuccess,
  AlertWarning,
};
