import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    className?: string;
}

export default function Grid({ children, className = "" }: GridProps) {
    return (
        <section className={`list-container ${className}`}>
            {children}
        </section>
    );
}