import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '@app/_services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private formBuilder: FormBuilder,  
		private router: Router,  
		private authService: AuthService
		) { }

	loginForm: FormGroup;  
	message: string;  
	returnUrl: string;
	submitted = false;

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({  
			userid: ['', Validators.required],  
			password: ['', Validators.required]  
		});

		this.returnUrl = '/admin';
		this.authService.logout();
	}

	get f() {
		return this.loginForm.controls;
	}

	login() {
		this.submitted = true;
		
		if (this.loginForm.invalid) {  
			return;  
		} else {  
			if (this.f.userid.value == 'admin' && this.f.password.value == 'admin@123') {  
				console.log("Login successful");  
				//this.authService.authLogin(this.model);  
				localStorage.setItem('isLoggedIn', "true");  
				localStorage.setItem('token', this.f.userid.value);  
				this.router.navigate([this.returnUrl]);  
			} else {  
				this.message = "Please check your userid and password";  
			}  
		}  
	}

}
