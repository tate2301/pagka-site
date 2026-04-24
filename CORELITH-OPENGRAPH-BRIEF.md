# Corelith OpenGraph Image Design Brief
## For ChatGPT / DALL-E Image Generation

---

## 🎯 Purpose
Social media preview card for Corelith (corelith.pagka.dev). Appears when links are shared on Twitter/X, LinkedIn, WhatsApp, Facebook, Slack.

## 📐 Dimensions
**1200 × 630 pixels** (1.91:1 aspect ratio — universal OpenGraph standard)

---

## 🎨 Design Direction

### Style
Clean, modern SaaS aesthetic. Geometric abstract illustration with subtle depth. Not photorealistic. Not cluttered. Confident minimalism.

### Mood
- Professional but approachable
- Technical competence + human warmth
- "This is software that actually works"

---

## 🖌️ Color Palette (STRICT — use exactly these)

| Role | Hex | Usage |
|------|-----|-------|
| **Primary Background** | `#FAF9F7` | Warm off-white, fills 80% of canvas |
| **Accent 1** | `#F27B6A` | Coral — highlights, geometric shapes, CTA area |
| **Accent 2** | `#7C5CFC` | Violet — secondary shapes, data visualization elements |
| **Text/Dark** | `#1A1A1A` | Headline text, strong contrast elements |
| **Secondary Text** | `#525252` | Subtitle, supporting copy |

**NO neon. NO gradients that shift hue. NO busy backgrounds.**

---

## 📐 Layout (1200 × 630)

```
+--------------------------------------------------+
|  [Geometric abstract illustration — right half]   |
|                                                   |
|   ┌────────────────────────┐  ┌──────────────┐   |
|   │                        │  │  Coral shape │   |
|   │   CORELITH             │  │   (floating) │   |
|   │                        │  │              │   |
|   │   One platform.        │  │  ┌────────┐  │   |
|   │   15+ modules.         │  │  │ Violet │  │   |
|   │   Built for Zimbabwe.  │  │  │ shape  │  │   |
|   │                        │  │  └────────┘  │   |
|   │   [coral button shape] │  │              │   |
|   │                        │  │  ┌────────┐  │   |
|   │                        │  │  │ UI card│  │   |
|   │                        │  │  │ mockup │  │   |
|   │                        │  │  └────────┘  │   |
|   └────────────────────────┘  └──────────────┘   |
+--------------------------------------------------+
```

**Left 55%:** Text content area with generous padding
**Right 45%:** Abstract geometric illustration

---

## 📝 Text Content (Exact Copy)

### Headline (top-left)
**"CORELITH"**
- Font: Bold sans-serif (Inter or similar)
- Size: Large, dominant
- Color: `#1A1A1A`
- Letter-spacing: slightly tight (-0.02em)

### Subheadline (below)
**"One platform. 15+ modules. Built for Zimbabwe."**
- Font: Medium weight sans-serif
- Size: Medium
- Color: `#525252`
- Max 2 lines

### Micro-tag (optional, bottom-left)
**"corelith.pagka.dev"**
- Font: Small, clean
- Color: `#F27B6A` (coral)

---

## 🎨 Right-Side Illustration Details

Create an **abstract geometric composition** that suggests:
- A business dashboard / control center
- Connected modules / building blocks
- Data flow / organization

### Elements to Include:

1. **Large soft coral shape** (top-right)
   - Rounded, organic pebble/blob shape
   - Fills ~30% of right area
   - Subtle, not aggressive
   - Color: `#F27B6A` at 20% opacity

2. **Violet geometric element** (mid-right)
   - Smaller, sharper geometric shape
   - Could be a rounded rectangle or abstract data bar
   - Color: `#7C5CFC` at 25% opacity

3. **UI Card Mockup** (bottom-right, overlapping)
   - One floating card that looks like a dashboard widget
   - White/light background with subtle shadow
   - Contains simple chart or data visualization
   - Suggests "software product" without being literal

4. **Connection Lines** (subtle)
   - Thin dashed or dotted lines connecting elements
   - Suggests network / integration
   - Color: `#1A1A1A` at 8% opacity

5. **Small Accent Dots** (scattered)
   - 3-4 small circles (4-8px)
   - Mix of coral and violet
   - Suggests data points / activity

### Style Notes for Illustration:
- **Flat design** with subtle depth (soft shadows, not 3D renders)
- **Geometric** — circles, rounded rectangles, soft organic shapes
- **Abstract** — not literal screenshots, suggestive of software
- **Balanced** — negative space is as important as filled space

---

## 🚫 What NOT to Include

- ❌ Photos of people (no stock photos)
- ❌ Real phone/device mockups
- ❌ Busy patterns or textures
- ❌ More than 3 colors (+ black/white)
- ❌ Text smaller than 14px equivalent
- ❌ Cluttered UI screenshots
- ❌ Generic "tech" imagery (circuit boards, globes, handshake)
- ❌ Gradients that aren't subtle

---

## ✅ Quality Checklist

- [ ] Background is `#FAF9F7` warm off-white
- [ ] Headline "CORELITH" is clearly readable
- [ ] Subheadline fits in 2 lines max
- [ ] Right-side illustration feels balanced, not crowded
- [ ] Coral (`#F27B6A`) and violet (`#7C5CFC`) accents are present but not dominant
- [ ] At small sizes (Messenger preview ~300px wide), text is still legible
- [ ] Image feels premium, not cheap/generic

---

## 🖼️ Reference Aesthetic

Think: **Vercel + Linear + Stripe** social preview cards
- Clean geometric shapes
- Confident whitespace
- One bold headline
- Abstract product suggestion
- Premium, understated

---

## 📝 ChatGPT Prompt (Copy-Paste Ready)

```
Create a 1200x630 pixel OpenGraph social preview image for a SaaS company called "Corelith".

BACKGROUND: Warm off-white (#FAF9F7)

LEFT SIDE (55% of width):
- Large bold text "CORELITH" in dark charcoal (#1A1A1A), modern sans-serif, tight letter-spacing
- Below it: "One platform. 15+ modules. Built for Zimbabwe." in medium gray (#525252)
- Small coral text "corelith.pagka.dev" at bottom
- Generous padding, clean alignment

RIGHT SIDE (45% of width):
- Abstract geometric illustration suggesting a business dashboard
- Soft coral (#F27B6A) organic blob shape, top-right, low opacity (20%)
- Violet (#7C5CFC) geometric data bar or rounded rectangle, mid-right
- One floating white UI card mockup with subtle shadow, bottom-right, showing a simple chart
- Thin dotted connection lines between elements
- 3-4 small accent dots (coral and violet)

STYLE:
- Flat design with subtle depth
- Geometric abstract, not photorealistic
- Confident minimalism
- Vercel/Stripe social card aesthetic
- Premium, modern, clean

NO photos, NO device mockups, NO busy patterns, NO generic tech imagery.
```

---

## 📤 Output Files

| File | Format | Purpose |
|------|--------|---------|
| `og-image.jpg` | JPG, 1200×630, <500KB | Primary OpenGraph image |
| `og-image.png` | PNG fallback | Transparency if needed |
| `twitter-card.jpg` | JPG, 1200×600, <1MB | Twitter-specific (optional) |

---

## 🔗 Implementation (After Generation)

Add to `<head>` of every page:

```html
<meta property="og:image" content="https://corelith.pagka.dev/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:title" content="Corelith — Zimbabwe's Business OS">
<meta property="og:description" content="One platform. 15+ modules. Built for how Zimbabwe actually works.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://corelith.pagka.dev/og-image.jpg">
```

---

## 🎨 Variations to Generate

### Variation A: "Product Focus"
- Same layout
- Headline: "15 Modules. One Platform."
- Illustration shows more UI card elements, suggesting multiple modules

### Variation B: "Trust/Social Proof"
- Same layout
- Headline: "Trusted by Zimbabwe Businesses"
- Subhead: "From gold mines to retail shops"
- Illustration includes subtle checkmark/badge elements

### Variation C: "Minimal Logo"
- Just the Corelith wordmark + coral dot
- No subheadline
- Ultra-clean, Apple-style
- Best for brand recognition after awareness

---

*Prepared by: Vektor (Head of Design) + Oguz (Creative Engineer)*
*Date: April 25, 2026*
