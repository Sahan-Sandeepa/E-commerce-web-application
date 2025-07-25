import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { UNIVERSAL_PROVIDERS } from '@ng-web-apis/universal';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), UNIVERSAL_PROVIDERS],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
