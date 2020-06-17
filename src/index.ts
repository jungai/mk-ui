export * from './components';
import singleSpaHtml from 'single-spa-html';

export const { bootstrap, mount, unmount } = singleSpaHtml({
  template: '<my-component></my-component>',
})
