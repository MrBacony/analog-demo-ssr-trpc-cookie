import { Component } from '@angular/core';


@Component({
  selector: 'app-home-page',
  template: `
  <div class="p-8 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">{{ title }}</h1>

    <div class="mt-8 flex gap-4 items-center">
      <a href="/unprotectedwithtrpc" class="border rounded-3xl p-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
        Go to Unprotected Route with tRPC
      </a>
      <a href="/protected" class="border rounded-3xl p-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
        Go to Protected Route
      </a>
      <a href="/setcookie" class="border rounded-3xl p-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
        Set Cookie
      </a>
    </div>

  </div>
  `,
})
export default class HomePage {
  title = 'Unprotected Route';
}
