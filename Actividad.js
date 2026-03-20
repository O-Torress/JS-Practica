let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let Operador =  prompt ("Ingresa el operador (suma/resta/multiplicar/dividir): ").toLocaleLowerCase();


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