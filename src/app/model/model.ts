export class Foto{
    id: number;
    principal: boolean;
    titulo: string;
    foto: string;
    descripcion: string;
    categoria: string;


  constructor(
    id: number, 
    principal: boolean, 
    titulo: string, 
    foto: string, 
    descripcion: string, 
    categoria: string
) {
    this.id = id
    this.principal = principal
    this.titulo = titulo
    this.foto = foto
    this.descripcion = descripcion
    this.categoria = categoria
  }}   