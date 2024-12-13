<script lang="ts">
	import type { Events, Props } from './index';

	import { Button as ButtonPrimitive } from 'bits-ui';

	import { classNames } from '@/utils';

	import { buttonVariants } from './index';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];

	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
	class={classNames(buttonVariants({ variant, size, className }))}
>
	<slot />
</ButtonPrimitive.Root>
