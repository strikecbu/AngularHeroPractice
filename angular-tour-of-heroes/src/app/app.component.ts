import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  search = '';

  constructor() {}

  findSearch(text: string) {
    console.log(text);
  }

  cleanup(event: KeyboardEvent): void {
    if(event.key === 'Escape')
      this.search = '';
  }
}
