<script lang="ts">
  import {createClassFromDescription} from "$lib/CharacterCreatorClient";

  let createdClassName = 'Warlock';
  let apiKey = '';
  let userInput = '';
  let loading = false;
  let errorMessage = '';

  async function handleSubmit() {
    loading = true;
    errorMessage = '';
    try {
      const createdClass = await createClassFromDescription(userInput, apiKey);
      createdClassName = createdClass.name;
    } catch (e) {
      if (e instanceof Error) {
        errorMessage = e.message;
      }
    } finally {
      loading = false;
    }
  }

</script>

<h1>Create a DND Char</h1>

<div>
    <label for="char-name">Character Name: </label>
    <input
            id="char-name"
            type="text"
    />
</div>
<div>
    <label for="char-class">Class: </label>
    <input
            id="char-class"
            type="text"
            bind:value={createdClassName}
    />
</div>

<hr/>

<form on:submit|preventDefault={handleSubmit}>

    <div>
        <label for="apiKey">API Key:</label>
        <input
                type="password"
                id="apiKey"
                bind:value={apiKey}
                placeholder="Enter your Anthropic API key"
        >
    </div>

    <div>
        <label for="message">Describe your character:</label>
        <textarea
                id="message"
                bind:value={userInput}
                rows="4"
                placeholder="Enter a character class description"
        ></textarea>
    </div>

    <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Generate Class'}
    </button>

    {#if errorMessage.trim().length > 0}
        <b>Error: {errorMessage}</b>
    {/if}
</form>

