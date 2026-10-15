# Engr.HSN Developer Portfolio Website

A responsive, static website for an Android app developer. It includes an app portfolio, privacy policy template, contact/support section, mobile navigation, and a 404 page. No build tools or backend are required.

## Files
- `index.html` — homepage and app portfolio
- `apps.js` — **edit this file first** to add your real app names, descriptions, support email, and Google Play links
- `script.js` — app card rendering and mobile navigation
- `styles.css` — responsive styling
- `privacy.html` — general privacy policy template (must be customized for your app)
- `404.html` — not-found page
- `robots.txt`, `sitemap.xml` — replace `YOUR-DOMAIN.example` with your real domain
- `assets/favicon.svg` — site icon

## 1. Customize before publishing
1. Open `apps.js` in a text editor.
2. Replace `REPLACE_WITH_SUPPORT_EMAIL` with a monitored support email, for example `support@yourdomain.com`.
3. Replace the sample apps with your published apps. Set `playUrl` to each exact Google Play URL, such as `https://play.google.com/store/apps/details?id=com.example.app`.
4. Change each sample description and status so it accurately describes the app.
5. Open `privacy.html`. Replace `[APP NAME]`, `[ENTER DATE]`, and all general descriptions with the app's actual data practices. If multiple apps have different practices, create a separate policy page for each app.
6. In `robots.txt` and `sitemap.xml`, replace `https://YOUR-DOMAIN.example` with your final HTTPS domain.
7. Update the developer bio if you want it to reflect your actual background and products.

## 2. Preview locally
- Easiest: open `index.html` in a browser.
- Recommended: run a local static server (for example, VS Code Live Server) so relative paths behave like production.
- Test the mobile menu, app links, email links, privacy page, and layout on a phone-sized viewport.

## 3. Publish to your custom domain
You need a domain name and a static hosting provider. The steps depend on the host. A typical workflow:
1. Register a domain through a reputable domain registrar.
2. Create a static website project with your hosting provider (for example, GitHub Pages, Cloudflare Pages, or Firebase Hosting).
3. Upload/push the contents of this folder to the host. The root should contain `index.html`; do not upload only the ZIP as the website.
4. Add your custom domain in the hosting provider's project settings.
5. Follow the provider's exact DNS instructions at your domain registrar. DNS records differ by host; copy the values shown by your provider instead of guessing.
6. Enable HTTPS/SSL in the host dashboard and wait for DNS and certificate setup to complete.
7. Visit `https://yourdomain.com` and test every page and link.
8. Keep your domain registration active and renew it on time.

## 4. Link it in Google Play Console
- Open Play Console and select the app.
- Find the app's store listing/contact details and policy-related sections. Exact labels may change.
- Add the public support website/email as appropriate.
- Add the **direct public HTTPS URL** for the privacy policy in the app's Privacy policy field where required.
- Check each app's Data safety answers and target-audience declarations against its actual behavior and third-party SDKs. A website policy alone does not complete these declarations.
- Ensure the policy loads without login, is readable on mobile, names the app/developer, and remains available.

## Important privacy note
The included policy is a template, not legal advice or a ready-to-publish declaration. Never claim that no data is collected unless you have checked your app code, permissions, analytics/ads SDKs, backend, and other integrated services. Google Play requirements can vary by app and may change, so check current Play Console guidance before submission.

## Deployment notes
- Static website: no server-side language, database, npm install, or build command needed.
- Contact form: not included because it requires a backend or third-party form service. The support buttons use email (`mailto:`).
- App cards are configured in `apps.js`; edit that file to update the portfolio.
