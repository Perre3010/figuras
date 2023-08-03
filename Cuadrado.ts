export class Cuadrado{
    private lado: number
    constructor(lado: number){
        this.lado = lado
    }
    public getLado(): number{
        return this.lado; 
    }
    public setLado(lado: number){
        this.lado = lado
    }

    calcularArea(): number {
        return this.lado * this.lado;
      }
    calcularPerimetro(): number {
        return 4 * this.lado;
      }


}