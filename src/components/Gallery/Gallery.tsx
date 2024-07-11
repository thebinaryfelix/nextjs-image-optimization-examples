import Image from "next/image";

const images = [
  {
    src: "https://d21elisfc3zsvc.cloudfront.net/photos/data/dslr/fullsize/panorama_parada1_opt.jpg",
  },
  {
    src: "https://d21elisfc3zsvc.cloudfront.net/photos/data/dslr/fullsize/panorama_parada2_opt.jpg",
  },
  {
    src: "https://d21elisfc3zsvc.cloudfront.net/photos/data/dslr/fullsize/panorama_parada3_opt.jpg",
  },
  {
    src: "https://d21elisfc3zsvc.cloudfront.net/photos/data/dslr/fullsize/panorama_parada4_opt.jpg",
  },
];

export const Gallery = () => (
  <div className="px-4 w-full grid sm:grid-cols-2 lg:max-w-[1080px]">
    {images.map(({ src }, index) => (
      <Image
        priority={index === 0}
        key={src}
        src={src}
        width={1614}
        height={1291}
        alt="Stars in the Sky at Night. By Mateus Felix"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    ))}
  </div>
);
