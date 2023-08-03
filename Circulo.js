export class Circulo{
    private radio: number;

    constructor(radio: number){
        this.radio = radio
    
    }
    public getRadio(): number {
    return this.radio
    }
    public setRadio(radio:number){
        this.radio = radio
    }
    hallar_area():number{
        let resultado= 3.1416 * this.radio*this.radio
        return resultado