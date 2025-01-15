import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [react(), dts({
        outDir: "dist",
        staticImport: true,
        })],
    build: {
        lib: {
            entry: 'src/index.jsx',
            name: 'Composant_p14',
            fileName: (format) => `composant_p14.${format}.js`,
        },
        rollupOptions: {
            // Assurez-vous que vos dépendances externes ne sont pas incluses dans le build
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});