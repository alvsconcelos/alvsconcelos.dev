# alvsconcelos.dev

Personal site for Alvaro Vasconcelos, Engineering Manager at Housecall Pro.

English is the default at `/`. Portuguese lives at `/pt/`.

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

Static output is written to `dist/`. To deploy, upload the contents of `dist/` to the Hostinger `public_html` folder. A `.htaccess` in `public/` is copied into `dist/` and redirects the old `/en` path to `/`. `/pt/` is a real directory (`pt/index.html`), so Apache/LiteSpeed should serve it without extra rewrite rules.

## Assets

- Resumes: `public/Alvaro-Vasconcelos-Resume-EN.pdf` and `public/Alvaro-Vasconcelos-Curriculo-PT.pdf`
- Open Graph images: regenerate with `python3 scripts/generate-og.py`
