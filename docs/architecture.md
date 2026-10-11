# Frontend architecture

## Directory map

```text
.
|-- public/
|   |-- fonts/
|   |-- icons/
|   `-- images/
|       |-- brand/
|       |-- shared/
|       `-- pages/{home,about,contact,programs,insights}/
|-- src/
|   |-- app/
|   |   `-- (marketing)/
|   |       |-- about/
|   |       |-- contact/
|   |       |-- programs/[slug]/
|   |       `-- insights/[slug]/
|   |-- components/
|   |   |-- ui/
|   |   |-- layout/
|   |   |-- navigation/
|   |   |-- sections/
|   |   |-- forms/
|   |   `-- seo/
|   |-- features/{home,about,contact,programs,insights}/components/
|   |-- content/
|   |   |-- pages/{home,about,contact}/
|   |   |-- programs/
|   |   |-- insights/
|   |   `-- shared/
|   |-- config/
|   |-- constants/
|   |-- hooks/
|   |-- lib/{analytics,cms,validation}/
|   |-- styles/
|   |-- types/
|   `-- utils/
`-- tests/{unit,integration,e2e}/
```

The home route lives at `src/app/(marketing)/page.tsx`. Shared global navigation is implemented in `src/components/layout/SiteHeader.tsx`.

## Responsibility boundaries

### `app`

Owns routing, route metadata, loading/error boundaries, and page composition. Route files should remain thin and should not contain large markup blocks or business logic.

### `components`

- `ui`: small presentation primitives such as Button, Input, Card, Accordion, and Badge.
- `layout`: site-wide structural pieces such as Container, Header, Footer, and PageShell.
- `navigation`: desktop/mobile menus, breadcrumbs, and pagination.
- `sections`: reusable cross-page sections such as Hero, LogoCloud, FAQ, CallToAction, and Testimonial.
- `forms`: reusable form controls and form-level presentation.
- `seo`: schema and metadata helpers that render UI or structured data.

Shared components must not import from a feature folder.

### `features`

Owns page-specific composition. A component belongs here when it is meaningful to one domain but is too large for a route file. Promote it to `components/sections` only after it is genuinely reused.

### `content`

Owns typed copy and page data. Keeping copy outside JSX makes the repeated page patterns easier to review, reuse, localize, or replace with CMS data later.

### `lib`, `utils`, and `hooks`

- `lib`: integration boundaries and domain services.
- `utils`: small pure helpers with no framework or service ownership.
- `hooks`: client-side reusable React behavior only.

### `config`, `constants`, and `types`

- `config`: environment-aware or product-level configuration, including routes and navigation.
- `constants`: immutable values that are not configuration.
- `types`: shared domain and content contracts. Component-only props stay beside their component.

## Dependency direction

```text
app -> features -> components -> hooks/utils/types
                 -> content/config/lib
```

Lower layers must not import from `app`. Shared components must not depend on feature components. Integrations stay behind `lib` so routes and components are not coupled to a future CMS, form provider, or analytics vendor.

## File conventions

- Use `PascalCase.tsx` for React components.
- Use `kebab-case.ts` for non-component modules.
- Keep one primary component per file.
- Add an `index.ts` barrel only at stable public boundaries; avoid barrels inside every folder.
- Prefer server components. Add `use client` only to the smallest interactive boundary.
- Co-locate component tests with components; keep user-flow tests under `tests/e2e`.
- Import application code through the `@/` alias once the TypeScript configuration is added.

## Adding a page

1. Add the route directory under the appropriate App Router group.
2. Define its content contract and data under `src/content`.
3. Compose existing layout and section components.
4. Put truly page-specific sections in `src/features/<feature>/components`.
5. Add page metadata and structured data at the route boundary.
6. Add tests at the lowest useful level.

Do not duplicate a whole page to create a similar one. Dynamic program and insight pages should be driven by their slug and typed content source.
