import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Icons } from "./icons";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <PhotoProvider>
      {images.map((image, index) => (
        <PhotoView src={image} key={index}>
          <Icons.gallery
            className={`md:text-muted-foreground hover:text-foreground cursor-pointer ${
              index === 0 ? "" : "hidden"
            }`}
          />
        </PhotoView>
      ))}
    </PhotoProvider>
  );
}
