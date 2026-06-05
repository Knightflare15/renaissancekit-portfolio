# Renaissance Kit Portfolio

A React + Vite portfolio site designed around the `Renaissance Kit` logo and brand direction.

## Files to edit

- `src/siteConfig.js`
  - Change `domain`
  - Change `domainUrl`
  - Change `instagramHandle` and `instagramUrl`
  - Replace the project links for:
    - `Brix`
    - `Investigation Room`
    - `The Script`
  - Update hero copy, contact copy, and footer note if needed

- `assets/renaissance-kit-logo.png`
  - Replace this file if you export a cleaner or transparent logo later

## Local preview

If you want a quick local server:

```powershell
cd C:\Users\Aryan\Projects\renaissancekit-portfolio
npm install
npm run dev
```

## Deploy to your domain

This builds to static files, so it can be deployed to any static host.

Generic flow:

1. Run `npm install`
2. Run `npm run build`
3. Upload the generated `dist` folder to your hosting provider.
2. Point `renaissancekit.in` to that static site.
3. Set the custom domain in your hosting dashboard.
4. Rebuild and re-upload whenever you change `src/siteConfig.js`.

## Azure deployment

Best fit for this project: `Azure Static Web Apps`.

Why this is the best choice:

- This site is a static React/Vite frontend.
- Azure Static Web Apps is designed for this exact shape.
- It includes free SSL for custom domains.
- Microsoft Learn shows Free and Standard plans, with custom domains supported on both.

Recommended path:

1. Push this folder to a GitHub repository.
2. In Azure Portal, create a `Static Web App`.
3. Connect it to your GitHub repo.
4. Use these build settings:
   - App location: `/`
   - API location: leave blank
   - Output location: `dist`
5. Azure will create a GitHub Actions workflow for deployments.
6. After the first successful deploy, add your domain in:
   - `Static Web App -> Custom domains`

### Domain setup for `www`

For `www.renaissancekit.in`:

- Add a `CNAME` record
- Host: `www`
- Value: your generated Azure Static Web Apps hostname

Then add `www.renaissancekit.in` inside Azure Static Web Apps custom domains.

### Domain setup for apex domain

For the root domain `renaissancekit.in`:

- Best option: use `ALIAS`, `ANAME`, or `CNAME flattening` if your registrar supports it.
- If your registrar does not support that, you can forward the apex domain to `www.renaissancekit.in`.
- Azure also supports apex setup with an `A` record, but Microsoft notes this can lose global distribution benefits.

### SPA routing

This repo includes:

- `public/staticwebapp.config.json`

It makes route refreshes work correctly by rewriting unknown routes to `index.html`.

### Azure CLI / SWA CLI path

If you prefer terminal deployment instead of the portal/GitHub path, the Microsoft flow is:

```powershell
az login
az group create -n renaissancekit-rg -l centralus
az staticwebapp create -n renaissancekit-site -g renaissancekit-rg
npm install
npm run build
npx swa login --resource-group renaissancekit-rg --app-name renaissancekit-site
npx swa deploy --env production
```

If you use the CLI path, install the SWA CLI first:

```powershell
npm install -D @azure/static-web-apps-cli
```

## Notes

- The links are centralized in `src/siteConfig.js` so you do not need to hunt through components.
- The logo stays in `assets/renaissance-kit-logo.png`.
- Two links still need your real public URLs:
  - `Investigation Room`
  - `The Script` trailer
