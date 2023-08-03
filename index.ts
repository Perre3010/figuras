
import { Cuadrado } from "./Cuadrado";
const miCuadrado = new Cuadrado(9);
  console.log("area del cuadrado:", miCuadrado.calcularArea());
  console.log("perimetro del cuadrado:", miCuadrado.calcularPerimetro());
import { TrianguloRectangulo } from "./TrianguloRectangulo";

//Mostrar metodos de la clase Triangulo Rectangulo
const tr = new TrianguloRectangulo(3,5);
console.log("El area es: "+tr.calcularArea())
console.log("La hipotenusa es: "+tr.calcularHipotenusa());
console.log("El perimetro es: "+tr.calcularPerimetro());
console.log(tr.determinarTipoTriangulo());
