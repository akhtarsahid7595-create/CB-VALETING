---
name: premium-mobile-landing
description: Refine marketing landing pages into genuinely mobile-first, premium experiences with controlled hero cropping, generous spacing, strong hierarchy, and production-ready responsive behavior.
---

# Premium Mobile Landing

Use this skill when a landing page feels like a shrunken desktop layout, especially when the hero image is cropped poorly or the sections feel generic or low-budget.

## Rules

- Design the smallest viewport first. Assume 320–430px phones and test the layout at 360px and 390px before widening it.
- The hero must be a complete, intentional mobile composition: use a dedicated mobile crop or `background-position`, preserve the car/detailing subject, keep copy readable over a controlled gradient, and never expose a desktop split layout on phone widths.
- Keep hero copy concise on mobile. Establish one clear headline, one primary CTA, and one secondary text action; avoid crowded proof rows or tiny decorative labels.
- Use a restrained premium system: charcoal/black surfaces, one metallic accent, thin borders, large type, generous vertical rhythm, and fewer visible components. Avoid dense grids, excessive rounded cards, bright gradients, and tiny text.
- Sections should stack naturally with 56–88px vertical padding on mobile. Cards become full-width rows or a deliberate horizontal scroller; no cramped three-column shrinkage.
- Make navigation explicitly mobile: compact logo, menu button with a full-width overlay panel, readable hit targets, and no desktop CTA competing with the menu.
- Verify `overflow-x: hidden`, image aspect ratios, button tap areas, text wrapping, and that no content is clipped at 320px, 360px, 390px, and 430px widths.
- Prefer CSS/media-query changes over duplicated markup. Add a mobile-specific asset only when art direction cannot be achieved with cropping.

## Review checklist

1. Does the first screen feel intentional at 360px, without horizontal scroll?
2. Is the hero image full-bleed and visually complete rather than a squeezed desktop image?
3. Can the user identify the service, CTA, and brand in under three seconds?
4. Do every section, control, and image have breathing room and a clear hierarchy?
5. Does the desktop layout remain polished after mobile changes?
