import type { Snippet } from 'svelte';
type $$ComponentProps = {
    tone?: 'neutral' | 'ok' | 'paused' | 'danger' | 'accent';
    dot?: boolean;
    children?: Snippet;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
