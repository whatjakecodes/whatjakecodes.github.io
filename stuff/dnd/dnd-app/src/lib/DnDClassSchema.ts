
// Basic reference type used throughout the schema
interface APIReference {
  index: string;
  name: string;
  url: string;
}

// Equipment quantity type
interface EquipmentQuantity {
  equipment: APIReference;
  quantity: number;
}

// Choice option types
interface ChoiceOption {
  option_type: string;
  item?: APIReference;
  count?: number;
  of?: APIReference;
  choice?: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      equipment_category?: APIReference;
    };
  };
  items?: Array<{
    option_type: string;
    count: number;
    of: APIReference;
  }>;
}

// Choice set type
interface ChoiceSet {
  desc: string;
  choose: number;
  type: string;
  from: {
    option_set_type: string;
    options: ChoiceOption[];
  };
}

// Multiclassing prerequisites
interface MultiClassingPrerequisite {
  ability_score: APIReference;
  minimum_score: number;
}

// Spellcasting info section
interface SpellcastingInfo {
  name: string;
  desc: string[];
}

// Spellcasting feature
interface Spellcasting {
  level: number;
  spellcasting_ability: APIReference;
  info: SpellcastingInfo[];
}

// Main class interface
export interface DnDClass {
  index: string;
  name: string;
  hit_die: number;

  // Proficiencies and skills
  proficiency_choices: ChoiceSet[];
  proficiencies: APIReference[];
  saving_throws: APIReference[];

  // Starting equipment
  starting_equipment: EquipmentQuantity[];
  starting_equipment_options: ChoiceSet[];

  // Class features and progression
  class_levels: string;  // URL to level progression

  // Multiclassing
  multi_classing: {
    prerequisites: MultiClassingPrerequisite[];
    proficiencies: APIReference[];
  };

  // Subclasses
  subclasses: APIReference[];

  // Spellcasting (optional)
  spellcasting?: Spellcasting;
  spells?: string;  // URL to class spell list

  url: string;
}

// Schema validation type for creating new classes
export type ClassCreationSchema = Omit<DnDClass, 'url' | 'class_levels'>;

// Helper type for spellcasting classes
export type SpellcastingClass = Required<Pick<DnDClass, 'spellcasting' | 'spells'>> & DnDClass;

// Type guard to check if a class is a spellcasting class
export function isSpellcastingClass(dndClass: DnDClass): dndClass is SpellcastingClass {
  return dndClass.spellcasting !== undefined;
}


export const DnDClassSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["name", "hit_die", "proficiencies", "saving_throws", "starting_equipment"],
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the class"
    },
    "hit_die": {
      "type": "number",
      "enum": [6, 8, 10, 12],
      "description": "The hit die for the class (d6, d8, d10, or d12)"
    },
    "proficiencies": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name"],
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the proficiency"
          }
        }
      }
    },
    "saving_throws": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
      },
      "minItems": 2,
      "maxItems": 2,
      "description": "The two ability scores this class has saving throw proficiency in"
    },
    "starting_equipment": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["equipment", "quantity"],
        "properties": {
          "equipment": {
            "type": "string",
            "description": "Name of the equipment"
          },
          "quantity": {
            "type": "integer",
            "minimum": 1,
            "description": "Number of this item"
          }
        }
      }
    },
    "spellcasting": {
      "type": "object",
      "properties": {
        "ability": {
          "type": "string",
          "enum": ["INT", "WIS", "CHA"],
          "description": "The spellcasting ability for this class"
        },
        "cantrips_known": {
          "type": "integer",
          "minimum": 0,
          "description": "Number of cantrips known at 1st level"
        },
        "spells_known": {
          "type": "integer",
          "minimum": 0,
          "description": "Number of spells known at 1st level"
        },
        "spell_slots": {
          "type": "object",
          "properties": {
            "level_1": {
              "type": "integer",
              "minimum": 0,
              "description": "Number of 1st level spell slots"
            }
          }
        }
      }
    },
    "subclass": {
      "type": "string",
      "description": "The name of the subclass (if chosen at 1st level)"
    }
  }
};