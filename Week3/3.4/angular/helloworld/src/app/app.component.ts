import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = '';
  displayMessage: string = 'Hello World';

  updateMessage(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.message = input.value;
  }

  displayUserMessage(): void {
    this.displayMessage = this.message;
  }
}
