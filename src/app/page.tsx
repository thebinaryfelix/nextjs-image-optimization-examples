import {
  Gallery,
  GalleryWithSharp,
  ImageCredits,
  ImageDescription,
} from "@/components";

export default function Page() {
  return (
    <main className="flex flex-col items-center mt-4 text-center">
      <p className="text-2xl mb-8">Server components</p>

      <div>
        <ImageDescription description='Using the Image component from "next/image"' />

        {/* Toggle between Gallery and GalleryWithSharp to see the difference */}
        {/* <Gallery /> */}
        <GalleryWithSharp />

        <ImageCredits>Images by Mateus Felix.</ImageCredits>
      </div>
    </main>
  );
}
