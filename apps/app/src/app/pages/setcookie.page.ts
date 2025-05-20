import { Component } from '@angular/core';

@Component({
  selector: 'app-set-cookie-page',
  imports: [],
  template: ` <div class="p-8 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
  </div> `,
})
export default class SetCookiePage {
  title = 'Route to set cookie';
}
