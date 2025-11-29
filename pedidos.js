function guardarPedido(pedido) {
    // Fecha actual en formato C (28/11/2025)
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const anio = hoy.getFullYear();
    const fecha = `${dia}/${mes}/${anio}`;  // ← Formato C

    // Cargar estructura de pedidos por día
    let pedidosPorDia = JSON.parse(localStorage.getItem("pedidos")) || {};

    // Si la fecha no existe, crear la “carpeta”
    if (!pedidosPorDia[fecha]) {
        pedidosPorDia[fecha] = [];
    }

    // Agregar el pedido dentro del día correspondiente
    pedidosPorDia[fecha].push(pedido);

    // Guardar todo nuevamente
    localStorage.setItem("pedidos", JSON.stringify(pedidosPorDia));
}
}

function obtenerPedidos() {
    return JSON.parse(localStorage.getItem("pedidos")) || [];
}

function eliminarPedido(index) {
    let pedidos = obtenerPedidos();
    pedidos.splice(index, 1);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}
function guardarProductoUsado(producto) {
    let productos = JSON.parse(localStorage.getItem("productosUsados")) || [];
    
    // si no está repetido, lo agrego
    if (!productos.includes(producto)) {
        productos.push(producto);
        localStorage.setItem("productosUsados", JSON.stringify(productos));
    }

}

