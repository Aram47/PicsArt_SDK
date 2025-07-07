import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/Enhance/styles/*.css',
          dest: 'styles',
        },
        {
          src: 'src/Enhance/img/*',
          dest: 'img',
        },
        {
          src: 'src/Enhance/img/icons/*',
          dest: 'img/icons',
        },
        {
          src: 'src/Enhance/img/img_small/*',
          dest: 'img/img_small',
        },
        {
          src: 'src/Enhance/img/patterns/*',
          dest: 'img/patterns',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'PicsArtSDK',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) =>
        format === 'umd' ? 'index.umd.js' : `index.${format}.js`,
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [], // если будут внешние зависимости — сюда
      output: {
        globals: {
          'picsart-sdk-core-js': 'PicsArtSDK',
        },
        // inlineDynamicImports только для UMD, и он работает — потому что 1 entry
        inlineDynamicImports: true,
      },
    },
  },
  css: {
    modules: false,
    preprocessorOptions: {
      css: {
        include: [/\.css$/],
      },
    },
  },
  assetsInclude: [
    '**/*.svg',
    '**/*.jpg',
    '**/*.png',
    '**/*.webp',
    '**/*.woff2',
  ],
});
