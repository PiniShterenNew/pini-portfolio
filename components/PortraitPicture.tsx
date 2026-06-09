interface PortraitPictureProps {
  className?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}

export default function PortraitPicture({
  className,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: PortraitPictureProps) {
  return (
    <picture className={className}>
      {/* Desktop (>=1024px) - landscape */}
      <source
        type="image/avif"
        media="(min-width: 1024px)"
        srcSet="/pini-desktop-sm.avif 800w, /pini-desktop-md.avif 1200w, /pini-desktop.avif 1536w"
        sizes={sizes}
      />
      <source
        type="image/webp"
        media="(min-width: 1024px)"
        srcSet="/pini-desktop-sm.webp 800w, /pini-desktop-md.webp 1200w, /pini-desktop.webp 1536w"
        sizes={sizes}
      />
      {/* Mobile - portrait */}
      <source
        type="image/avif"
        srcSet="/pini-mobile-sm.avif 800w, /pini-mobile.avif 941w"
        sizes="100vw"
      />
      <source
        type="image/webp"
        srcSet="/pini-mobile-sm.webp 800w, /pini-mobile.webp 941w"
        sizes="100vw"
      />
      <img
        src="/pini-mobile-sm.webp"
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className="block w-full h-full object-cover"
      />
    </picture>
  );
}
