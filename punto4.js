const ventas = [120000, 95000, 150000, 80000, 200000];

let totalVentas = 0;

for (const venta of ventas) {
    
    totalVentas += venta;
}

const cantidadDias = ventas.length;
const promedio = totalVentas / cantidadDias;

console.log(`El total de ventas es: $${totalVentas}`);
console.log(`El promedio de ventas de la semana es: $${promedio}`);