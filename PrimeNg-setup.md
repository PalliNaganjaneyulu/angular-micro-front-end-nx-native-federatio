# PrimeNG Setup – Angular Nx Micro-Frontend Workspace

## 1. Project Details

- Framework: Angular 22
- Workspace: Nx 24
- Architecture: Native Federation Micro-Frontend
- UI Library: PrimeNG 22
- CSS Framework: Tailwind CSS v4
- Theme: Aura
- Shared Library: `@my-mfe-workspace/ui`

## 2. Install PrimeNG

Run the following command from the Nx workspace root:

```powershell
npm install primeng@22 @primeuix/themes
```

This installs:

- `primeng`: Angular UI component library.
- `@primeuix/themes`: PrimeNG theme presets and customization utilities.

We also verified the installed packages:

```powershell
npm list primeng @primeuix/themes @angular/cdk
```

Installed versions:

- PrimeNG: 22.1.5
- @primeuix/themes: 3.1.1
- Angular CDK: 22.2.7

## 3. Configure PrimeNG in Angular

Open:

`apps/my-mfe-workspace/src/app/app.config.ts`

### Import required packages

```typescript
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
```

### Configure PrimeNG provider

Add `providePrimeNG()` inside the application providers:

```typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ],
};
```

### Configuration explanation

| Configuration              | Purpose                      |
| -------------------------- | ---------------------------- |
| `providePrimeNG()`         | Registers PrimeNG globally   |
| `preset: Aura`             | Uses the Aura theme          |
| `darkModeSelector: 'none'` | Disables automatic dark mode |
| `cssLayer`                 | Controls CSS layer ordering  |

**Important:** Aura is our initial theme. We can customize it later using NPCI design tokens to match the company Figma design.

## 4. PrimeNG Component Usage

PrimeNG standalone components and directives can be imported individually into Angular standalone components.

Example: Button.

```typescript
import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonDirective],
  template: ` <button pButton type="button">Save</button> `,
})
export class ExampleComponent {}
```

Example: Input.

```typescript
import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [InputText],
  template: ` <input pInputText type="text" placeholder="Enter username" /> `,
})
export class ExampleComponent {}
```

**Note:** We use the PrimeNG 22 directive-based Button API (`ButtonDirective` with `pButton`) rather than the deprecated Button component API.

## 5. PrimeNG with Tailwind CSS

Our workspace already uses Tailwind CSS v4.

We are following this approach:

- PrimeNG: Functional UI components.
- Tailwind CSS: Layout, spacing, colors, typography and responsive design.
- NPCI design tokens: Company-specific colors, borders and typography.
- Custom CSS: Only when necessary.

Example:

```html
<div class="flex items-center gap-4 rounded-lg bg-white p-4 shadow">
  <button pButton type="button">Save</button>
</div>
```

This combines PrimeNG functionality with Tailwind styling.

## 6. Reusable PrimeNG Components in Shared Library

We created a reusable User Card component inside the shared UI library.

### Component location

```text
shared/
└── src/
    ├── index.ts
    └── lib/
        └── user-card/
            ├── user-card.ts
            ├── user-card.html
            └── user-card.css
```

### user-card.ts

```typescript
import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'shared-user-card',
  standalone: true,
  imports: [Card],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = input<string>('John Doe');
  email = input<string>('john@example.com');
  role = input<string>('Admin');
  status = input<string>('Active');
}
```

### user-card.html

```html
<p-card>
  <div class="flex items-center gap-4 p-2">
    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">{{ name().charAt(0).toUpperCase() }}</div>

    <div class="flex-1">
      <h3 class="text-lg font-semibold text-gray-800">{{ name() }}</h3>

      <p class="text-sm text-gray-500">{{ email() }}</p>

      <div class="mt-2 flex items-center gap-2">
        <span class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"> {{ role() }} </span>

        <span class="rounded px-2 py-1 text-xs" [class.bg-green-100]="status() === 'Active'" [class.text-green-700]="status() === 'Active'" [class.bg-red-100]="status() !== 'Active'" [class.text-red-700]="status() !== 'Active'"> {{ status() }} </span>
      </div>
    </div>
  </div>
</p-card>
```

### Export from shared library

File: `shared/src/index.ts`

```typescript
export * from './lib/user-card/user-card';
```

### Import into Host application

File: `apps/my-mfe-workspace/src/app/app.ts`

```typescript
import { UserCard } from '@my-mfe-workspace/ui';
```

Add `UserCard` to the component imports array:

```typescript
imports: [RouterModule, UserCard],
```

### Use in Host HTML

```html
<div class="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
  <shared-user-card name="John Doe" email="john@npci.org.in" role="Admin" status="Active" />

  <shared-user-card name="Rahul Kumar" email="rahul@npci.org.in" role="Provider" status="Inactive" />
</div>
```

This demonstrates how a shared component can be reused with different input values.

## 7. Build Verification

Run the following command from the workspace root:

```powershell
npx nx build my-mfe-workspace
```

Expected result: Successful build without PrimeNG configuration or component import errors.

## 8. Current Setup Status

| Task                       | Status      |
| -------------------------- | ----------- |
| Install PrimeNG            | Completed   |
| Install PrimeNG Themes     | Completed   |
| Configure Aura Theme       | Completed   |
| Configure PrimeNG Provider | Completed   |
| Configure CSS Layers       | Completed   |
| Verify Host Build          | Completed   |
| Create Shared User Card    | Completed   |
| Export User Card           | Completed   |
| Import into Host           | Completed   |
| Tailwind + PrimeNG example | Implemented |

## 9. Important Architecture Notes

1. PrimeNG is installed at the Nx workspace root, so its packages can be consumed by workspace applications and libraries.
2. PrimeNG providers and theme configuration must be registered in each independently bootstrapped Angular application that uses PrimeNG.
3. Shared UI components should be maintained in the shared library to avoid duplicate implementations.
4. Use PrimeNG design tokens and custom presets for company-specific styling rather than overriding internal PrimeNG styles extensively.
5. For independently deployed remotes, verify that their theme CSS and required global styles are available at runtime.
6. Avoid configuring PrimeNG separately in multiple places within the same Angular application.

## 10. Official Documentation

- Installation: https://primeng.dev/installation
- Configuration: https://primeng.dev/configuration
- Theming: https://primeng.dev/theming

---

**Conclusion**

PrimeNG is now installed and configured in our Nx Angular workspace using the Aura preset. We have also created a reusable User Card component in the shared UI library using PrimeNG Card and Tailwind CSS.

The next customization phase will focus on matching PrimeNG components with NPCI Figma designs and company design tokens.
