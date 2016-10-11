import { AccidentModel } from './accident.model.ts';

export interface AccidentModel {
    name: string,
    accidents: AccidentModel[];
}