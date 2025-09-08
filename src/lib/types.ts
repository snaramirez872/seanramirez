import type { ReactNode } from "react";

export interface ProjectCardProps {
    title: string;
    link: string;
    hover: string;
    children: ReactNode;
}

export interface ButtonProps {
    name: string;
    href: string;
    children?: ReactNode;
}