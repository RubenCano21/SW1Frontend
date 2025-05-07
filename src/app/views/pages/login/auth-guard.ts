import { Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  return token ? true : router.parseUrl('/auth/login');
};

