import { Biblioteca } from './biblioteca.interface';

export interface Bibliotecas {
  results?: Biblioteca[];
  available?: number;
  total?: number;
}