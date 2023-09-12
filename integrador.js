alert("Bienvenidos al Chifa Madam Tusan, esta es su cuenta");
var presupuesto=parseInt(prompt("¿Cuanto tiene de presupuesto?"));
var entrada=parseInt(prompt("¿Cuanto cuestas la entrada?"));
var principal=parseInt(prompt("¿Cuanto cuestas el plato principal?"));
var postre=parseInt(prompt("¿Cuanto cuestas el postre?"));
var total=entrada+principal+postre;
var IGV=(total*18/100)+total;
console.log("La entrada cuesta",entrada);
console.log("El plato principal",principal);
console.log("El postre cuesta",postre);
console.log("La cuenta total cuesta",total);
console.log("El total con IGV sale",IGV);
console.log("Madam Tusan agradece su visita,vuelva pronto");
console.log("Tu vuelto es de :",(presupuesto-IGV))