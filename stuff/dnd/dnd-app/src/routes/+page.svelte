<script lang="ts">
  import type {CharacterCreatorSettings} from "$lib/types";

  let {data} = $props();
  let settings: CharacterCreatorSettings = data.settings;
</script>

<h1>Welcome to DND Characters</h1>
<p>{settings.message}</p>

<div>
    <label for="char-name">Character Name: </label>
    <input id="char-name" type="text"/>
</div>

<div>
    <label for="char-class">Class: </label>
    <select id="char-class">
        <option value="" disabled selected>Select a class</option>
        {#each settings.characterClasses as characterClass}
            <option value="{characterClass.name}">{characterClass.name}</option>
        {/each}
    </select>
</div>

