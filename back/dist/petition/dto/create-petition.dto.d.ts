export declare enum PetitionType {
    HEALTH = "Sanidad",
    FAMILY = "Familiar",
    SPIRITUAL = "Espiritual",
    LOSS = "Perdida",
    FORGIVENESS = "Perd\u00F3n"
}
export declare class CreatePetitionDto {
    type: PetitionType;
    description: string;
    userId: string;
}
