<script lang="ts">
  interface Props {
    change: (val: string) => void;
    options: string[];
    value: string;
  }
  let { change, options, value }: Props = $props();
  
</script>

<div class="flex flex-col gap-2">
    <label
            for="class-select"
            class="text-sm font-medium text-gray-700"
    >
        Pick a 5e Character Class
    </label>

    <select
            id="class-select"
            bind:value
            on:change={() => change(value)}
            class="rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
    >
        <option value="">Select a class...</option>
        {#each options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
</div>