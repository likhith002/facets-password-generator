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
  MAX_PASSWORD_LENGTH:number=20

  alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  specialChars = '~!@#$%^&*()_+';
  WarningType = WarningType;
  validateLength() {
    if (
      !this.passwordLength ||
      this.passwordLength < 8 ||
      this.passwordLength > this.MAX_PASSWORD_LENGTH
    ) {
      this.warning = {
        type: WarningType.Password,
        message: `Password length should be between 8 and ${this.MAX_PASSWORD_LENGTH}`,
      };
      this.generatedPassword = '';
    } else if (this.warning?.type == WarningType.Password) {
      this.warning = null;
    }
  }
  validateOptions() {
    if (
      !this.includeAlphabets &&
      !this.includeNumbers &&
      !this.includeSpecialChars
    ) {
      this.warning = {
        type: WarningType.Validation,
        message:
          'Please select at least one option for generating the password.',
      };
      this.generatedPassword = '';
    } else if (this.warning?.type == WarningType.Validation) {
      this.warning = null;
    }
  }

  generatePassword() {
    let contenderChars = '';
    if (this.includeAlphabets) contenderChars += this.alphabets;
    if (this.includeNumbers) contenderChars += this.numbers;
    if (this.includeSpecialChars) contenderChars += this.specialChars;
    this.validateLength()
    this.validateOptions()
    if (this.warning) {
      return;
    }

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * contenderChars.length);
      password += contenderChars[index];
    }

    this.generatedPassword = password;
  }
}
