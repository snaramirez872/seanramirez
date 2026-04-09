import type { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface HomeButtonProps {
    linkText: string;
    url: string;
}

export interface MobileButtonProps {
    linkText: string;
    url: string;
    image_url: StaticImageData;
}

export interface PersonalProjectCardProps {
    url: string;
    techList: string;
    title: string;
    children: ReactNode;
}

export interface PositionCardProps {
    url: string;
    employer: string;
    position: string;
}

export interface NonLinkProjectCardProps {
    techList: string;
    title: string;
    children: ReactNode;
}