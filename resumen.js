function cargarResumen() {
    const contDias = document.getElementById("lista-dias");
    const contDetalle = document.getElementById("detalle-dia");

    let pedidosPorDia = JSON.parse(localStorage.getItem("pedidos")) || {};

    // Obtener lista de fechas
    let fechas = Object.keys(pedidosPorDia).sort((a, b) => {
        // Orden descendente (hoy arriba)
        const [diaA, mesA, anioA] = a.split('/').map(Number);
        const [diaB, mesB, anioB] = b.split('/').map(Number);
        const fechaA = new Date(anioA, mesA - 1, diaA);
        const fechaB = new Date(anioB, mesB - 1, diaB);
        return fechaB - fechaA;
    });

    // Render “carpetas”
    contDias.innerHTML = "";
    fechas.forEach(fecha => {
        const div = document.createElement("div");
        div.className = "carpeta-dia";
        div.textContent = `📁 ${fecha}`;
        div.onclick = () => mostrarDetalleDeDia(fecha);
        contDias.appendChild(div);
    });

    function mostrarDetalleDeDia(fecha) {
        let pedidos = pedidosPorDia[fecha];

        let html = `<h2>Pedidos del ${fecha}</h2>`;
        html += `<ul>`;

        pedidos.forEach(p => {
            html += `
                <li>
                    <strong>${p.barrio}</strong> 
                    ${p.sector ? " - Sector " + p.sector : ""} 
                    - Lote ${p.lote}  
                    <br>Producto: ${p.producto}
                    <br>Cantidad: ${p.cantidad}
                    <br>Precio: $${p.precio}
                    <br>Estado: ${p.estado} 
                    ${p.pago ? " - Pago: " + p.pago : ""}
                </li><br>`;
        });

        html += `</ul>`;

        contDetalle.innerHTML = html;
    }
}

cargarResumen();
