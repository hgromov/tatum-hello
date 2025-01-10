import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	server: {
	  proxy: {
		'/tatum': {
		  target: 'https://ethereum-mainnet.rpc.tatum.io',
		  changeOrigin: true,
		  rewrite: (path) => path.replace(/^\/tatum/, ''),
		},
	  },
	},
  });