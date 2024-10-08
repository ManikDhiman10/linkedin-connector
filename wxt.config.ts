import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],

  entrypointsDir: './entrypoints',

  manifest: {
    permissions: ['tabs', 'activeTab'],
    
    // Content script configuration
    content_scripts: [
      {
        matches: ["https://www.linkedin.com/mynetwork/grow/*"],  // URL the content script will run on
        js: ["content-scripts/content.js"],  // content script file
        run_at: "document_end",  // content script will be injected on the document end
      },
    ],
  },
});
