import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Keeper-react-app/', // 👈 This is the key line
  plugins: [react()],
});