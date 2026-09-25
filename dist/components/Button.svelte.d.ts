import type { Snippet } from 'svelte';
type $$ComponentProps = {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    title?: string;
    class?: string;
    children?: Snippet;
    [key: string]: unknown;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
