import { LocalImage } from "@/components/site/local-image";
import { cn } from "@/lib/utils";

type ResponsiveCoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  desktopContainerClassName?: string;
  desktopImageClassName?: string;
  mobileImageClassName?: string;
};

export function ResponsiveCoverImage({
  src,
  alt,
  priority,
  sizes = "100vw",
  desktopContainerClassName,
  desktopImageClassName,
  mobileImageClassName,
}: ResponsiveCoverImageProps) {
  return (
    <>
      {/* Phone: full image, native aspect ratio, no crop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("block h-auto w-full md:hidden", mobileImageClassName)}
      />

      {/* Tablet/desktop: existing cropped cover layout */}
      <div className={cn("relative hidden w-full overflow-hidden md:block", desktopContainerClassName)}>
        <LocalImage
          src={src}
          alt={alt}
          priority={priority}
          sizes={sizes}
          fill
          className={cn("object-cover", desktopImageClassName)}
        />
      </div>
    </>
  );
}
