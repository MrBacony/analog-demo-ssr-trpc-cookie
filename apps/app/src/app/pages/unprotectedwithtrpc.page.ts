import { Component, computed, resource } from '@angular/core';
import { injectTrpcClient } from '../../trpc-client';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-unprotectedwithtrpc-page',
  template: `
    <div class="p-8 flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold">{{ title }}</h1>

      <div class="mt-8 flex gap-4 items-center">
        <a
          href="/"
          class="border rounded-3xl p-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Go to Unprotected Route
        </a>
        <a
          href="/protected"
          class="border rounded-3xl p-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Go to Protected Route
        </a>
        <a
          href="/setcookie"
          class="border rounded-3xl p-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Set Cookie
        </a>
      </div>
      <div class="mt-8">
        <h2 class="text-xl font-bold">tRPC Demo</h2>
        <p class="mt-4">Response: {{ resource.value() }}</p>
    </div>
  `,
})
export default class UnprotectedWithTrpcPage {
  title = 'Unprotected Route with tRPC';
  trpc = injectTrpcClient();
  resource = resource({
    request: () => ({ name: 'Angular' }),
    loader: ({ request }) =>
      firstValueFrom(this.trpc.demo.demo.query(request)),
  });

  result = computed(() => {
    return this.resource.value();
  });
  //resource$ = this.trpc.demo.demo.query({ name: 'Test' });
}
