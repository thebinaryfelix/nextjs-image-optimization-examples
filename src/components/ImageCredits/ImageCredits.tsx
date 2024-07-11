import React from "react";

interface ImageCreditsProps {
  children: string | React.ReactNode;
}

export const ImageCredits = ({ children }: ImageCreditsProps) => (
  <p className="text-xs mt-1 italic">{children}</p>
);
