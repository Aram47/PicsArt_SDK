import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), // точка входа
      name: 'PicsArtReactSDK',
      fileName: (format) => `PicsArt-React-SDK.${format}.js`,
      formats: ['es', 'umd'], // ✅ собираем и UMD, и ESM
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
