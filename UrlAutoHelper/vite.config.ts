import {defineConfig} from 'vite';
import monkey from 'vite-plugin-monkey';
// @ts-ignore resolveJsonModule
import {name} from './package.json';
// @ts-ignore resolveJsonModule
import {repoUrl} from '../config.json';

const version = ((): string => {
  let version = process.env.VERSION_CODE;
  while (version.length < 4) {
    version = '0' + version;
  }
  return version.split('').join('.')
})()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [monkey({
    entry: 'src/main.ts', userscript: {
      "author": 'kmou424',
      "downloadURL": `${repoUrl}/${name}.user.js`,
      "icon": 'https://vitejs.dev/logo.svg',
      "match": ['*://*/*'],
      "name": 'UrlAutoHelper',
      "namespace": 'https://github.com/kmou424/TampermonkeyScripts',
      "run-at": 'document-end',
      "updateURL": `${repoUrl}/${name}.user.js`,
      "version": `${version}`
    },
  }),],
});
