import { getBase64Image } from "@/utils";
import { images } from "./images";
import Image from "next/image";

interface Images {
  /**
   * Description of the image
   */
  description: string;

  /**
   * URL of the thumbnail image. The same image as the original,
   * but resized and stored in the S3 bucket.
   */
  thumbnail: string;

  /**
   * URL of the original image. The full-size image stored in the S3 bucket.
   */
  original: string;

  /**
   * Base64 data URL of the blurred image. Used as a placeholder.
   * Provided by the Sharp plugin inside the getBase64Image function.
   */
  blurDataURL: string;
}

const getImages = async (): Promise<Images[]> => {
  const imagesWithBlurData = await Promise.all(
    images.map(async (image) => {
      const blurDataURL = await getBase64Image(image.thumbnail);
      return { ...image, blurDataURL };
    })
  );
  return imagesWithBlurData;
};

export const GalleryWithSharp = async () => {
  const images = await getImages();

  return (
    <div className="px-4 w-full grid sm:grid-cols-2 lg:max-w-[1080px]">
      {images.map(({ description, original, blurDataURL }, index) => (
        <Image
          priority={index === 0}
          src={original}
          key={description}
          width={1614}
          height={1291}
          placeholder="blur"
          blurDataURL={blurDataURL}
          alt="Stars in the Sky at Night. By Mateus Felix"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ))}
    </div>
  );
};
