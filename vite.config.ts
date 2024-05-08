import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => { 
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins:[react(),tsconfigPaths()],
    server: {
      host:true
    },
    define: {
      'process.env.NYT_TOP_STORIES_KEY': 
      JSON.stringify(env.NYT_TOP_STORIES_KEY),
      'process.env.APP_USE_AVT': env.APP_USE_AVT,
    },
  };
});
