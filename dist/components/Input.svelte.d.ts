type $$ComponentProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    id?: string;
    class?: string;
    ref?: HTMLInputElement;
    [key: string]: unknown;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "ref" | "value">;
type Input = ReturnType<typeof Input>;
export default Input;
