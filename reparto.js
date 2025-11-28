let pedidos = obtenerPedidos();
let indexActual = 0;

function mostrarPedido() {
    if (indexActual >= pedidos.length) {
        document.getElementById("repartoContainer").innerHTML =
            "<h2>No quedan pedidos</h2>";
        return;
    }

    const p = pedidos[indexActual];

    document.getElementById("repartoContainer").innerHTML = `
        <h2>${p.barrio}</h2>
        ${p.sector ? `<h3>Sector: ${p.sector}</h3>` : ""}
        <h3>Lote: ${p.lote}</h3>
        <p><b>${p.producto}</b> — Cant: ${p.cantidad}</p>
        <p>Total: $${p.precio}</p>
    `;
}

mostrarPedido();

function entregado() {
    const forma = confirm("Aceptar = Efectivo | Cancelar = Transferencia");
    pedidos[indexActual].pago = forma ? "efectivo" : "transferencia";
    pedidos[indexActual].estado = "entregado";

    guardarCambios();
    siguiente();
}

function noEstaba() {
    pedidos[indexActual].estado = "no estaba";
    
    // mover al final
    const p = pedidos[indexActual];
    pedidos.splice(indexActual, 1);
    pedidos.push(p);

    guardarCambios();
    mostrarPedido();
}

function siguiente() {
    indexActual++;
    mostrarPedido();
}

function guardarCambios() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}