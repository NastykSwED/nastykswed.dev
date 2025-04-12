<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	import { experiences } from '@/data';
	import Badge from '@/ui/badge/badge.svelte';
	import {
		classNames,
		formatExperienceDate,
		getExperienceDuration,
	} from '@/utils';
</script>

<section class="flex flex-col space-y-4" data-animate data-animate-speed="slow">
	<div class="flex flex-col space-y-4">
		<h2 class="text-xl font-medium">Experience</h2>
	</div>

	<ol
		aria-label="Work experience timeline"
		class="relative space-y-6 border-s-2 border-neutral-300 dark:border-neutral-800"
	>
		{#each experiences as experience}
			<li class="ms-5 mt-1">
				<div
					class={classNames(
						'absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800',
					)}
				></div>

				<div class="flex items-center gap-2">
					<time
						aria-label={`From ${formatExperienceDate(experience.startDate)} to ${experience.endDate ? formatExperienceDate(experience.endDate) : 'Present'}`}
						class="text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400"
					>
						{formatExperienceDate(experience.startDate)} - {experience.latest ||
						!experience.endDate
							? 'Present'
							: formatExperienceDate(experience.endDate)}
					</time>

					<Badge class="px-2 py-0.5">
						{getExperienceDuration({
							startDate: experience.startDate,
							endDate: experience.endDate,
						})}
					</Badge>
				</div>

				<div class="mt-2 flex flex-col space-y-0.5">
					<h3
						class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
					>
						{experience.role}
					</h3>

					{#if experience.companyUrl}
						<a
							aria-label={`Visit ${experience.company} website`}
							href={experience.companyUrl}
							target="_blank"
							rel="noopener"
							class="group flex w-max items-center text-pretty text-sm text-neutral-600 transition-colors duration-150 hover:text-black dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
						>
							<span>{experience.company}</span>
							<ArrowUpRight
								class="ml-1 size-3 duration-150 group-hover:translate-x-[1.5px]"
							/>
						</a>
					{:else}
						<span
							class="text-pretty text-sm text-neutral-600 dark:text-neutral-400"
						>
							{experience.company}
						</span>
					{/if}
				</div>

				<p class="mt-3 text-pretty text-sm dark:text-neutral-400">
					{experience.aboutRole}
				</p>

				{#if experience.technologies}
					<div class="mt-3 flex flex-wrap gap-1.5">
						{#each experience.technologies as tech}
							<Badge>
								{tech}
							</Badge>
						{/each}
					</div>
				{/if}
			</li>
		{/each}
	</ol>
</section>
