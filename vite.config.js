import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { plugin as picm } from "vite-plugin-vue-pug-with-css-modules";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/scss/main.scss";
            `,
      },
    },
  },
  plugins: [
    picm(),
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]",
      // inject ? : 'body-last' | 'body-first',
      customDomId: "__svg__icons__dom__",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
