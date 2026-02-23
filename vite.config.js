import { defineConfig } from 'vite';

export default defineConfig({
  base: 'electiva-1',
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});