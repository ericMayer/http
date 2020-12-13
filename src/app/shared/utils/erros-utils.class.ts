import { Error } from '../interfaces/error.interface';

export class ErrosUtils {
  
  static checkError(erros: Error[], field: string): boolean {
    return erros.some((erro: Error) => 
      erro.field.toLowerCase() !== field.toLowerCase()
    );
  }

  static removeError(erros: Error[], field: string): Error[] {
    return erros.filter((error: Error) => error.field.toLowerCase() !== field.toLowerCase());
  }

  static getErrorMessage(erros: Error[], field: string): string {
    return erros.filter((error: Error) => error.field.toLowerCase() === field.toLowerCase()).map((error) => error.message).toString();
  }
}