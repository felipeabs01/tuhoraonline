// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:9001/api/',
  cdnEndpoint: '/',
  // cdnEndpoint: 'https://wellcot.azureedge.net/resources/',
  // apiV1Endpoint: 'https://preview.wellcot.com/api/v1/',
  // apiPicturesEndpoint: 'https://wellcot.com/api/beta/property/pictures/',
  // redirectUri: 'https://wellcot.com/welcome',
  // instrumentationKey: '5b411b9a-b4b6-4be9-be82-f2b5d223d62d',
  // whitelist: ['wellcot.auth0.com']
  // apiAzureEndpoint: 'https://wellcot.azurewebsites.net/api/',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
