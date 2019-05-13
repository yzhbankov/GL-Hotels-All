import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { IApplicationState } from '../../models';
import { UserAuthenticate } from '../../store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loading$: Observable<boolean>;
  public error$: Observable<string | null>;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
  });

  public constructor(private authService: AuthService, private store: Store<IApplicationState>) {
    this.loading$ = store.pipe(select('user', 'loading'));
    this.error$ = store.pipe(select('user', 'error'));
  }

  public onSubmit(): void {
    this.store.dispatch(new UserAuthenticate(this.loginForm.value));
  }

}
