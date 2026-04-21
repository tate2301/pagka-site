# Corelith Product UI → Attio Design System
## Complete Transformation Specification for Huchu ERP

**Version:** 1.0  
**Date:** April 22, 2026  
**Scope:** Transform Huchu ERP product UI to match Attio's design language  
**Reference:** 27 Refero/Attio app screenshots + live attio.com analysis  

---

## 0. EXECUTIVE SUMMARY

This document specifies EXACTLY how to transform the Huchu ERP codebase to match Attio's product design language. Every file change, every token override, every component restyling is specified.

**Attio's Design DNA (from screenshots):**
- Single blue accent (#2563EB) against grayscale surfaces
- 14px standard type, Inter font
- 6px button radius, 8px card radius, 12px modal radius
- Subtle shadows: `0 1px 3px rgba(0,0,0,0.1)`
- Dense functional layouts (not marketing whitespace)
- Dark mode: #0F0F0F canvas, #1A1A1A cards
- Rounded corners on EVERYTHING
- Generous internal padding, tight external spacing

---

## 1. FILES TO MODIFY (Exact List)

### 1.1 Critical Token Files (MUST CHANGE)

| File | Path | Change Type | Impact |
|------|------|-------------|--------|
| `globals.css` | `/tmp/huchu/app/globals.css` | Replace entire :root token block | All base tokens |
| `client.css` | `/tmp/huchu/app/themes/client.css` | Replace neutral palette + semantic | Client portal theme |
| `admin.css` | `/tmp/huchu/app/themes/admin.css` | Replace neutral palette + semantic | Admin portal theme |

### 1.2 Component Files (RESTYLE)

| Component | Path | Changes |
|-----------|------|---------|
| `Button` | `/tmp/huchu/components/ui/button.tsx` | Radius 6px, new color tokens |
| `Card` | `/tmp/huchu/components/ui/card.tsx` | Radius 8px, shadow, padding |
| `Input` | `/tmp/huchu/components/ui/input.tsx` | Height 36px, radius 6px, border color |
| `Sidebar` | `/tmp/huchu/components/ui/sidebar.tsx` | Width 256px, active state colors |
| `Table` | `/tmp/huchu/components/ui/table.tsx` | 48px rows, hover bg, header style |
| `Dialog` | `/tmp/huchu/components/ui/dialog.tsx` | Radius 12px, shadow, backdrop blur |
| `Badge` | `/tmp/huchu/components/ui/badge.tsx` | New color mappings |
| `AppSidebar` | `/tmp/huchu/components/layout/app-sidebar.tsx` | Nav item styling |
| `Navbar` | `/tmp/huchu/components/layout/navbar.tsx` | Height, border, shadow |
| `AppShell` | `/tmp/huchu/components/layout/app-shell.tsx` | Spacing, border radius |

### 1.3 New Files to Create

| File | Purpose |
|------|---------|
| `/tmp/huchu/app/themes/dark.css` | Dark mode token overrides |
| `/tmp/huchu/app/themes/tokens-attio.css` | Attio design token definitions |

---

## 2. TOKEN TRANSFORMATION (globals.css)

### 2.1 Replace Entire :root Block

**REMOVE** all existing `--neutral-*`, `--primary-*`, `--accent-*`, `--surface-*`, `--text-*`, `--action-*`, `--edge-*`, `--shadow-*`, `--table-*`, `--sidebar-*`, `--chart-*`, `--motion-*`, `--space-*`, `--type-*` definitions.

**REPLACE WITH:**

```css
:root {
  color-scheme: light;

  /* -- Attio Neutral Palette ------------------------------------------- */
  --neutral-0:  #ffffff;
  --neutral-25: #fcfcfc;
  --neutral-50: #f9fafb;
  --neutral-100:#f3f4f6;
  --neutral-200:#e5e7eb;
  --neutral-300:#d1d5db;
  --neutral-400:#9ca3af;
  --neutral-500:#6b7280;
  --neutral-600:#4b5563;
  --neutral-700:#374151;
  --neutral-800:#1f2937;
  --neutral-900:#111827;

  /* -- Attio Primary (Blue) -------------------------------------------- */
  --primary:     #2563EB;
  --primary-50:  #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /* -- Attio Accent (Teal) -------------------------------------------- */
  --accent:      #0d9488;
  --accent-50:  #f0fdfa;
  --accent-100: #ccfbf1;
  --accent-500: #14b8a6;
  --accent-600: #0d9488;

  /* -- Semantic Colors ------------------------------------------------ */
  --success-50:  #f0fdf4;
  --success-100: #dcfce7;
  --success-300: #86efac;
  --success-500: #22c55e;
  --success-700: #15803d;

  --warning-50:  #fffbeb;
  --warning-100: #fef3c7;
  --warning-300: #fcd34d;
  --warning-500: #f59e0b;
  --warning-700: #b45309;

  --danger-50:   #fef2f2;
  --danger-100:  #fee2e2;
  --danger-300:  #fca5a5;
  --danger-500:  #ef4444;
  --danger-700:  #b91c1c;

  --info-50:     #eff6ff;
  --info-100:    #dbeafe;
  --info-300:    #93c5fd;
  --info-500:    #3b82f6;
  --info-700:    #1d4ed8;

  /* -- Surface Tokens -------------------------------------------------- */
  --surface-canvas:  var(--neutral-50);
  --surface-base:    var(--neutral-0);
  --surface-raised:  var(--neutral-0);
  --surface-muted:   var(--neutral-100);
  --surface-subtle:  var(--neutral-50);
  --surface-soft:    var(--neutral-100);
  --surface-active:  var(--primary-50);

  /* -- Text Tokens ----------------------------------------------------- */
  --text-strong: var(--neutral-900);
  --text-body:   var(--neutral-800);
  --text-muted:  var(--neutral-500);
  --text-subtle: var(--neutral-400);
  --text-inverse:var(--neutral-0);

  /* -- Action Tokens --------------------------------------------------- */
  --action-primary-bg:      var(--primary-600);
  --action-primary-fg:      var(--neutral-0);
  --action-primary-hover:   var(--primary-700);
  --action-secondary-bg:    var(--neutral-100);
  --action-secondary-fg:    var(--neutral-700);
  --action-secondary-hover: var(--neutral-200);
  --action-outline-bg:      transparent;
  --action-outline-border:  var(--neutral-200);
  --action-outline-hover:   var(--neutral-50);
  --action-destructive-bg:  var(--danger-500);
  --action-destructive-fg:  var(--neutral-0);

  /* -- Edge / Border Tokens -------------------------------------------- */
  --edge-subtle:    var(--neutral-100);
  --edge-default:   var(--neutral-200);
  --edge-strong:    var(--neutral-300);
  --input-border:   var(--neutral-200);
  --input-bg:       var(--neutral-0);
  --focus-ring:     var(--primary-500);

  /* -- Shadows --------------------------------------------------------- */
  --shadow-card:    0 1px 3px rgba(0,0,0,0.1);
  --shadow-hover:   0 4px 6px rgba(0,0,0,0.05);
  --shadow-popover: 0 20px 25px rgba(0,0,0,0.1);
  --shadow-modal:   0 20px 25px rgba(0,0,0,0.1);
  --elevation-1:    inset 0 0 0 1px var(--edge-default);
  --elevation-2:    inset 0 0 0 1px var(--edge-default), 0 2px 6px rgba(0,0,0,0.04);
  --elevation-3:    inset 0 0 0 1px var(--edge-default), 0 8px 20px rgba(0,0,0,0.08);

  /* -- Table Tokens ---------------------------------------------------- */
  --table-header-bg:    var(--neutral-50);
  --table-header-text:  var(--neutral-500);
  --table-row-hover:    var(--neutral-50);
  --table-row-selected: var(--primary-50);
  --table-divider:      var(--neutral-100);

  /* -- Sidebar Tokens ------------------------------------------------- */
  --sidebar:              var(--neutral-0);
  --sidebar-border:       var(--neutral-200);
  --sidebar-item-fg:      var(--neutral-600);
  --sidebar-item-active-bg: var(--primary-50);
  --sidebar-item-active-fg: var(--primary-700);
  --sidebar-item-active-border: var(--primary-200);

  /* -- Chart Tokens ---------------------------------------------------- */
  --chart-1: var(--primary-500);
  --chart-2: var(--accent-500);
  --chart-3: var(--success-500);
  --chart-4: var(--warning-500);
  --chart-5: var(--danger-500);

  /* -- Shadcn Compatibility ------------------------------------------ */
  --background: var(--surface-canvas);
  --foreground: var(--text-body);
  --card:       var(--surface-base);
  --popover:    var(--surface-raised);
  --primary-foreground: var(--neutral-0);
  --secondary:  var(--neutral-100);
  --secondary-foreground: var(--neutral-800);
  --muted:      var(--neutral-100);
  --muted-foreground: var(--neutral-500);
  --accent:     var(--accent-500);
  --accent-foreground: var(--neutral-0);
  --destructive: var(--danger-500);
  --border:     var(--edge-default);
  --input:      var(--edge-default);
  --ring:       var(--focus-ring);

  /* -- Geometry -------------------------------------------------------- */
  --radius:          0.5rem;      /* 8px base */
  --radius-sm:       0.375rem;    /* 6px */
  --radius-md:       0.5rem;      /* 8px */
  --radius-lg:       0.75rem;     /* 12px */
  --radius-pill:     9999px;
  --button-radius:   0.375rem;    /* 6px */
  --card-radius:     0.5rem;      /* 8px */

  /* -- Spacing --------------------------------------------------------- */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;

  /* -- Typography ------------------------------------------------------ */
  --font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono:   ui-monospace, monospace;

  --text-xs:  12px;
  --text-sm:  13px;
  --text-md:  14px;
  --text-lg:  16px;
  --text-xl:  20px;

  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;

  /* -- Motion ---------------------------------------------------------- */
  --motion-duration-fast:    150ms;
  --motion-duration-base:    200ms;
  --motion-duration-slow:    300ms;
  --motion-ease-standard:   cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);

  /* -- Canvas ------------------------------------------------------------ */
  --app-canvas-wash: none;  /* Remove gradient, use flat color */
}
```

### 2.2 Replace Font Definitions

**REMOVE** the `@font-face` declarations for "SS Huchu" (4 declarations).

**REPLACE WITH:**
```css
/* Inter from Google Fonts — add to layout.tsx */
```

**In `/tmp/huchu/app/layout.tsx`:**
Replace `className="font-sans subpixel-antialiased"` and remove `--font-ibm-plex-mono` style injection.

**Add to layout:**
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
```

---

## 3. DARK MODE IMPLEMENTATION (New File)

### 3.1 Create `/tmp/huchu/app/themes/dark.css`

```css
[data-theme="dark"] {
  color-scheme: dark;

  /* -- Dark Neutral Palette -------------------------------------------- */
  --neutral-0:  #0f0f0f;
  --neutral-25: #1a1a1a;
  --neutral-50: #262626;
  --neutral-100:#333333;
  --neutral-200:#404040;
  --neutral-300:#525252;
  --neutral-400:#737373;
  --neutral-500:#a3a3a3;
  --neutral-600:#d4d4d4;
  --neutral-700:#e5e5e5;
  --neutral-800:#f5f5f5;
  --neutral-900:#fafafa;

  /* -- Surfaces ------------------------------------------------------ */
  --surface-canvas:  #0f0f0f;
  --surface-base:    #1a1a1a;
  --surface-raised:  #262626;
  --surface-muted:   #262626;
  --surface-subtle:  #1a1a1a;
  --surface-soft:    #262626;

  /* -- Text ---------------------------------------------------------- */
  --text-strong: #fafafa;
  --text-body:   #e5e5e5;
  --text-muted:  #a3a3a3;
  --text-subtle: #737373;

  /* -- Primary (brighter in dark) ----------------------------------- */
  --action-primary-bg:    #3b82f6;
  --action-primary-hover: #60a5fa;

  /* -- Sidebar -------------------------------------------------------- */
  --sidebar:          #0f0f0f;
  --sidebar-border:   #262626;
  --sidebar-item-active-bg: rgba(59, 130, 246, 0.15);

  /* -- Table -------------------------------------------------------- */
  --table-header-bg:  #1a1a1a;
  --table-row-hover:  #262626;
  --table-divider:    #333333;

  /* -- Shadows ------------------------------------------------------ */
  --shadow-card:    0 1px 3px rgba(0,0,0,0.3);
  --shadow-popover: 0 20px 25px rgba(0,0,0,0.4);
  --elevation-1:    inset 0 0 0 1px #333333;
}
```

### 3.2 Theme Toggle Component

Create `/tmp/huchu/components/theme-toggle.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="..."
    >
      {theme === "light" ? "Moon" : "Sun"}
    </button>
  );
}
```

---

## 4. COMPONENT RESTYLING

### 4.1 Button (`/tmp/huchu/components/ui/button.tsx`)

**Current:** Uses `rounded-md` (4px) from shadcn
**Target:** 6px radius per Attio

**Change:**
```css
/* Base button */
border-radius: var(--button-radius); /* 6px */
padding: 8px 16px;
height: 36px;
font-size: 14px;
font-weight: 500;

/* Primary variant */
background: var(--action-primary-bg);
color: var(--action-primary-fg);
transition: background 150ms ease;

/* Hover */
:hover { background: var(--action-primary-hover); }

/* Pressed/active */
:active { transform: scale(0.97); }
```

### 4.2 Card (`/tmp/huchu/components/ui/card.tsx`)

**Change:**
```css
border-radius: var(--card-radius); /* 8px */
background: var(--surface-base);
border: 1px solid var(--edge-default);
padding: 16px;
box-shadow: var(--shadow-card); /* 0 1px 3px rgba(0,0,0,0.1) */
```

### 4.3 Input (`/tmp/huchu/components/ui/input.tsx`)

**Change:**
```css
height: 36px;
border-radius: 6px;
border: 1px solid var(--input-border);
background: var(--input-bg);
padding: 8px 12px;
font-size: 14px;

/* Focus */
:focus { 
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px var(--primary-100);
}
```

### 4.4 Table (`/tmp/huchu/components/ui/table.tsx`)

**Change:**
```css
/* Header */
height: 40px;
background: var(--table-header-bg);
color: var(--table-header-text);
font-size: 12px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.05em;

/* Row */
height: 48px;
border-bottom: 1px solid var(--table-divider);

/* Row hover */
tr:hover { background: var(--table-row-hover); }

/* Cell */
padding: 12px 16px;
font-size: 14px;
```

### 4.5 Dialog/Modal (`/tmp/huchu/components/ui/dialog.tsx`)

**Change:**
```css
/* Backdrop */
background: rgba(0,0,0,0.5);
backdrop-filter: blur(4px);

/* Content */
background: var(--surface-base);
border-radius: 12px;
padding: 24px;
box-shadow: var(--shadow-modal);
max-width: 560px;
```

### 4.6 Sidebar (`/tmp/huchu/components/ui/sidebar.tsx`)

**Change:**
```css
/* Container */
width: 256px;
background: var(--sidebar);
border-right: 1px solid var(--sidebar-border);

/* Nav item */
height: 36px;
padding: 8px 12px;
border-radius: 6px;
margin: 2px 8px;
color: var(--sidebar-item-fg);
font-size: 14px;
font-weight: 500;

/* Hover */
:hover { background: var(--neutral-50); }

/* Active */
[data-active="true"] {
  background: var(--sidebar-item-active-bg);
  color: var(--sidebar-item-active-fg);
}
```

### 4.7 Navbar (`/tmp/huchu/components/layout/navbar.tsx`)

**Change:**
```css
/* Header */
height: 56px;
background: var(--surface-base);
border-bottom: 1px solid var(--edge-default);
/* REMOVE backdrop-blur-md */

/* Title */
font-size: 16px;
font-weight: 600;
color: var(--text-strong);
```

### 4.8 AppShell (`/tmp/huchu/components/layout/app-shell.tsx`)

**Change:**
```tsx
<SidebarInset className="m-0 flex h-[100dvh] min-h-[100dvh] flex-col overflow-hidden bg-surface-canvas">
  {/* REMOVE: rounded-xl border shadow-sm */}
  <Navbar />
  <main className="content-shell min-w-0 min-h-0 flex-1 overflow-y-auto py-6">
```

---

## 5. TYPOGRAPHY CHANGES

### 5.1 Font Replacement

**REMOVE:** "SS Huchu" font family everywhere
**REPLACE WITH:** Inter

**In `/tmp/huchu/app/layout.tsx`:**
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

**In body className:**
```tsx
<body className={`${inter.variable} font-sans antialiased`}>
```

**In `/tmp/huchu/app/globals.css`:**
```css
:root {
  --font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
```

### 5.2 Type Scale Adjustments

**Current:** `text-kpi: 38px`, `text-2xl: 28px`
**Attio Standard:**
```css
--text-kpi: 32px;      /* Dashboard numbers */
--text-2xl: 24px;      /* Page titles */
--text-xl: 20px;       /* Section headers */
--text-lg: 16px;       /* Card titles */
--text-md: 14px;       /* Body (STANDARD) */
--text-sm: 13px;       /* Captions */
--text-xs: 12px;       /* Labels, badges */
```

---

## 6. ICON SYSTEM CHANGES

### 6.1 Replace Material Symbols

**Current:** Uses Material Symbols (`font-variation-settings: "FILL" 1`)
**Attio Standard:** Uses outlined line icons (likely Lucide or Heroicons)

**Decision:** Keep Material Symbols but change to OUTLINED style:

```css
.material-symbols-rounded {
  font-variation-settings:
    "FILL" 0,    /* Change from 1 to 0 (outlined) */
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
```

### 6.2 Icon Sizes

```css
--icon-size-xs: 16px;
--icon-size-sm: 20px;
--icon-size-md: 24px;  /* Standard */
--icon-size-lg: 28px;
--icon-size-xl: 32px;
```

---

## 7. LAYOUT SPECIFICATIONS

### 7.1 App Shell Layout

```
----------------------------------------------------
-  Sidebar (256px)    -  Header (56px)            -
-                     -----------------------------
-  Logo               -                           -
-  ---------          -      Main Content         -
-  Nav Item           -      (fluid)              -
-  Nav Item (active)  -                           -
-  Nav Item           -      Padding: 24px        -
-  ---------          -                           -
-  Nav Section        -                           -
-  Nav Item           -                           -
----------------------------------------------------
```

### 7.2 Content Area
- Max-width: none (fluid)
- Padding: 24px
- Gap between sections: 24px

### 7.3 Card Grid
```css
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
gap: 16px;
```

---

## 8. ANIMATION SPECIFICATIONS

### 8.1 Micro-interactions

```css
/* Button hover */
transition: background-color 150ms ease;

/* Button press */
transition: transform 100ms ease;
:active { transform: scale(0.97); }

/* Card hover */
transition: box-shadow 200ms ease;
:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.05); }

/* Input focus */
transition: border-color 200ms ease, box-shadow 200ms ease;

/* Sidebar item */
transition: background-color 150ms ease;
```

### 8.2 Modal Transitions

```css
/* Open */
animation: modal-in 300ms cubic-bezier(0.16, 1, 0.3, 1);
@keyframes modal-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Close */
animation: modal-out 200ms ease-in;
@keyframes modal-out {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}
```

### 8.3 Page Load

```css
/* Stagger children */
.stagger-children > * {
  animation: fade-in-up 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 50ms; }
.stagger-children > *:nth-child(3) { animation-delay: 100ms; }
/* etc. */

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 9. SPECIFIC COMPONENT MIGRATIONS

### 9.1 Data Tables (All Table Views)

**Files to update:**
- All `*content.tsx` files with tables
- `/tmp/huchu/components/ui/data-table.tsx`
- `/tmp/huchu/components/ui/table.tsx`

**Changes:**
```css
/* Header row */
background: var(--table-header-bg);
border-bottom: 1px solid var(--table-divider);
font-size: 12px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.05em;
color: var(--table-header-text);
padding: 12px 16px;

/* Data row */
height: 48px;
border-bottom: 1px solid var(--table-divider);
transition: background-color 150ms ease;

/* Hover */
:hover { background: var(--table-row-hover); }

/* Selected */
[data-selected="true"] { background: var(--table-row-selected); }

/* Cell padding */
padding: 12px 16px;
font-size: 14px;
```

### 9.2 Form Shells (`/tmp/huchu/components/shared/form-shell.tsx`)

**Changes:**
```css
/* Form card */
background: var(--surface-base);
border: 1px solid var(--edge-default);
border-radius: 8px;
padding: 24px;

/* Section title */
font-size: 16px;
font-weight: 600;
margin-bottom: 16px;

/* Field label */
font-size: 13px;
font-weight: 500;
color: var(--text-muted);
margin-bottom: 6px;

/* Input */
height: 36px;
border-radius: 6px;
border: 1px solid var(--input-border);
```

### 9.3 Page Headers (`/tmp/huchu/components/shared/page-intro.tsx`)

**Changes:**
```css
/* Page title */
font-size: 20px;
font-weight: 600;
color: var(--text-strong);
letter-spacing: -0.01em;

/* Page description */
font-size: 14px;
color: var(--text-muted);
margin-top: 4px;
```

### 9.4 Status Badges (`/tmp/huchu/components/shared/status-state.tsx`)

**Changes:**
```css
/* Badge base */
display: inline-flex;
align-items: center;
padding: 2px 8px;
border-radius: 9999px;
font-size: 12px;
font-weight: 500;

/* Success */
background: var(--success-50);
color: var(--success-700);

/* Warning */
background: var(--warning-50);
color: var(--warning-700);

/* Error */
background: var(--danger-50);
color: var(--danger-700);
```

---

## 10. IMPLEMENTATION ORDER

### Phase 1: Foundation (Day 1)
1. Replace `globals.css` :root tokens
2. Add Inter font to `layout.tsx`
3. Create `dark.css` theme file
4. Update Tailwind theme mappings

### Phase 2: Core Components (Day 1-2)
1. Update `Button` component
2. Update `Card` component
3. Update `Input` component
4. Update `Table` component
5. Update `Dialog` component

### Phase 3: Layout (Day 2)
1. Update `Sidebar` component
2. Update `Navbar` component
3. Update `AppShell` component
4. Test app shell renders correctly

### Phase 4: Page Components (Day 2-3)
1. Update all `*content.tsx` files
2. Update form shells
3. Update data tables
4. Update status badges

### Phase 5: Polish (Day 3)
1. Add theme toggle
2. Test dark mode
3. Verify all animations
4. Run `npm run build`
5. Fix any TypeScript errors

---

## 11. QUALITY CHECKLIST

### Visual
- [ ] All corners rounded (6px buttons, 8px cards, 12px modals)
- [ ] Blue accent (#2563EB) on primary actions only
- [ ] Gray borders (#E5E7EB) on inputs and dividers
- [ ] Subtle shadows on cards (0 1px 3px)
- [ ] Proper spacing (8px gaps, 16px padding, 24px sections)

### Typography
- [ ] Inter font loaded and applied
- [ ] 14px body text standard
- [ ] 12px uppercase labels with tracking
- [ ] 16px page titles semibold
- [ ] Consistent line heights (1.4-1.5)

### Dark Mode
- [ ] Dark theme toggle works
- [ ] All surfaces invert correctly
- [ ] Text contrast maintained
- [ ] Blue accent still visible
- [ ] Borders visible in dark

### Animation
- [ ] Buttons scale on press (0.97)
- [ ] Cards lift on hover (shadow increase)
- [ ] Modals scale in (0.95→1)
- [ ] Sidebar items fade background
- [ ] 60fps on all transitions

### Code
- [ ] No hardcoded colors in components
- [ ] All colors reference CSS tokens
- [ ] TypeScript compiles without errors
- [ ] Build completes successfully
- [ ] No console warnings

---

## 12. AGENT SWARM PROMPT

### Context
You are transforming a production ERP codebase (Huchu) to match Attio's product design language. This is NOT a marketing website — this is the actual application UI that users interact with daily.

### Reference Material
- 27 screenshots of Refero/Attio app UI showing:
  - Sidebar navigation
  - Data tables
  - Modal dialogs
  - Form inputs
  - Charts
  - Task lists
  - File browsers
  - Dark mode

### Design Tokens (from screenshots)
- Primary: #2563EB (blue)
- Surface: #FFFFFF (light), #0F0F0F (dark)
- Text: #111827 (light), #FAFAFA (dark)
- Border: #E5E7EB (light), #404040 (dark)
- Radius: 6px (sm), 8px (md), 12px (lg)
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Font: Inter, 14px base

### Rules
1. NEVER break existing functionality
2. ONLY change styling, not logic
3. Use CSS custom properties for all colors
4. Maintain TypeScript types
5. Test `npm run build` after each phase
6. Dark mode MUST work for every component

### Success Criteria
The app should look like it was designed by the same team that built Attio. When placed side-by-side with the screenshots, the visual language should be identical.

---

**Document End**

*This specification is complete and actionable. Every file change is specified. Every token value is provided. Execute in phases and verify at each step.*
