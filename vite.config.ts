/// <reference types="vite/client" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import packageJson from "./package.json";
import { hostname } from 'os';



export default defineConfig({

  server: {
    host: '0.0.0.0',
    //port: 8080
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  
  build: {

    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: packageJson.name,
      // the proper extensions will be added
      formats: ["iife"],
      fileName: formate => `${packageJson.name}_v${packageJson.version}.${formate}.js`,
    },

    minify: false,
    rollupOptions: {

      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['vue'],
      output: {
        // "dir":"/data/repo/aushadh/version_01/php/public/res/jsv2"
        "dir": "./build"
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: 'Vue',
        // },
      },
    },
    
  },
  
})