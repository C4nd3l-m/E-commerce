"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface CardLandingProps {
    imageSrc?: string;
    altText: string;
    imageWidth: string;
    imageHeight: string;
    isVideo?: boolean;
    videoSrc?: string;
    customClass?: string;
}

const CardLanding: React.FC<CardLandingProps> = ({
    imageSrc,
    altText,
    imageWidth,
    imageHeight,
    isVideo = false,
    videoSrc,
    customClass = ""
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (videoRef.current) {
                        if (entry.isIntersecting) {
                            videoRef.current.play();
                        } else {
                            videoRef.current.pause();
                        }
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold for triggering play/pause
        );

        const currentVideo = videoRef.current;
        if (currentVideo) {
            observer.observe(currentVideo);
        }

        return () => {
            if (currentVideo) {
                observer.unobserve(currentVideo);
            }
        };
    }, []);

    return (
        <div className={`${customClass} overflow-hidden flex items-center justify-center`}>
            {isVideo && videoSrc ? (
                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${imageWidth} ${imageHeight} object-cover`}
                />
            ) : (
                <Image
                    src={imageSrc || ""}
                    alt={altText}
                    width={800} // Providing a base width for optimization
                    height={800} // Providing a base height for optimization
                    className={`${imageWidth} ${imageHeight} object-contain`}
                />
            )}
        </div>
    );
};

export default CardLanding;
