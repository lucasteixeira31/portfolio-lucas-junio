import { resolve } from "node:path";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function copiarArquivosEstaticos() {
  return {
    name: "copiar-arquivos-estaticos",
    closeBundle() {
      mkdirSync("docs", { recursive: true });

      [
        ["assets/images", "docs/assets/images"],
        ["src/js", "docs/src/js"],
        ["game", "docs/game"]
      ].forEach(function ([origem, destino]) {
        if (existsSync(origem)) {
          cpSync(origem, destino, { recursive: true });
        }
      });

      [
        "docs/game/.gitignore",
        "docs/game/README.md",
        "docs/game/desktop.ini"
      ].forEach(function (arquivo) {
        if (existsSync(arquivo)) {
          rmSync(arquivo);
        }
      });
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), copiarArquivosEstaticos()],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cerebro: resolve(__dirname, "preview-cerebro.html")
      }
    }
  }
});
