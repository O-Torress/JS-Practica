let num1 = 4;
let num2 = 3;
let Operador =  prompt ("Ingrese el operador: ").toLocaleLowerCase();


if (Operador === "suma") {
  console.log(num1 + num2)
}else if (Operador === "resta") {
  console.log(num1 - num2)  

}else if (Operador === "multiplicar") {
  console.log(num1 * num2)
  
}else if (Operador === "dividir") {
  console.log(num1 / num2)
  
}else {
  console.log("Opción no validad")
}