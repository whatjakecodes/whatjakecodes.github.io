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

<div class="min-h-screen p-4 md:p-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
        <!-- Main container with responsive layout -->
        <div class="flex flex-col lg:flex-row lg:gap-12">
            <!-- Left side content -->
            <div class="lg:w-1/2 mb-8 lg:mb-0">
                <h1 class="text-3xl font-bold mb-8 text-gray-800">Create a D&D Character</h1>

                <div class="space-y-6">
                    <div class="flex flex-col gap-2">
                        <label for="char-name" class="text-sm font-medium text-gray-700">
                            Character Name
                        </label>
                        <input
                                id="char-name"
                                type="text"
                                class="rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="char-class" class="text-sm font-medium text-gray-700">
                            Class
                        </label>
                        <input
                                id="char-class"
                                type="text"
                                bind:value={createdClassName}
                                class="rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>

            <!-- Right side form -->
            <div class="lg:w-1/2">
                <form
                        on:submit|preventDefault={handleSubmit}
                        class="bg-white rounded-xl shadow-md p-6"
                >
                    <div class="space-y-6">
                        <div class="flex flex-col gap-2">
                            <label for="apiKey" class="text-sm font-medium text-gray-700">
                                API Key
                            </label>
                            <input
                                    type="password"
                                    id="apiKey"
                                    bind:value={apiKey}
                                    placeholder="Enter your Anthropic API key"
                                    class="rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="message" class="text-sm font-medium text-gray-700">
                                Describe your character
                            </label>
                            <textarea
                                    id="message"
                                    bind:value={userInput}
                                    rows="4"
                                    placeholder="Enter a character class description"
                                    class="rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        <button
                                type="submit"
                                disabled={loading}
                                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            {loading ? 'Sending...' : 'Generate Class'}
                        </button>

                        {#if errorMessage.trim().length > 0}
                            <div class="text-red-600 font-medium bg-red-50 p-4 rounded-lg">
                                Error: {errorMessage}
                            </div>
                        {/if}
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
