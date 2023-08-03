export class Rombo{
    private diagonalMayor:number
    private diagonalMenor:number
    private lado:number

    constructor(diagonalMayor:number, diagonalMenor:number, lado:number){
        this.diagonalMayor = diagonalMayor
        this.diagonalMenor = diagonalMenor
        this.lado = lado
    }

    public getDiagonaMayor():number{
        return this.diagonalMayor
    }
    public getDiagonalMenor():number{
        return this.diagonalMenor
    }
    public getLado():number{
        return this.lado
    }

    public setDiagonalMayor(diagonalMayor:number){
        this.diagonalMayor = diagonalMayor
    }
    public setDiagonalMenor(diagonalMenor:number){
        this.diagonalMenor = diagonalMenor
    }
    public setLado(lado:number){
        this.lado = lado
    }

    calcularArea():number{
        return (this.diagonalMayor * this.diagonalMenor)/2
    }
    calcularPerimetro():number{
        return 4 * this.lado
    }
}