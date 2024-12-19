import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WarningType } from './types';
@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  passwordLength: number = 8;
  includeAlphabets: boolean = true;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  generatedPassword: string = '';
  warning: { type: WarningType; message: string } | null = null;

  alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  specialChars = '~!@#$%^&*()_+';
  WarningType = WarningType;
  validateLength() {
    if (this.passwordLength <= 0 || this.passwordLength > 20) {
      this.warning = {
        type: WarningType.Password,
        message: 'Password length should be between 1 and 20',
      };
    } else {
      this.warning = null;
    }
  }

  generatePassword() {
    let contenderChars = '';
    if (this.includeAlphabets) contenderChars += this.alphabets;
    if (this.includeNumbers) contenderChars += this.numbers;
    if (this.includeSpecialChars) contenderChars += this.specialChars;

    if (!contenderChars) {
      this.warning = {
        type: WarningType.Validation,
        message:
          'Please select at least one option for generating the password.',
      };
      return;
    }

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * contenderChars.length);
      password += contenderChars[randomIndex];
    }

    this.generatedPassword = password;
  }
}
