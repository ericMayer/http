import { Arquivo } from './arquivo.interface';
import { Base } from './base.interface';

export interface Curso extends Base {
  nome?: string;
  descricao?: string;
  cargaHoraria?: number;
  preco?: number;
  arquivo?: Arquivo;
}