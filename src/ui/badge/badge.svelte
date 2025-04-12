<script lang="ts">
	import { classNames } from '@/utils';

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className, children }: Props = $props();
</script>

<span
	class={classNames(
		'inline-flex cursor-default items-center space-x-2 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300',
		className,
	)}
>
	{@render children?.()}
</span>
