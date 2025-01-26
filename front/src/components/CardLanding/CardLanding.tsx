/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";

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
            { threshold: 0.5 } 
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className={`card-container ${customClass}`}>
            {isVideo && videoSrc ? (
                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${imageWidth} ${imageHeight}`}
                />
            ) : (
                <Image
                    src={imageSrc ?? '/default-image.jpg'}
                    alt={altText}
                    width={500}  
                    height={300}
                    className={`${imageWidth} ${imageHeight}`}
                />

            )}
        </div>
    );
};

export default CardLanding;
