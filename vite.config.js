import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	base: '/webinar-landing-page/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				v2: resolve(__dirname, 'landing-page-v2.html'),
				v3: resolve(__dirname, 'landing-page-v3.html'),
			},
		},
	},
	plugins: [ViteImageOptimizer()],
});
