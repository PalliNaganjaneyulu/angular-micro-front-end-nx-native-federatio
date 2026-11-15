# Tailwind CSS v4 Configuration – Angular Nx Micro-Frontend

## 1. Project Details

**Project:** NFINITE Banking Platform

**Architecture:** Angular + Nx + Native Federation

**Versions:**

- Angular: 22.2.6
- Angular CLI: 22.2.7
- Nx: 24.0.6
- Tailwind CSS: v4
- Node.js: v26.13.1

**Workspace location:**

```text
C:\Users\LENOVO\OneDrive\Documents\nx-bkp\angular-micro-front-end-nx-native-federatio
```

## 2. Micro-Frontend Applications

The workspace contains the following applications:

| Application      | Type              | Port |
| ---------------- | ----------------- | ---- |
| my-mfe-workspace | Host / Shell      | 4200 |
| dashboard        | Remote            | 4201 |
| user-management  | Remote            | 4202 |
| reports          | Remote            | 4203 |
| shared           | Shared UI Library | -    |

## 3. Step 1 – Install Tailwind CSS Dependencies

Open PowerShell in the Nx workspace root.

Execute:

```powershell
npm install -D tailwindcss @tailwindcss/postcss postcss
```

**Purpose:**

- `tailwindcss`: Tailwind CSS utility framework.
- `@tailwindcss/postcss`: Tailwind CSS v4 PostCSS plugin.
- `postcss`: CSS processing tool.

## 4. Step 2 – Verify Nx Installation

Execute:

```powershell
npx nx --version
```

Expected output:

```text
Nx Version:
- Local: v24.0.6
```

## 5. Step 3 – Review npm Install Scripts

npm 12 blocked some dependency installation scripts.

Check blocked scripts:

```powershell
npm install-scripts ls
```

After reviewing the packages and deciding to trust them, approve:

```powershell
npm install-scripts approve nx
npm install-scripts approve esbuild
npm install-scripts approve @parcel/watcher
npm install-scripts approve lmdb
npm install-scripts approve msgpackr-extract
```

Verify:

```powershell
npm install-scripts ls
```

Expected:

```text
No packages with unreviewed install scripts.
```

## 6. Step 4 – Create PostCSS Configuration

Create `.postcssrc.json` in the Nx workspace root.

Location:

```text
.postcssrc.json
```

Configuration:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

**Purpose:**

This configuration enables Tailwind CSS v4 processing through PostCSS.

## 7. Step 5 – Configure Global CSS

Open:

```text
apps/my-mfe-workspace/src/styles.css
```

Add:

```css
@import 'tailwindcss';

/* Global application styles */
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
```

**Purpose:**

- Imports Tailwind CSS utilities.
- Makes Tailwind available to the Host application.
- Defines basic global styles.

## 8. Step 6 – Build the Host Application

Execute:

```powershell
npx nx build my-mfe-workspace --configuration=development
```

**Result:** Build completed successfully.

Tailwind CSS was processed successfully, and the generated CSS bundle was approximately 6.77 kB.

## 9. Step 7 – Test Tailwind in Browser

Temporarily update:

```text
apps/my-mfe-workspace/src/app/app.html
```

Use Tailwind utility classes:

```html
<div class="min-h-screen bg-slate-100">
  <header class="bg-slate-900 px-8 py-5 text-white shadow-lg">
    <h2 class="text-2xl font-bold">NFINITE Banking Platform</h2>

    <nav class="mt-4 flex gap-6">
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/users">User Management</a>
      <a routerLink="/reports">Reports</a>
    </nav>
  </header>

  <main class="p-8">
    <div class="rounded-xl bg-white p-8 shadow-md">
      <h1 class="text-3xl font-bold text-blue-900">Tailwind CSS Working!</h1>

      <p class="mt-3 text-slate-600">NFINITE Banking Platform</p>

      <button class="mt-6 rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800">Test Tailwind Button</button>
    </div>
  </main>
</div>
```

Start the Host:

```powershell
npx nx serve my-mfe-workspace
```

Open:

```text
http://localhost:4200/
```

**Result:** Tailwind styling appeared successfully in the browser.

## 10. Step 8 – Shared UI Library and Tailwind

The project already contains a shared UI library:

```text
shared/
  src/
    lib/
      ui/
      input/
      dropdown/
      table/
      modal/
      confirmation-dialog/
      loader/
      toast/
```

We started converting the existing shared Button component to Tailwind CSS.

To make Tailwind discover utility classes inside the shared library, add this source directive to the Host global CSS:

```css
@source "../../../shared/src";
```

The Host stylesheet will then contain:

```css
@import 'tailwindcss';

@source "../../../shared/src";

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
```

This source directive was proposed for the shared library. Verify it in your actual file before treating this step as completed.

## 11. Current Tailwind Configuration

| Configuration                      | Status           |
| ---------------------------------- | ---------------- |
| Tailwind dependencies installed    | Completed        |
| PostCSS configuration              | Completed        |
| Host global CSS import             | Completed        |
| Host development build             | Successful       |
| Browser Tailwind test              | Successful       |
| Shared library source scanning     | Proposed; verify |
| All remote applications configured | Not completed    |
| PrimeNG integration                | Not started      |

## 12. Important Notes for Future Remote Applications

The Host and each remote are independently built applications.

Tailwind generates CSS during the build. Therefore, future remote applications need an appropriate strategy for their Tailwind styles.

We plan to use a centralized styling strategy initially:

- Host scans remote application templates.
- Host scans the shared UI library.
- Shared components use Tailwind CSS.
- Remotes reuse the shared components.
- Remote stylesheet loading and independently used Tailwind utilities must be verified during integration.

Do not assume that configuring Tailwind in the Host automatically makes every utility class in every remote available.

## 13. Commands Reference

Install Tailwind:

```powershell
npm install -D tailwindcss @tailwindcss/postcss postcss
```

Check Nx:

```powershell
npx nx --version
```

Build Host:

```powershell
npx nx build my-mfe-workspace --configuration=development
```

Serve Host:

```powershell
npx nx serve my-mfe-workspace
```

Build User Management:

```powershell
npx nx build user-management --configuration=development
```

## 14. Next Planned Tasks

1. Finalize Tailwind source scanning for all remote applications.
2. Convert shared Button, Input, Dropdown and other components to Tailwind CSS.
3. Install PrimeNG with an Angular 22-compatible release.
4. Configure PrimeNG Aura theme.
5. Integrate PrimeNG with Tailwind CSS.
6. Test the shared components in User Management.
7. Reuse the same shared UI components across Dashboard and Reports.
