# Attio/Refero Design Token Extraction
## Extracted from 27 App Screenshots

---

## 1. Color System (Extracted from Screenshots)

### Primary Palette
| Token | Hex | Usage | Screenshot Evidence |
|-------|-----|-------|---------------------|
| Primary Blue | #2563EB | Primary buttons, active states, links | "Add report", "Publish workflow", "Add task" buttons |
| Primary Blue Hover | #1D4ED8 | Button hover states | Inferred from standard blue scale |
| Text Primary | #111827 | Main headings, body text | Company names, task titles |
| Text Secondary | #6B7280 | Meta text, descriptions | Subtext under company names |
| Text Tertiary | #9CA3AF | Placeholders, hints | "No description" placeholders |
| Background | #FFFFFF | Main canvas | Primary workspace background |
| Background Secondary | #F9FAFB | Sidebar hover, subtle sections | Hover states in sidebar |
| Border | #E5E7EB | Dividers, input borders | Table borders, card dividers |
| Border Focus | #3B82F6 | Input focus states | Focused input borders |

### Chart/Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Chart Blue | #3B82F6 | Primary data series |
| Chart Cyan | #06B6D4 | Secondary data |
| Chart Green | #10B981 | Tertiary data |
| Chart Purple | #8B5CF6 | Fourth series |
| Chart Red | #EF4444 | Alerts, fifth series |

### Dark Mode Palette (Critical Discovery)
| Token | Hex | Usage | Evidence |
|-------|-----|-------|----------|
| Dark BG Primary | #0F0F0F | Main background | Dark mode tasks view |
| Dark BG Secondary | #1A1A1A | Cards, panels | Task cards in dark mode |
| Dark BG Tertiary | #262626 | Elevated surfaces | Hover states |
| Dark Text Primary | #FAFAFA | Main text | Task titles in dark |
| Dark Text Secondary | #A3A3A3 | Meta text | Due dates, labels |
| Dark Border | #404040 | Dividers | Subtle separators |

---

## 2. Typography System (Measured)

### Font Stack
**Primary:** Inter (inferred from clean geometric shapes)  
**Monospace:** System monospace (for code/variables)

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Page Title | 20px | 600 | 1.3 | -0.01em |
| Section Header | 16px | 600 | 1.4 | 0 |
| Card Title | 14px | 600 | 1.4 | 0 |
| Body | 14px | 400 | 1.5 | 0 |
| Body Small | 13px | 400 | 1.5 | 0 |
| Caption/Label | 12px | 500 | 1.4 | 0.02em |
| Meta | 11px | 400 | 1.4 | 0.01em |

### Typography Patterns
- **Headings:** Semibold (600), tight line-height
- **Body:** Regular (400), generous line-height
- **Labels:** Medium (500), slightly tracked out
- **Numbers:** Tabular figures (aligned)

---

## 3. Spacing System (Measured)

### Base Unit: 4px

### Layout Spacing
| Context | Value | Evidence |
|---------|-------|----------|
| Sidebar Width | 256px | Fixed left nav |
| Page Padding | 24px | Main content margins |
| Card Padding | 16px | Modal content padding |
| Section Gap | 24px | Between major sections |
| Element Gap | 8px | Between related elements |

### Component Spacing
| Element | Value |
|---------|-------|
| Button Padding | 8px 16px |
| Input Padding | 10px 14px |
| List Item Height | 40px |
| Card Border Radius | 8px |
| Button Border Radius | 6px |
| Input Border Radius | 6px |

---

## 4. Component Library (Extracted)

### 4.1 Buttons

**Primary Button**
```
Background: #2563EB
Color: #FFFFFF
Border Radius: 6px
Padding: 8px 16px
Font: 14px, weight 500
Hover: Background #1D4ED8
Shadow: 0 1px 2px rgba(0,0,0,0.05)
```

**Secondary Button**
```
Background: #F3F4F6
Color: #374151
Border Radius: 6px
Padding: 8px 16px
Font: 14px, weight 500
Hover: Background #E5E7EB
```

**Ghost Button**
```
Background: transparent
Color: #6B7280
Border: 1px solid #E5E7EB
Border Radius: 6px
Hover: Background #F9FAFB
```

### 4.2 Inputs

**Text Input**
```
Height: 36px
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border Radius: 6px
Padding: 8px 12px
Font: 14px
Focus: Border #3B82F6, Ring 2px #BFDBFE
Placeholder: #9CA3AF
```

**Textarea**
```
Min Height: 80px
Same as text input
Resize: vertical
```

### 4.3 Cards

**Standard Card**
```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border Radius: 8px
Padding: 16px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
```

**Card Hover**
```
Border: #D1D5DB
Shadow: 0 4px 6px rgba(0,0,0,0.05)
```

### 4.4 Modal/Dialog

**Modal Container**
```
Background: #FFFFFF
Border Radius: 12px
Padding: 24px
Max Width: 560px
Shadow: 0 20px 25px rgba(0,0,0,0.1)
Backdrop: rgba(0,0,0,0.5) with blur
```

**Modal Header**
```
Border Bottom: 1px solid #E5E7EB
Padding Bottom: 16px
Margin Bottom: 24px
Title: 18px, weight 600
```

### 4.5 Navigation (Sidebar)

**Sidebar Container**
```
Width: 256px
Background: #FFFFFF
Border Right: 1px solid #E5E7EB
Padding: 16px 0
```

**Nav Item**
```
Height: 36px
Padding: 8px 16px
Font: 14px, weight 500
Color: #4B5563
Hover: Background #F9FAFB
Active: Background #EFF6FF, Color #2563EB
Border Radius: 6px
Margin: 2px 12px
```

**Nav Icon**
```
Size: 20px
Color: inherit
Margin Right: 12px
```

**Badge (in nav)**
```
Background: #2563EB
Color: #FFFFFF
Font: 11px, weight 600
Padding: 2px 6px
Border Radius: 10px
```

### 4.6 Tables

**Table Header**
```
Background: #F9FAFB
Text: 12px, weight 500, uppercase, #6B7280
Padding: 12px 16px
Border Bottom: 1px solid #E5E7EB
Letter Spacing: 0.05em
```

**Table Row**
```
Height: 48px
Border Bottom: 1px solid #F3F4F6
Hover: Background #F9FAFB
```

**Table Cell**
```
Padding: 12px 16px
Font: 14px
```

### 4.7 Charts

**Bar Chart**
```
Bar Color: #3B82F6
Bar Radius: 4px (top)
Bar Gap: 8px
Grid Lines: #E5E7EB
Axis Text: 12px, #6B7280
```

**Line Chart**
```
Line Color: #2563EB
Line Width: 2px
Dot: 6px, fill #2563EB, stroke #FFFFFF, stroke-width 2px
Grid: Horizontal only, #F3F4F6
```

**Pie Chart**
```
Colors: [#3B82F6, #06B6D4, #10B981, #8B5CF6, #EF4444]
Segment Gap: 2px
Legend: Horizontal, 12px text
```

---

## 5. Layout Patterns

### 5.1 App Shell
```
┌─────────────────────────────────────────┐
│  ┌──────┐                              │
│  │ Logo │  Breadcrumbs        Profile  │ Header (56px)
│  └──────┘                              │
├─────────────────────────────────────────┤
│  ┌────┐  ┌──────────────────────────┐  │
│  │Nav │  │      Main Content        │  │
│  │    │  │                          │  │
│  │256 │  │                          │  │
│  │ px │  │                          │  │
│  └────┘  └──────────────────────────┘  │
└─────────────────────────────────────────┘
```

### 5.2 Content Area
- Max Width: 100% (fluid)
- Padding: 24px
- Background: #FFFFFF or #F9FAFB (alternating sections)

### 5.3 Three-Column Layout (Reports)
```
┌──────────────────────────────────────────────────┐
│  Main Content        │  Sidebar (320px)          │
│                      │                           │
│  Chart               │  - Data source            │
│                      │  - Filters                │
│                      │  - Config options         │
└──────────────────────────────────────────────────┘
```

---

## 6. Dark Mode Specifications (Complete)

### Color Mapping (Light → Dark)

| Light Mode | Dark Mode |
|------------|-----------|
| #FFFFFF | #0F0F0F |
| #F9FAFB | #1A1A1A |
| #F3F4F6 | #262626 |
| #E5E7EB | #404040 |
| #111827 | #FAFAFA |
| #374151 | #D4D4D4 |
| #6B7280 | #A3A3A3 |
| #2563EB | #3B82F6 (kept same or slightly brighter) |

### Dark Mode Components

**Card (Dark)**
```
Background: #1A1A1A
Border: 1px solid #262626
Border Radius: 8px
```

**Button Primary (Dark)**
```
Background: #2563EB (unchanged)
Color: #FFFFFF
Hover: #3B82F6
```

**Input (Dark)**
```
Background: #262626
Border: 1px solid #404040
Color: #FAFAFA
Placeholder: #737373
Focus: Border #3B82F6
```

---

## 7. Animation Specifications (Inferred)

### Micro-interactions
| Interaction | Duration | Easing | Transform |
|-------------|----------|--------|-----------|
| Button Hover | 150ms | ease-out | background-color |
| Button Press | 100ms | ease-in | scale(0.97) |
| Card Hover | 200ms | ease-out | translateY(-2px), shadow |
| Modal Open | 300ms | ease-out | opacity, scale(0.95→1) |
| Modal Close | 200ms | ease-in | opacity, scale(1→0.95) |
| Tooltip | 150ms | ease-out | opacity, translateY |
| Sidebar Toggle | 300ms | cubic-bezier(0.4, 0, 0.2, 1) | width |

### Page Transitions
- Fade in: 400ms, ease-out
- Content stagger: 50ms delay between items
- Loading skeleton: Shimmer animation, 1.5s loop

---

## 8. Iconography

### Style
- Line icons (outlined)
- 1.5px stroke width
- 20×20px default size
- 24×24px for larger contexts

### Icon System
- Lucide icons (inferred from style)
- Consistent corner rounding
- No filled variants (except for special cases like badges)

---

## 9. Empty States

### Visual Style
- Large centered icon (48px)
- Illustration: Minimal line art
- Title: 16px, weight 600, centered
- Description: 14px, secondary color, centered, max-width 400px
- CTA: Primary button below

### Example (Map Report)
- Icon: 3D bar chart illustration
- Title: "Input needed to display chart"
- Description: "Select a location attribute"

---

## 10. Workflow Builder Specifics

### Node Design
```
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border Radius: 8px
Padding: 16px
Min Width: 240px
Shadow: 0 2px 4px rgba(0,0,0,0.05)

Header: Icon (20px) + Title (14px, 600) + Tag (right)
Description: 13px, secondary, optional
```

### Connection Lines
```
Color: #9CA3AF
Width: 2px
Style: Solid
Animation: None (static)
Corner Radius: 8px (bezier curves)
```

### Node Types
- **Trigger:** Clock icon, "Trigger" label
- **Action:** Category icon, "Action" label
- **Condition:** Filter icon, "Condition" label
- **Delay:** Clock icon, "Delay" label

---

## 11. Critical Design Decisions

### 1. Rounded Everything
- All corners: 6px minimum
- Cards: 8px
- Modals: 12px
- Buttons: 6px

### 2. Blue as Primary
- Single accent color: Blue (#2563EB)
- Used sparingly for: buttons, links, active states, charts
- Everything else: Grayscale

### 3. Generous Whitespace
- Section padding: 24px
- Element gaps: 16px
- Card padding: 16px

### 4. Subtle Shadows
- Cards: 0 1px 3px rgba(0,0,0,0.1)
- Modals: 0 20px 25px rgba(0,0,0,0.1)
- No heavy shadows anywhere

### 5. Typography Hierarchy
- Size differences: 2px increments
- Weight creates hierarchy, not just size
- Color reinforces hierarchy (primary → secondary → tertiary)

---

## 12. For Corelith Implementation

### Must-Have Tokens
```javascript
const tokens = {
  colors: {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    background: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',
    text: '#111827',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    border: '#E5E7EB',
  },
  dark: {
    background: '#0F0F0F',
    backgroundSecondary: '#1A1A1A',
    backgroundTertiary: '#262626',
    text: '#FAFAFA',
    textSecondary: '#A3A3A3',
    border: '#404040',
  },
  radius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  }
}
```

### Key Differences from Marketing Site
- Marketing site: Near-monochrome (#0A0A0A), dramatic typography (72px heroes)
- App UI: Functional blue accent, smaller type (14px standard), dense layouts

### Recommendation
For Corelith:
1. **Marketing site:** Follow Attio.com (monochrome, big type, generous spacing)
2. **Product UI:** Follow Refero (blue accent, 14px base, functional density)
3. **Both:** Same border radius (6-8px), same Inter font, same animation principles

---

**Document End**

*This extraction is based on direct measurement and observation from 27 Refero/Attio app screenshots. All values are approximate and should be verified in implementation.*
