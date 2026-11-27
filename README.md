# alvsconcelos.dev

Personal site for Alvaro Vasconcelos, Engineering Manager at Housecall Pro.

English is the default at `/`. Portuguese lives at `/pt/`.

The current site is a short page with collapsible selected-work cases. The previous long version is tagged `v1-long-page` and can be restored with `git checkout v1-long-page`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## GitHub Pages

The site is set up to deploy from the `main` branch with `.github/workflows/deploy.yml` (`withastro/action` + `actions/deploy-pages`).

After the repository exists on GitHub:

1. Push `main`.
2. In the repo, open **Settings → Pages**. Set the source to **GitHub Actions**.
3. Add the custom domain `alvsconcelos.dev` and wait for DNS and HTTPS. Verify the domain if GitHub offers it.
4. Point DNS at GitHub Pages (apex `A`/`AAAA` records and `www` `CNAME` to `alvsconcelos.github.io`). Keep mail records separate so email is not dropped when leaving Hostinger.

`public/CNAME` contains `alvsconcelos.dev`. The old `/en` path is a static page that canonicalizes and redirects to `/`.

## Assets

- Resumes: `public/Alvaro-Vasconcelos-Resume-EN.pdf` and `public/Alvaro-Vasconcelos-Curriculo-PT.pdf`
- Open Graph images: regenerate with `python3 scripts/generate-og.py`
- LLM-oriented index: `public/llms.txt` and `public/llms-full.txt`
