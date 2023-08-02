import { TrianguloRectangulo } from "./TrianguloRectangulo";

//Mostrar metodos de la clase Triangulo Rectangulo
const tr = new TrianguloRectangulo(3,5);
console.log("El area es: "+tr.calcularArea())
console.log("La hipotenusa es: "+tr.calcularHipotenusa());
console.log("El perimetro es: "+tr.calcularPerimetro());
console.log(tr.determinarTipoTriangulo());