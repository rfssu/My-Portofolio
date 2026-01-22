import { LucideIcon } from 'lucide-react';

/**
 * Career/Work Experience Item
 */
export interface CareerItem {
    id: string;
    period: string;
    title: string;
    company: string;
    location: string;
    description: string;
}

/**
 * Education Item
 */
export interface EducationItem {
    degree: string;
    institution: string;
}

/**
 * Certification Item
 */
export interface CertificationItem {
    title: string;
    issuer: string;
    year: string;
}

/**
 * Award/Honor Item
 */
export interface AwardItem {
    title: string;
    organization: string;
    year: string;
    description: string;
}

// ===========================================
// Career Data
// ===========================================
export const careers: CareerItem[] = [
    {
        id: 'career-1',
        period: '2024 — Present',
        title: 'Full-Stack Developer',
        company: 'Quadrant Co.',
        location: 'Project-based',
        description: 'Collaborated within a specialized IT team to architect and deliver high-performance web solutions.'
    },
    {
        id: 'career-2',
        period: '2024 — Present',
        title: 'Game Developer & Designer',
        company: 'Ourmind Studio',
        location: 'Personal Project',
        description: 'Independent game conceptualization and technical implementation of gameplay mechanics.'
    },
    {
        id: 'career-3',
        period: 'Oct 2024 — Feb 2025',
        title: 'Program Development',
        company: 'PT Surya Citra Media',
        location: 'Jakarta',
        description: 'Assisted in strategic program planning and creative development for major media content.'
    },
    {
        id: 'career-4',
        period: 'Feb 2023 — Jun 2023',
        title: 'Research & Development',
        company: 'NET MEDIA TAMA TELEVISI',
        location: 'Jakarta',
        description: 'Conducted comprehensive research on industry trends to identify audience preferences.'
    }
];

// ===========================================
// Education Data
// ===========================================
export const education: EducationItem = {
    degree: 'Bachelor of Information Technology',
    institution: 'Universitas Muhammadiyah Yogyakarta'
};

// ===========================================
// Certifications Data
// ===========================================
export const certifications: CertificationItem[] = [
    {
        title: 'Web Developer (BNSP)',
        issuer: 'National Prof. Certification',
        year: '2024'
    },
    {
        title: 'IT Specialist - Software Dev',
        issuer: 'Certiport',
        year: '2024'
    }
];

// ===========================================
// Awards Data
// ===========================================
export const awards: AwardItem[] = [
    {
        title: 'Top 3 The Gade Sociopreneurship',
        organization: 'PT. Pegadaian',
        year: '2023',
        description: 'Developed an innovative business solution with the Inclue Indonesia team.'
    },
    {
        title: 'Business Acumen Program',
        organization: 'Tanoto Foundation',
        year: '2022',
        description: 'Selected as a finalist in a prestigious future business leaders program.'
    }
];
