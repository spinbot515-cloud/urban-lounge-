# Urban Lounge

Urban Lounge is an independent rebrand of [Cordia](https://github.com/VilnisGrinbergs2000/Cordia), a self-hosted community platform for chat, voice, video, and communities.

This fork retains the upstream project's AGPL-3.0-only license and copyright notices. Urban Lounge uses its own name and newly created mark; it does not use Cordia's name, logo, or Codi mascot as its brand. If you modify this project and make it available over a network, AGPL-3.0 requires you to offer users the corresponding source code for the version they use. See [LICENSE](LICENSE) for the full terms and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices.

## Stack

- React, Vite, and Socket.IO client
- Node.js, Express, Socket.IO, and PostgreSQL
- Electron desktop shell and Capacitor mobile shells

## Quick start

Requirements: Node.js 22+, PostgreSQL 14+, and a modern browser.

```bash
git clone https://github.com/spinbot515-cloud/urban-lounge-.git
cd urban-lounge-
npm run install:all
createdb urban_lounge
cp server/.env.example server/.env
# Configure DATABASE_URL in server/.env
npm run dev
```

Open http://localhost:5173. The API listens on http://localhost:3001.

For production, build the client with `npm run build`, configure the environment variables documented in [docs/configuration.md](docs/configuration.md), and start the server with `npm start`. Review [docs/deployment.md](docs/deployment.md) before exposing an instance to the internet.

## Project documentation

- [Getting started](docs/getting-started.md)
- [Configuration](docs/configuration.md)
- [Deployment](docs/deployment.md)
- [Architecture](docs/architecture.md)
- [API](docs/api.md)

## Upstream attribution and license

This repository is derived from Cordia by its original contributors. Preserve the original copyright and license notices in source files. The [GNU AGPL-3.0-only license](LICENSE) applies to this project. Cordia's upstream repository notes that its name, Codi mascot, and logo are trademarks and are not licensed under the AGPL; Urban Lounge is an independent service and uses separate branding.
