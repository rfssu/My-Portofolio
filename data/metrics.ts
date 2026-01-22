import { Eye, Zap, Code2, Activity, TrendingUp, Star, LucideIcon } from 'lucide-react';

export interface MetricItem {
    label: string;
    value: string;
    icon: LucideIcon;
    trend: string;
    color: string;
}

/**
 * Portfolio performance metrics displayed in MetricsDashboard
 */
export const portfolioMetrics: MetricItem[] = [
    { label: 'Portfolio Visitors', value: '2.5K+', icon: Eye, trend: '+24% this month', color: 'text-blue-500' },
    { label: 'Performance Score', value: '98/100', icon: Zap, trend: 'Lighthouse', color: 'text-green-500' },
    { label: 'Active Projects', value: '12+', icon: Code2, trend: 'Production ready', color: 'text-indigo-500' },
];

/**
 * Professional impact metrics displayed in MetricsDashboard
 */
export const professionalMetrics: MetricItem[] = [
    { label: 'Years Experience', value: '3+', icon: Activity, trend: 'Full-stack dev', color: 'text-purple-500' },
    { label: 'Tech Stack', value: '15+', icon: TrendingUp, trend: 'Technologies', color: 'text-orange-500' },
    { label: 'Certifications', value: '2', icon: Star, trend: 'BNSP & Certiport', color: 'text-yellow-500' },
];
