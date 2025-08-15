import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
    private router: Router
  ) {}

  goToLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/auth'], { replaceUrl: true })
  }
}
