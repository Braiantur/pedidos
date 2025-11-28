const pedidosR = obtenerPedidos();

let total = 0;
let efec = 0;
let trans = 0;
let noEnt = [];

pedidosR.forEach(p => {
    if (p.estado === "entregado") {
        total += parseFloat(p.precio);

        if (p.pago === "efectivo") efec += parseFloat(p.precio);
        if (p.pago === "transferencia") trans += parseFloat(p.precio);

    } else if (p.estado === "no estaba") {
        noEnt.push(p);
    }
});

document.getElementById("resumen").innerHTML = `
    <h2>Total vendido: $${total}</h2>
    <p>Efectivo: $${efec}</p>
    <p>Transferencia: $${trans}</p>

    <h3>Pendientes:</h3>
    ${noEnt.map(p => `
        <p>${p.barrio} - Lote ${p.lote}</p>
    `).join("")}
`;