import {type DnDClass, DnDClassSchema} from "$lib/DnDClassSchema";

interface ClaudeAPIRequest {
  model: 'claude-3-haiku-20240307' | 'claude-3-sonnet-20240229';
  messages: Array<{
    role: string;
    content: string;
  }>;
  max_tokens: number;
}

interface ClaudeAPIResponse {
  content: Array<{
    text: string;
  }>;
}

// Function to create the system prompt
const createSystemPrompt = (schema: object) => {

  return `You are a D&D 5e character creation assistant. Generate a character class that matches the user's description, following these requirements EXACTLY:
1. Return ONLY valid JSON matching this schema: ${JSON.stringify(schema)}
2. Do not include any text before or after the JSON
3. Do not include any explanations
4. Ensure the JSON is properly formatted and can be parsed directly
5. All properties must exactly match the schema - do not add extra fields
6. Class Name field must be a single word. Instead of "Pyromaniac Solder", you might do "Pyrosoldier"`;
  // return `You are a D&D 5e character creation assistant. Given user input, create a character class that matches their description using the following JSON schema for Character Classes: ${JSON.stringify(schema)}. 
  // Return only valid JSON that matches this schema. Choose an appropriate class name based on the user's description. If the user doesn't provide enough information, make reasonable assumptions that align with D&D 5e SRD rules.`;
};

const buildRequest = (apiKey: string, schema: object, content: string) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 4096,
      system: createSystemPrompt(schema),
      messages: [
        {
          role: 'user',
          content: content
        }
      ]
    } as ClaudeAPIRequest)
  };
}

export class DnDCharacterCreator {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createCharacter(userInput: string): Promise<DnDClass> {
    try {
      const request = buildRequest(this.apiKey, DnDClassSchema, userInput);
      const response = await fetch('https://api.anthropic.com/v1/messages', request);

      if (!response.ok) {
        var errorText = await response.text();
        throw new Error(`HTTP ${response.statusText}: ${errorText}`);
      }

      const data = await response.json() as ClaudeAPIResponse;

      console.log("claude response data: ", {data})
      const characterData = JSON.parse(data.content[0].text);
      return characterData;

    } catch (error) {
      console.error('Error creating character:', error);
      throw error;
    }
  }
}



export const createClassFromDescription = async (
  description: string,
  apiKey: string
): Promise<DnDClass> => {
  const creator = new DnDCharacterCreator(apiKey);
  return await creator.createCharacter(description);
};