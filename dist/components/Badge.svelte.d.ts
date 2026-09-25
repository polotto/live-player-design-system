import type { Snippet } from 'svelte';
type $$ComponentProps = {
    tone?: 'neutral' | 'ok' | 'paused' | 'danger' | 'accent';
    dot?: boolean;
    /** Chip look (padding + tinted rounded background) instead of plain
     * inline text - for a status pill sitting inside a busier row, where
     * bare colored text alone doesn't stand out enough. */
    pill?: boolean;
    children?: Snippet;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
