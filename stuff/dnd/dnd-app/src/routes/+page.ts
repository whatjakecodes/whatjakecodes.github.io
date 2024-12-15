import type {CharacterCreatorSettings} from '$lib/types';

export const load = (() => {
  const settings: CharacterCreatorSettings = {
    characterClasses: [
      {name: 'cleric'},
      {name: 'druid'},
      {name: 'paladin'}],
    message: 'Welcome to Jake\'s character creator'
  };

  return {
    settings,
  };
});
