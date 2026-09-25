type $$ComponentProps = {
    value?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    id?: string;
    class?: string;
    [key: string]: unknown;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
