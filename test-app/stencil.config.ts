import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills'

export const config: Config = {
  namespace: 'pathalias-testing',
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    moduleNameMapper: {
      '^@root/(.*)$': '<rootDir>/src/$1',
    },
    verbose: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
