# sangar-portfolio-vue

A single-page personal portfolio built with **Vue 3** and **Vuetify 3**. Section copy, links, skills, projects, and certifications are driven by JSON files under `src/data/`, so you can update the site without touching component templates.

## Features

- Responsive layout with Vuetify components and MDI icons
- Built from scratch using Vue 3.
- Scroll animations via [@vueuse/motion](https://motion.vueuse.org/)
- Contact form backed by a configurable HTTP endpoint
- CV download link configured in JSON

## Tech stack

| Area | Libraries |
|------|-----------|
| Framework | Vue 3, Vue CLI 5 |
| UI | Vuetify 3, Roboto, Material Design Icons |
| Motion | @vueuse/motion |
| HTTP | axios |

## Prerequisites

- **Node.js 22** (see `.nvmrc` and `engines` in `package.json`)

With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
```

## Project setup

```bash
npm install
```

### Development (hot-reload)

```bash
npm run serve
```

### Production build

```bash
npm run build
```

Output is written to `dist/`.

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── assets/          # Images and skill icons
├── components/      # One component per portfolio section
├── data/            # JSON content (edit these to customize the site)
├── pages/
│   └── HomePage.vue # Composes all sections
├── plugins/         # Vuetify and webfontloader setup
├── App.vue
└── main.js
```

## Content (JSON)

Each section imports its content from `src/data/`:

| File | Section |
|------|---------|
| `navBar.json` | Navigation |
| `selfIntro.json` | Hero / intro, social links, CV endpoint |
| `categoryOfWork.json` | Work categories |
| `skillsAndWork.json` | Skills and experience |
| `certifications.json` | Certifications |
| `projectsDeveloped.json` | Projects |
| `contactMe.json` | Contact form labels and `endpoint` |
| `copyrightAndBuild.json` | Footer |

Update the JSON files, then restart or refresh the dev server if needed. Skill icons live in `src/assets/skills/` and are referenced from the JSON where applicable.

### External endpoints

- **Contact form:** set `endpoint` in `contactMe.json` (default posts to the configured email API).
- **CV download:** set `cvEndpoint` in `selfIntro.json`.

## Customize configuration

See the [Vue CLI configuration reference](https://cli.vuejs.org/config/). Build options live in `vue.config.js`.

To register this as a vue app built for a poc in few days.
The data in this application are dynamic from a local stored json for easy retrival and quicker mechanism.
