# Portofolio - Jihad Fisabilillah

UTS Pemrograman Web (Sarjana Terapan Manajemen Informatika, Semester 3).
A simple, static, single-page personal portfolio built with plain HTML, CSS and JavaScript.

**Live site:** `https://<your-username>.github.io/<repo-name>/`  (replace after hosting)

## How to view the page

1. **Online:** open the live site link above.
2. **Locally:** download or clone the repo and open `index.html` in a browser. No server or install is needed.

## File structure

```
portfolio/
├── index.html      page structure
├── style.css       all styling
├── script.js       contact form logic
├── images/         placeholder images (replace with real artwork)
├── README.md       this documentation
└── SRS.md          software requirements specification
```

## Replacing the placeholder images

Every image on the page is an `<img>` tag pointing to a placeholder in `images/`. Each spot is marked with an `<!-- IMAGE: ... -->` comment in `index.html`. To use your own artwork, either overwrite the placeholder file or change the `src`, for example:

```html
<img src="images/omnama-tshirt.png" alt="Omnama Crigancaya Negara t-shirt">
```

| Spot | Count | Placeholder |
|---|---|---|
| Hero background | 1 | `placeholder-hero.svg` |
| Navbar logo | 1 | `placeholder-icon.svg` |
| Signature | 1 | `placeholder-signature.svg` |
| Software icons | 5 | `placeholder-icon.svg` |
| Project images | 3 | `placeholder-project.svg` |
| Group logos | 15 | `placeholder-logo.svg` |

## 1. HTML structure (20 pts)

| Element | Purpose |
|---|---|
| `<header class="hero">` | Contains the navbar and the hero: title "Hello!" and a short description |
| `<nav>` + `<ul>` | Navigation menu with two links: Projects and Contact (the logo links back to the top) |
| `<main>` | Holds the page's main content |
| `<section class="about">` | "about me" text and the software icons |
| `<section class="projects">` | Tab label and three project `<article>` cards, each with an image |
| `<section class="clients">` | "Groups I've worked with" logo list |
| `<section class="contact">` + `<form>` | Contact form with labels, inputs and a textarea |
| `<footer>` | Copyright line |

Semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`) are used instead of generic `div`s where possible. Every image has an `alt` attribute, every input has a matching `<label>`, and the page has `lang="en"` and a viewport meta tag.

## 2. CSS design (30 pts)

- **CSS variables** (`:root`) hold the colours and corner radius, so the theme can be changed in one place.
- **Reset** (`* { box-sizing: border-box }`) gives consistent sizing.
- **Hero:** the background `<img>` is positioned with `position: absolute` and `object-fit: cover`, and a `::after` gradient darkens it so the white text stays readable.
- **Flexbox** is used for the navbar, hero content, software icons and logo list.
- **CSS Grid** (`repeat(auto-fit, minmax(200px, 1fr))`) lays out the project cards and wraps them on small screens.
- **Tab shape:** the "Portofolio" tab uses `clip-path: polygon(...)` to get the angled corner from the concept.
- **Gradients** create the light-to-dark transitions between sections.
- **Hover animations (CSS transitions):** project cards lift, software icons lift and tilt, logos scale up, the hero title scales, and buttons move up slightly.
- **Responsive:** `@media (max-width: 600px)` reduces padding and logo size.
- **Design choice:** black, white and grey palette with one light "about" band for contrast, following the concept sketch.

## 3. JavaScript functionality (20 pts)

The page is static, so JavaScript is only used for the contact form (`script.js`):

| Feature | Where it is implemented |
|---|---|
| **Event handling** | A `submit` listener on the form, and `input` listeners that clear an error as soon as the user edits the field |
| **Form validation** | Name (min. 2 characters), email (regex pattern) and message (min. 10 characters) are checked; invalid submissions are blocked with `preventDefault()` |
| **DOM manipulation** | Error text and red borders are added with `textContent` and `classList.toggle`; a "Message sent!" notice is shown when the form is valid |

Note: this is a static site, so the form does not deliver a real email. To send real messages later, connect the form to a service such as Formspree or EmailJS.

## Hosting on GitHub Pages

1. Create a new public repository and upload all files (keep `index.html` in the root and the `images/` folder).
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. After a minute the site is available at `https://<username>.github.io/<repo-name>/`.

## Validation

HTML and CSS can be checked with the W3C validators:
- https://validator.w3.org/
- https://jigsaw.w3.org/css-validator/
