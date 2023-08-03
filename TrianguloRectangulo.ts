export class TrianguloRectangulo{
    private base: number;
    private altura: number;

    constructor(base:number,altura:number){
        this.base = base;
        this.altura = altura;
    }

    setBase(base:number){
        this.base = base;
    }

    getBase(){
        return this.base;
    }

    setAltura(altura:number){
        this.altura = altura;
    }

    getAltura(){
        return this.altura;
    }

    calcularArea():number{
        return (this.base*this.altura)/2
    }

    calcularPerimetro():number{
        const hipotenusa = this.calcularHipotenusa()
        return this.base + this.altura + hipotenusa;
    }

    calcularHipotenusa():number{
        return Math.sqrt(this.base**2 + this.altura**2);
    }

    determinarTipoTriangulo():string{
        return "Este trinagulo rectangulo tiene dos angulos agudos (menores a 90°)"
    }
}