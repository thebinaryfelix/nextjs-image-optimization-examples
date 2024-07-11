interface ImageDescriptionProps {
  description: string;
}

export const ImageDescription = ({ description }: ImageDescriptionProps) => (
  <p className="text-center text-lg mb-2 font-semibold">{description}</p>
);
