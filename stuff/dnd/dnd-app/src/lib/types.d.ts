export interface CharacterClass {
  name: 'cleric'|'druid'|'barbarian'|'paladin'|'warlock'
}
export interface CharacterCreatorSettings {
  characterClasses: Array<CharacterClass>;
}