const ventas = [120000, 95000, 150000, 80000, 200000];

let ventaMasAlta = ventas[0];

for (const venta of ventas) {
    if (venta > ventaMasAlta) {
        ventaMasAlta = venta; 
    }
}

console.log(`La venta más alta de la semana fue: $${ventaMasAlta}`);