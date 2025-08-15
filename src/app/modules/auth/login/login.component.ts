import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router
  ) {}

  goToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/auth/register'], { replaceUrl: true })
  }
}
