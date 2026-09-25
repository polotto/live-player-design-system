import type { Snippet } from 'svelte';
type $$ComponentProps = {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    title?: string;
    /** Renders an <a> instead of a <button> - for a CTA that navigates
     * (the site's "Abrir no navegador", say) rather than acting in
     * place. Same classes/look either way. */
    href?: string;
    class?: string;
    ref?: HTMLButtonElement | HTMLAnchorElement;
    children?: Snippet;
    [key: string]: unknown;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "ref">;
type Button = ReturnType<typeof Button>;
export default Button;
