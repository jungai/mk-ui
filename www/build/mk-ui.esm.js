import { p as patchBrowser, g as globalScripts, b as bootstrapLazy } from './app-globals-e6e181c8.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([], options);
});
