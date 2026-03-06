# Brand assets

- **bma-logo-icon.svg** – Primary icon (dark stroke, for light backgrounds).
- **bma-logo-icon-light.svg** – Light stroke variant (for dark backgrounds).
- **bma-favicon.svg** – Icon-only for favicon / apple-touch-icon.

Logo usage: `components/BrandLogo.tsx` (variant: `icon` | `horizontal`, theme: `light` | `dark`, optional `size` in px).  
To change icon size site-wide, adjust the `h-6 sm:h-7` classes in `BrandLogo.tsx` or pass the `size` prop.  
To change accent gold, edit the `gold` variable in `LogoIcon` inside `BrandLogo.tsx`.
