<template>
  <button
    type="button"
    class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blaze-teal"
    aria-pressed="false"
    @click="$emit('click')"
  >
    <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md"></span>
    <span
      aria-hidden="true"
      :class="{ 'bg-blaze-teal': selected, 'bg-gray-200': !selected }"
      class="pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-100"
    ></span>
    <span
      aria-hidden="true"
      :class="{ 'translate-x-5': selected, 'translate-x-0': !selected }"
      class="pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-300 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-100"
    ></span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop(Boolean) selected!: boolean;
}
</script>
