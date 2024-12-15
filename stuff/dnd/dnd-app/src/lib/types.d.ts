export interface CharacterClass {
  name: 'cleric'|'druid'|'barbarian'|'paladin'
}
export interface CharacterCreatorSettings {
  characterClasses: Array<CharacterClass>;
  message: string;
}