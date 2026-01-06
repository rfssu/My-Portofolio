import { MotionValue } from 'framer-motion';

/**
 * Project data structure
 */
export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    features: string[];
    links: {
        demo: string | null;
        repo: string | null;
    };
}

/**
 * Dock icon component props
 */
export interface DockIconProps {
    mouseX: MotionValue<number>;
    children: React.ReactNode;
    label: string;
    onClick: () => void;
}

/**
 * Navigation link structure
 */
export interface NavigationLink {
    id: string;
    icon: React.ReactNode;
    label: string;
}

/**
 * Social link structure
 */
export interface SocialLink {
    url: string;
    icon: React.ReactNode;
    label: string;
}

/**
 * Tech stack item
 */
export interface TechStackItem {
    name: string;
    slug: string;
}
