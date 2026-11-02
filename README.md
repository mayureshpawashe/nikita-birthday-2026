# For Nikita ♡

An interactive birthday website for Nikita, counting down to **25 November 2026 at midnight India time**.

**Live site:** https://mayureshpawashe.github.io/nikita-birthday-2026/

The site includes a five-photo gallery, a separate poem and full photo for Nikita's whiskey-brown eyes, a tap-to-explore countdown, two interactive love cats, a candle wish, confetti, and a birthday song.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite. To check the production build:

```bash
npm run build
npm run preview
```

## Personalize

- Edit the name, date, photo captions, and letter in `src/content.ts`.
- The six optimized site images live in `public/images/`: five in the gallery and one in the whiskey-eyes section. The original files in `photos/` are excluded from Git.
- The countdown uses `2026-11-25T00:00:00+05:30`, so it reaches zero at midnight in India regardless of the visitor's time zone.
- The celebration is available before the date through the bash button. At midnight India time, the birthday cake lights, a confetti burst starts, and a lighter confetti shower continues across every section, including after 25 November.
- To preview the automatic birthday state before the date, add `?preview=birthday` to the site URL. The preview keeps showing the real time remaining until 25 November. Remove the query to return to the regular countdown design.
- The birthday song is `public/audio/happy-birthday.mp3`, sourced from [`sapthesh/Birthday`](https://github.com/sapthesh/Birthday/blob/master/hbd.mp3). Its repository license is copied to `public/audio/REFERENCE_LICENSE.txt`. Replace the file to use a different song.
- The site asks the browser to play the song when it opens. If audible autoplay is blocked, the first tap or click anywhere starts it; the **Play birthday song** control and birthday bash button also work.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys the site. For a project repository, Vite automatically uses `/<repository-name>/` as its base path during the GitHub Actions build. For a `<username>.github.io` repository, it uses `/`.

The published site and all images in `public/images/` are publicly accessible. Review the photos and letter before publishing.
