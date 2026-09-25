import type { Snippet } from 'svelte';
type $$ComponentProps = {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    title?: string;
    class?: string;
    ref?: HTMLButtonElement;
    children?: Snippet;
    [key: string]: unknown;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "ref">;
type Button = ReturnType<typeof Button>;
export default Button;
