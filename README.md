# Bay Contractors & Roofing

Premium roofing services in San Francisco.

## 🚀 Deployment

This project is ready for deployment on **GitHub** and **Netlify**.

### Netlify (Recommended for SPAs)

1.  Push your code to a GitHub repository.
2.  Connect your repository to [Netlify](https://www.netlify.com/).
3.  Netlify will automatically detect the `netlify.toml` file and use the following settings:
    -   **Build Command:** `npm run build`
    -   **Publish Directory:** `dist`
4.  The `netlify.toml` and `public/_redirects` files ensure that client-side routing works correctly.

#### ⚠️ Troubleshooting "Page Not Found" (404) on Netlify:

If you see a "Page Not Found" error after deploying:

1.  **Check Site Settings:** Go to **Site configuration > Build & deploy > Continuous deployment**. Ensure the **Build command** is `npm run build` and the **Publish directory** is `dist`.
2.  **Verify Build Output:** Check the **Deploy logs** in Netlify to ensure the build finished successfully. It should say "Site is live ✨".
3.  **Direct Links:** If you are refreshing a page other than the home page (e.g., `/services`) and getting a 404, the `_redirects` file is missing or not being picked up. Ensure `public/_redirects` exists and contains `/* /index.html 200`.
4.  **Base Path:** If your site is not at the root (e.g., `yoursite.netlify.app/subfolder/`), you must update `vite.config.ts` to set `base: '/subfolder/'`.

### GitHub Pages

1.  If you are deploying to a custom domain (e.g., `www.baycontractors.com`), no extra configuration is needed.
2.  If you are deploying to a GitHub Pages sub-path (e.g., `https://username.github.io/bay-contractors/`), you must update `vite.config.ts`:
    ```ts
    export default defineConfig({
      base: '/bay-contractors/', // Update this to your repo name
      // ... rest of config
    });
    ```

## 🛠️ Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Build for production:
    ```bash
    npm run build
    ```
