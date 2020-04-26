import { Serie } from './serie.interface';

export interface User{
    id:number;
    nome:string;
    cognome:string;
    username: string;
    email: string;
    password: string;
    genere: string;
    telefono:string;
    immagine:string;
    serie:Serie[];
}