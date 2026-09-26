export { default as Button } from './components/Button.svelte';
export { default as Input } from './components/Input.svelte';
export { default as Label } from './components/Label.svelte';
export { default as Badge } from './components/Badge.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Wrap } from './components/Wrap.svelte';

// Icons - a real, centralized set (explicit user request from live-player:
// "centralizar esses ícones no Design system"), replacing that app's
// former mix of real emoji + two one-off inline SVGs for its toolbar/
// action icons. All 24x24 viewBox, stroke-based outline style by default
// (see icons/IconBase.svelte) - currentColor, so callers size/color them
// like any other icon font would.
export { default as IconSettings } from './icons/IconSettings.svelte';
export { default as IconNewProject } from './icons/IconNewProject.svelte';
export { default as IconSave } from './icons/IconSave.svelte';
export { default as IconFolderOpen } from './icons/IconFolderOpen.svelte';
export { default as IconFolder } from './icons/IconFolder.svelte';
export { default as IconPackage } from './icons/IconPackage.svelte';
export { default as IconHelp } from './icons/IconHelp.svelte';
export { default as IconRefresh } from './icons/IconRefresh.svelte';
export { default as IconSearch } from './icons/IconSearch.svelte';
export { default as IconDownload } from './icons/IconDownload.svelte';
export { default as IconVolume } from './icons/IconVolume.svelte';
export { default as IconPlay } from './icons/IconPlay.svelte';
export { default as IconPause } from './icons/IconPause.svelte';
export { default as IconNote } from './icons/IconNote.svelte';
export { default as IconSliders } from './icons/IconSliders.svelte';
