# Features

Each feature owns page-specific composition for one domain. Feature components may consume shared components and typed content, but other features should not import them directly. Promote a component to the shared layer only when more than one feature uses the same behavior and API.
