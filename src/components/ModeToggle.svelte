<script lang="ts">
	import { MoonIcon, SunIcon } from 'lucide-svelte';
	import { mode, toggleMode } from 'mode-watcher';

	import Button from '@/ui/button/button.svelte';
</script>

<Button
	title="Change theme"
	size="icon"
	variant="ghost"
	on:click={toggleMode}
	class="group opacity-80 transition-opacity duration-150 hover:opacity-100"
>
	{#if $mode === 'dark'}
		<SunIcon
			class="size-5 transition-transform duration-500 group-hover:rotate-12"
		/>
	{:else}
		<MoonIcon
			class="size-5 transition-transform duration-500 group-hover:rotate-12"
		/>
	{/if}

	<span class="sr-only">Toggle theme</span>
</Button>
