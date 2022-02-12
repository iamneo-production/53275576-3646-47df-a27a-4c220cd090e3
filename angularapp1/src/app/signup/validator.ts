import { EMPTY, from, of } from "rxjs";
import {
  catchError,
  exhaustMap,
  map,
  mapTo,
  switchMap,
  tap
} from "rxjs/operators";
import { AbstractControl } from "@angular/forms";

const removePrevoiusErrors = (control) => {
  const form = control.value;
  Object.keys(form) // => ['id', 'title', 'companies', ... ]
    .forEach((key) => {
      const formControl = control.get(key); // control === FormGroup (in form level)
      if (formControl.errors) {
        // { required: true, maxlength: true, yup_required..., yup_minlength, ... }
        const errorsWithoutYupErrors = Object.keys(formControl.errors).filter(
          (k) => !k.startsWith("yup_")
        ); // etc. yup_required, yup_maxlength
        const hasErrors = !!Object.keys(errorsWithoutYupErrors).length;
        formControl.setErrors(hasErrors ? errorsWithoutYupErrors : null);
      }
    });
};

export const createYupValidator = ({ schema, context = null }) => {
  return (control: AbstractControl) => {
    const form = control.value; // form level
    // { id, title, companies ... }

    const yupValiation = schema.validate(form, {
      abortEarly: false,
      context: context?.()
    }); // => Promise
    return from(yupValiation).pipe(
      tap(() => {
        removePrevoiusErrors(control);
      }),
      map(() => null),
      catchError((yupErrors) => {
        // => { inner: [{ path: 'id', type: 'required', ... }, { ... }] }

        yupErrors.inner?.forEach((err) => {
          const { path, type } = err; // { path: 'id', type: 'required' } // form === control
          const formControl = control.get(path);
          formControl.setErrors({ [`yup_${type}`]: true });
        });
        return of(null); // the form is always valid, but the fields may not.
      })
    ); // => Observable
  };
};
