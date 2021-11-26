import { Entity } from "@subql/types";
export declare class StarterEntity implements Entity {
    constructor(id: string);
    id: string;
    blockHeight: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<StarterEntity | undefined>;
    static create(record: any): StarterEntity;
}
