# Canada School of Leadership website

This repository contains the Next.js App Router foundation for the Canada School of Leadership website. The first implementation includes the shared site header and a focused homepage hero based on the supplied visual reference.

## Current scope

- A responsive homepage and reusable site header.
- Route folders for the about, contact, program-detail, and insight-detail experiences shown in the references.
- Clear separation between reusable UI, page sections, feature composition, content, integrations, and utilities.
- Asset locations for shared and page-specific images.
- Test folders for unit, integration, and end-to-end coverage.

Start with [docs/architecture.md](docs/architecture.md) before adding code. The intended page building blocks are documented in [docs/page-composition.md](docs/page-composition.md).

## Local development

```bash
npm install
npm run dev
```

The `/contact` route has intentionally not been implemented yet; the reference was used only for the shared navigation styling.
