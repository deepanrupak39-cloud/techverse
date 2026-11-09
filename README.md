# TECHVERSE

A responsive, futuristic technology-information website. It is a read-only public website for visitors; the owner publishes articles by editing `articles.js` in the GitHub repository.

## Included
- Responsive dark black / blue / purple design
- Home page, latest stories, categories and about section
- Search and category filtering
- Article reading modal
- Starter sample articles (replace these with researched, accurate articles)
- No visitor accounts, public submissions, downloads or comments
- No API keys or passwords stored in the website

## Publish free with GitHub Pages

1. Create or sign in to a GitHub account at https://github.com/.
2. Create a **new public repository** named `techverse` (or another name you prefer).
3. On the repository page, choose **Add file → Upload files**.
4. Upload the contents of this folder (upload `index.html`, `styles.css`, `articles.js`, `app.js`, `README.md`, and the `assets` folder; do not upload the outer TECHVERSE folder itself).
5. Commit the files to the `main` branch.
6. Open repository **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Choose branch **main** and folder **/(root)**, then click **Save**.
9. Wait for GitHub Pages to publish. Your website address will be:
   `https://YOUR-GITHUB-USERNAME.github.io/techverse/`

GitHub's official guide: https://docs.github.com/en/pages/quickstart

If you want the shorter address `https://YOUR-GITHUB-USERNAME.github.io/`, name the repository exactly `YOUR-GITHUB-USERNAME.github.io` instead of `techverse`.

## How only you publish

- Keep the GitHub repository under your account.
- Do not add collaborators with write access.
- Visitors can read the published website, but they do not get permission to publish to your repository.
- To publish an update, sign in to GitHub, open `articles.js`, click the pencil/edit button, make your changes, and commit them to `main`.
- GitHub Pages automatically rebuilds the public site after a commit. Publishing may take several minutes.

**Important hosting trade-off:** On GitHub Free, GitHub Pages requires a public repository. That means the website's source files (HTML/CSS/JavaScript and article text) are publicly viewable. Visitors still cannot publish changes to your site unless you grant repository write access. Do not put passwords, private drafts, API keys, or confidential information in this repository.

## Add a new article

Open `articles.js`. Copy one object in the `window.TECHVERSE_ARTICLES` array and add a comma between objects. Example:

```js
{
  id: "my-new-story",
  category: "Apps",
  date: "2026-11-09",
  readTime: "3 MIN READ",
  title: "Write your article title",
  summary: "A short description shown on the homepage.",
  glyph: "✦",
  featured: false,
  body: "Write your article here. Use \\n\\n to create a new paragraph."
}
```

Use a unique `id` (lowercase letters and hyphens are recommended). Available categories:
- `AI & Innovation`
- `Apps`
- `Software`
- `Gadgets`
- `Tech News`
- `Guides`

Set `featured: true` for a story you want to appear in the featured area. The two newest matching featured stories are displayed first.

## Before publishing real news

The included stories are demonstration/sample content, not verified breaking news or official product release announcements. Replace them with your own researched articles and include dates, links to original announcements, and clear attribution where appropriate.

## Customize contact details

The starter website does not invent an email address or social accounts. Add your chosen public contact details to the About section when you are ready.
