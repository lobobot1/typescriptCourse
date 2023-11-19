//readonly is a typescript feature that makes the property immutable, meaning it can’t be changed once it’s set.

export interface BaseModel{
    readonly id: string | number;
    createdAt: Date;
    updatedAt: Date;
}