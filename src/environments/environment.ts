import 'zone.js/dist/zone-error'; // Included with Angular CLI.

import { IEnvironment } from './ienvironment';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiHost =
  'd-cap-blog-backend.whitepond-b96fee4b.westeurope.azurecontainerapps.io';
const apiUrl = `https://${apiHost}/`;

export const environment: IEnvironment = {
  production: true,
  enableDebugTools: true,
  logLevel: 'debug',
  apiHost,
  apiUrl,
};
