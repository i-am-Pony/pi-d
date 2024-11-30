import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        plugin: "src/plugin.ts",
        index: "./index.html",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  preview: {
    port: 5173,
  },
});
