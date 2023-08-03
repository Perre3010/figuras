export class Rectagulo{
    private base:number
    private altura:number

    constructor(base:number, altura:number){
        this.base = base
        this.altura = altura
    }

    public getBase():number{
        return this.base
    }
    public getAltura():number{
        return this.altura
    }

    public setBase(base:number){
        this.base = base
    }
    public setAltura(altura:number){
        this.altura =  altura
    }

    public calculaArea(base:number, altura:number){
        return base * altura
    }
    public calcularPerimetro(base:number, altura:number){
        return 2*base + 2*altura
    }
}