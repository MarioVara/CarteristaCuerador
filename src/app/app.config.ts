import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideServerRendering(),
    provideAuth0({
      domain: 'dev-sorjq8zi6vttvn3p.us.auth0.com',
      clientId: 'xhFhmHH66yQME4yKzkUTUsPMppi0KjZr',
      authorizationParams: {
        redirect_uri: 'https://www.carteristacuerador.com'
        //redirect_uri: 'http://localhost:4200'

      }
    })
  ]
};


