# Images

This folder contains image assets for the EmeritaClinical platform.

## Logo Files
Place your official logo files here:
- `logo.svg` - Primary logo (SVG preferred for scalability)
- `logo.png` - PNG fallback
- `logo-dark.svg` - Dark mode version (if applicable)
- `logo-white.svg` - White version for dark backgrounds

## Usage in Next.js
Import images in your components:

```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.svg" 
  alt="EmeritaClinical Logo" 
  width={200} 
  height={50}
/>
```

## Recommended Formats
- **SVG**: Preferred for logos and icons (scalable, small file size)
- **PNG**: For images with transparency
- **WebP**: For photos and complex graphics (better compression)
- **JPEG**: For photos without transparency
