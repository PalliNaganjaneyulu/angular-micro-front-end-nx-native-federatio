# NPCI Font Setup – Angular Nx Micro-Frontend Workspace

## 1. Objective

Configure the NPCI company font family across the Angular Nx workspace.

We use **Montserrat** as the primary font family, with different font weights:

- Regular – 400
- Medium – 500
- Black – 900

The font is configured globally so that Angular components can use the same typography.

## 2. Download Font Files

Download the required Montserrat font files and place them inside the Host application's public assets folder.

### Folder location

```text
apps/
└── my-mfe-workspace/
    └── public/
        └── assets/
            └── font/
                ├── Montserrat-Regular-400.ttf
                ├── Montserrat-Medium-500.ttf
                └── Montserrat-Black-900.ttf
```

### Font files

| Font file                  | Weight | Purpose             |
| -------------------------- | -----: | ------------------- |
| Montserrat-Regular-400.ttf |    400 | Normal text         |
| Montserrat-Medium-500.ttf  |    500 | Medium text, labels |
| Montserrat-Black-900.ttf   |    900 | Heavy headings      |

## 3. Configure Global Font

Open:

`apps/my-mfe-workspace/src/styles.css`

Add the following configuration.

```css
@import 'tailwindcss';
@import '../../../shared/src/styles/variables.css';

/* NPCI Company Font Family */

@font-face {
  font-family: 'NPCI';
  src: url('/assets/font/Montserrat-Regular-400.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'NPCI';
  src: url('/assets/font/Montserrat-Medium-500.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'NPCI';
  src: url('/assets/font/Montserrat-Black-900.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

/* Global Font Configuration */

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: 'NPCI', sans-serif;
}
```

## 4. Explanation of @font-face

| Property             | Purpose                                     |
| -------------------- | ------------------------------------------- |
| `font-family`        | Defines the custom font name                |
| `src`                | Specifies the font file location            |
| `font-weight`        | Defines the font weight                     |
| `font-style`         | Specifies normal or italic style            |
| `font-display: swap` | Displays fallback text while the font loads |

We register all three font weights under the same font-family name: `NPCI`.

## 5. Configure NPCI Font in Tailwind CSS

Because we are using Tailwind CSS v4, we can define the font family as a theme token.

Add this to `apps/my-mfe-workspace/src/styles.css`, after the imports:

```css
@theme {
  --font-npci: 'NPCI', sans-serif;
}
```

Now use the font directly in HTML:

```html
<h1 class="font-npci text-2xl font-black">NPCI Dashboard</h1>

<p class="font-npci text-base font-normal">Welcome to the dashboard.</p>

<label class="font-npci text-sm font-medium"> Username </label>
```

## 6. Font Weight Reference

| Tailwind class | CSS weight | Font file          |
| -------------- | ---------: | ------------------ |
| `font-normal`  |        400 | Montserrat Regular |
| `font-medium`  |        500 | Montserrat Medium  |
| `font-black`   |        900 | Montserrat Black   |

Example:

```html
<div class="font-npci">
  <h1 class="text-2xl font-black">Dashboard</h1>

  <h2 class="text-lg font-medium">User Management</h2>

  <p class="text-sm font-normal">Manage your users and permissions.</p>
</div>
```

## 7. Browser Verification

Run the Host application:

```powershell
npx nx serve my-mfe-workspace
```

Open:

`http://localhost:4200`

Verify the font using browser Developer Tools:

1. Open Developer Tools.
2. Select an element containing text.
3. Open the Computed Styles section.
4. Check `font-family`.
5. Confirm that the browser is loading the Montserrat font files successfully in the Network tab.

Expected font family:

```css
font-family: 'NPCI', sans-serif;
```

## 8. Micro-Frontend Architecture Consideration

**Important:** The current font files are stored inside the Host application's public folder.

For independently deployed remotes such as Dashboard, User Management and Reports, the Host's public assets are not automatically available to those applications.

For production-ready micro-frontend architecture, choose one of these approaches:

### Option A – Shared font assets

Maintain the font files in a shared static asset location accessible to the Host and all remotes.

### Option B – Copy font assets into each application

```text
apps/
├── my-mfe-workspace/public/assets/font/
├── dashboard/public/assets/font/
├── user-management/public/assets/font/
└── reports/public/assets/font/
```

Each application should register the same `@font-face` definitions in its own global stylesheet.

This ensures that independently deployed applications can load the fonts without depending on the Host's asset paths.

## 9. Current Setup Status

| Task                             | Status                      |
| -------------------------------- | --------------------------- |
| Download Montserrat font files   | Completed                   |
| Create public/assets/font folder | Completed                   |
| Add Regular 400 font             | Completed                   |
| Add Medium 500 font              | Completed                   |
| Add Black 900 font               | Completed                   |
| Configure @font-face             | Completed                   |
| Configure global NPCI font       | Completed                   |
| Host build verification          | Completed                   |
| Configure Tailwind font token    | Proposed – not yet verified |
| Configure fonts in all remotes   | Pending                     |

## 10. Conclusion

The Host application is configured with Montserrat as the NPCI font family.

The font weights 400, 500 and 900 are registered and available through the global stylesheet.

The same font configuration should be applied consistently to independently deployed micro-frontends.

This gives the workspace a common typography foundation for the NPCI design system.
