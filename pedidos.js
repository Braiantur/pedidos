function guardarPedido(pedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    {
   "2025-11-28": [ lista de pedidos de ese día ],
   "2025-11-29": [ lista de pedidos de ese día ],
   "2025-11-30": [ lista del día siguiente ]
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
