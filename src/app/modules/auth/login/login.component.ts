import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  goToRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/auth/register'], { replaceUrl: true })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(result => {
      if (result.succeed) {
        localStorage.setItem('token', result.data.token);

        const jsonUser = JSON.stringify(result.data.user);
        localStorage.setItem('user', jsonUser);
        
        this.router.navigate([''], { replaceUrl: true });
      }
    });
  }
}
