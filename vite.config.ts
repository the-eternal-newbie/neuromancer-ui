import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		libInjectCss(),
		dts({
			tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
		})
	],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			input: Object.fromEntries(
				glob.sync('lib/**/*.{ts,tsx}', {
					ignore: ["lib/**/*.d.ts"],
				}).map((file) => [
					relative(
						'lib',
						file.slice(0, file.length - extname(file).length)
					),
					fileURLToPath(new URL(file, import.meta.url))
				])
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			}
		}
	}
})
