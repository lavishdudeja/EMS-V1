import { NgModule } from '@angular/core';


import { Login2Module } from 'app/main/pages/authentication/login-2/login-2.module';
import { Register2Module } from 'app/main/pages/authentication/register-2/register-2.module';
import { ForgotPassword2Module } from 'app/main/pages/authentication/forgot-password-2/forgot-password-2.module';
import { ResetPasswordModule } from 'app/main/pages/authentication/reset-password/reset-password.module';
import { ResetPassword2Module } from 'app/main/pages/authentication/reset-password-2/reset-password-2.module';
import { LockModule } from 'app/main/pages/authentication/lock/lock.module';
import { InvoiceCompactModule } from 'app/main/pages/invoices/compact/compact.module';
import { ProfileModule } from 'app/main/pages/profile/profile.module';

@NgModule({
    imports: [
        // Authentication
        Login2Module,
        Register2Module,
        ForgotPassword2Module,
        ResetPasswordModule,
        ResetPassword2Module,
        LockModule,

        InvoiceCompactModule,
        // Profile
        ProfileModule

    ]
})
export class PagesModule
{

}
