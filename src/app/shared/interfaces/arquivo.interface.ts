export interface Arquivo {
  name?: string;
  size?: number;
  type?: string;
  upload?: Date;
  image?: string | ArrayBuffer;
}