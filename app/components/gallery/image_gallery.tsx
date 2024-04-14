"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageData {
  id: number;
  src: string;
  type: string;
  description: String;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const [galleryColumns, setGalleryColumns] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dpsapi-two.vercel.app/root/gallery.json"
        );
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getImg = (src: string) => {
    setTempSrc(src);
    setModel(true);
  };

  const handleClose = () => {
    setModel(false);
  };
  const updateColumns = () => {
    if (window.innerWidth < 992 && window.innerWidth >= 481) {
      setGalleryColumns(2);
    } else if (window.innerWidth < 481) {
      setGalleryColumns(1);
    } else {
      setGalleryColumns(3);
    }
  };

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#333",
            transition:
              "opacity 0.4s ease, visibility 0.4s ease, transform 0.5s ease-in-out",
            visibility: model ? "visible" : "hidden",
            opacity: model ? 1 : 0,
            transform: model ? "scale(1)" : "scale(0)",
            overflow: "auto",
            zIndex: 999,
          }}
        >
          <button
            style={{ position: "absolute", top: "20px", right: "20px" }}
            onClick={handleClose}
          >
            <div className="cursor-pointer">
              <div className="w-8 h-1 bg-white rotate-45 translate-y-5"></div>
              <div className="w-8 h-1 bg-white -rotate-45 translate-y-4 t"></div>
            </div>
          </button>
          <img
            src={tempSrc}
            alt="enlarged"
            style={{
              width: "auto",
              maxWidth: "100%",
              maxHeight: "calc(100vh - 80px)",
              display: "block",
              boxSizing: "border-box",
              padding: " 40px 0 20px",
              margin: "0 auto",
            }}
          />
          <p>{images.find((img) => img.src === tempSrc)?.description}</p>
        </div>

        <div
          className="gallery"
          style={{
            padding: "0 12px",
            columnCount: galleryColumns,
            columnWidth: `${100 / galleryColumns}%`,
          }}
        >
          {images.map((image) => (
            <div
              className="media"
              key={image.id}
              onClick={() => getImg(image.src)}
              style={{
                transition: "all 350ms ease",
                cursor: "pointer",
                marginBottom: "12px",
              }}
            >
              <Image
                src={image.src}
                alt={`Image ${image.id}`}
                width={500}
                height={700}
                className="w-full h-full cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ImageGallery;
