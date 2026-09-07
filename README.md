# Memory Camera privacy policy

Public policy: https://zhanghaichao.github.io/memory-camera-privacy/

Chinese: https://zhanghaichao.github.io/memory-camera-privacy/zh/

Privacy contact: Jocelyn — seansheaton@gmail.com

Android application: `com.memorycamera.app`

## Updating

Edit both languages in `app/policy-content.ts`. The shared page is `app/policy.tsx`; the visual style is `app/globals.css`.

Run `npm ci`, `npm run typecheck`, and `npm run build`. Commit source and the regenerated `docs/` directory, then push `main`. GitHub Pages publishes from `main:/docs`.

The build renders React templates to ordinary HTML with correct language metadata, verifies all 13 sections and anchor targets, and copies the stylesheet and existing app icon. The public website does not require JavaScript and loads no external fonts or analytics. The Vinext development preview remains available using `npm run dev`.

## Review basis

Content was checked against the Android app's camera permission, system photo picker, local image processing, MediaStore export, FileProvider sharing, DataStore preferences, Google Play Billing and enabled Android backup on September 7, 2026.

- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [GitHub Pages hosting and IP logging](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Google Privacy Policy](https://policies.google.com/privacy)
- [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)

Keep the policy, actual app behavior and Google Play Data safety answers consistent. Recheck disclosures when adding SDKs, cloud features or account creation. A privacy policy alone does not establish store approval.
