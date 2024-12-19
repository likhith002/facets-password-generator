
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://likhith002.github.io/facets-password-generator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://likhith002.github.io/facets-password-generator"
  }
],
  assets: {
    'index.csr.html': {size: 561, hash: '3f831709331ee23ef6042c92bd8590ce32bd463dfb33bd0e0fd1acae7d027de3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'ba370ca418b6f82006f81764dd898b23b432c8039e8a8fee635a99a909759a52', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5348, hash: '1b0d065cf3a29ad856cdeea6517e21cb4a4158f545c4198f856339d8f8f70bac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
