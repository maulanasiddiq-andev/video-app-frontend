import { HttpErrorResponse, HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const newReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + token)
  });

  return next(newReq)
    .pipe(
      tap(event => {
        
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          localStorage.removeItem('token');
          router.navigate(['/auth'], { replaceUrl: true })
        }

        return throwError(() => error);
      })
    );
};
