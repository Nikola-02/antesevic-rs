import Image, { type ImageProps } from "next/image";

type LocalImageProps = ImageProps;

export function LocalImage({ quality = 100, ...props }: LocalImageProps) {
  return <Image {...props} quality={quality} unoptimized />;
}
