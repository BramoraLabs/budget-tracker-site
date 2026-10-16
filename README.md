# Bramora Labs website

Static HTML, CSS and JavaScript, hosted through the existing GitHub Pages repository. No build step or external font/CDN dependencies.

## Structure

- `index.html`: studio homepage.
- `projects.html`: project collection.
- `budget-tracker.html`: Budget Tracker product presentation, feature tabs, pricing, FAQ and existing launch signup.
- `about.html`: studio story.
- `contact.html`: support and feedback.
- `guides/`: existing guides at their original addresses.
- `privacy.html` and `terms.html`: existing website policy content at its original address. App policy links still point to the separate legal site.
- `brand.css` and `site.js`: studio design, responsive navigation, progressive scroll reveals, accessible feature tabs and reduced-motion support.
- `style.css`: supporting typography and components for older guide/legal content; loaded before the shared studio design.

## Preview and publishing

Serve this directory with a local static HTTP server. The site works with relative URLs, including at the existing GitHub Pages repository subpath. Preview changes before pushing the selected website files to the configured deployment branch. The private, untracked `marketing/` directory is not part of the public site and must not be included in a deployment.

## Launch state

Publication was not verified during this redesign. The app page retains the coming-soon copy and launch signup. Once public availability is confirmed, replace that call to action with the verified Play Store listing and update the availability text. Do not invent reviews or download counts.

The signup uses the pre-existing Web3Forms public access key and consent fields. The key is intended for client-side form submission; never place service-account keys, signing credentials or RevenueCat private keys in this repository.

## Verification

The redesign was checked at 1440, 390 and 320 pixels across the main pages, guide index, sample article and legal pages. Local links, image loading, browser errors, mobile menu, keyboard-operated feature tabs, FAQ, reduced motion and JavaScript-disabled content were checked. Signup success and failure were tested with intercepted responses; no real email was submitted. Live email delivery remains an outstanding check with an approved address.

## License

The website code (HTML, CSS and JavaScript) is released under the [MIT License](LICENSE), so you are free to reuse and adapt it.

The MIT License does **not** give you the right to use the Bramora Labs or Budget Tracker names, logos, brand marks or app screenshots, or to present the written guides as your own or as an official Bramora Labs product. Please replace the branding, screenshots and copy when you reuse the design.
