<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";

import { useSlideContext } from "@slidev/client";
import { computed, useTemplateRef, watch } from "vue";

const props = defineProps<{
	/**
	 * The sentence to show at each click, starting from no clicks.
	 * Wrap words in *asterisks* to emphasize them.
	 */
	steps: string[];
}>();

const { $clicks } = useSlideContext();

// Words keep their identity between steps by their letters alone, so a word
// that only changes case or punctuation moves to its new spot instead of
// fading out and back in.
const parsed = computed(() =>
	props.steps.map((step) => {
		const counts = new Map<string, number>();
		let emphasized = false;

		return step.split(" ").map((raw) => {
			const opens = raw.startsWith("*");
			const closes = raw.endsWith("*") || /\*[^\w\s]+$/.test(raw);
			const text = raw.replaceAll("*", "");
			const letters = text.toLowerCase().replaceAll(/[^\da-z]/g, "");
			const count = counts.get(letters) ?? 0;
			counts.set(letters, count + 1);

			emphasized ||= opens;
			const word = {
				emphasized,
				key: `${letters}-${String(count)}`,
				text,
			};
			emphasized &&= !closes;

			return word;
		});
	}),
);

const words = computed(
	() => parsed.value[Math.min($clicks.value, parsed.value.length - 1)],
);

// A leaving word is taken out of the flow so the others can move into its
// space, so it first needs to be pinned where it was. Positions are recorded
// before the words change: measuring during each leave would see earlier
// leaving words already gone from the flow.
const group = useTemplateRef<ComponentPublicInstance>("group");
const boxes = new WeakMap<Element, Record<string, string>>();

watch(
	words,
	() => {
		const parent: unknown = group.value?.$el;
		if (!(parent instanceof HTMLElement)) {
			return;
		}

		for (const child of parent.children) {
			if (child instanceof HTMLElement) {
				boxes.set(child, {
					height: `${String(child.offsetHeight)}px`,
					left: `${String(child.offsetLeft)}px`,
					top: `${String(child.offsetTop)}px`,
					width: `${String(child.offsetWidth)}px`,
				});
			}
		}
	},
	{ flush: "pre" },
);

function pinBeforeLeave(element: Element) {
	const box = boxes.get(element);
	if (box && element instanceof HTMLElement) {
		Object.assign(element.style, box);
	}
}
</script>

<template>
	<TransitionGroup
		ref="group"
		class="word-morph"
		name="word-morph"
		tag="h1"
		@before-leave="pinBeforeLeave"
	>
		<span
			v-for="word in words"
			:key="word.key"
			:class="{ emphasized: word.emphasized }"
			>{{ word.text }}</span
		>
	</TransitionGroup>
</template>

<style scoped>
.word-morph {
	column-gap: 0.27em;
	display: flex;
	flex-wrap: wrap;
	font-size: var(--jg-size-display);
	justify-content: center;
	line-height: 1.15;
	margin: 0 auto;
	max-width: 50rem;
	position: relative;
	row-gap: 0.05em;
}

.word-morph span {
	display: inline-block;
	white-space: nowrap;
}

.emphasized {
	color: var(--jg-squiggle);
}

.word-morph-move,
.word-morph-enter-active,
.word-morph-leave-active {
	transition:
		color var(--jg-duration-slowest) ease,
		opacity var(--jg-duration-slowest) ease,
		transform var(--jg-duration-slowest) cubic-bezier(0.2, 0.8, 0.2, 1);
}

.word-morph-enter-from,
.word-morph-leave-to {
	opacity: 0;
	transform: translateY(0.35em) scale(0.85);
}

.word-morph-leave-active {
	position: absolute;
}
</style>
