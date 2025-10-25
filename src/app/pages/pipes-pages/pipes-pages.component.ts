import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-pages',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './pipes-pages.component.html',
})
export class PipesPagesComponent {

  firstName = signal('john');
  lastName = signal('doe');
  
  user = signal({
    id: 1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age: 25,
    email: 'john.doe@example.com'
  });

  currentDate = signal(new Date());
  birthDate = signal(new Date(2004, 4, 29));


  price = signal(1234.567);
  percentage = signal(0.8567);

 }
