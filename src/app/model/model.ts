export class Item{
    id: number;
    titulo: string;
    foto: string[];
    descripcion: string;
    categoria: string;

    constructor(id: number, titulo: string, foto: string[], descripcion: string, categoria: string){
      this.id = id;
      this.titulo = titulo;
      this.foto = foto;
      this.descripcion = descripcion;
      this.categoria = categoria;
    }}