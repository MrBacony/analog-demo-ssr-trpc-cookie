import { Component } from '@angular/core';

@Component({
  selector: 'app-protected-page',
  template: ` 
  <div class="p-8 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
  </div>`,
})
export default class ProtectedPage {
  title = 'Protected Route';
}
