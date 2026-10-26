function parimpar(n) {
  if (n % 2 == 0) {
    return "par!";
  } else {
    return "Ímpar!";
  }
}

let resultado = parimpar(10);
console.log(resultado);
