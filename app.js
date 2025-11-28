// Cargar barrios en el formulario
window.onload = function () {
    if (document.getElementById("barrio")) {
        cargarBarrios();
    }
};

function cargarBarrios() {
    const select = document.getElementById("barrio");
    BARRIOS.forEach(b => {
        const op = document.createElement("option");
        op.value = b.nombre;
        op.textContent = b.nombre;
        select.appendChild(op);
    });
    cargarSectoresYLotes();
}

function cargarSectoresYLotes() {
    const barrio = document.getElementById("barrio").value;
    const barrioData = BARRIOS.find(b => b.nombre === barrio);

    // Sectores
    const sectorDiv = document.getElementById("sectorDiv");
    const sectorSelect = document.getElementById("sector");

    if (barrioData.sectores === null) {
        sectorDiv.style.display = "none";
    } else {
        sectorDiv.style.display = "block";
        sectorSelect.innerHTML = "";
        barrioData.sectores.forEach(s => {
            const op = document.createElement("option");
            op.value = s;
            op.textContent = "Sector " + s;
            sectorSelect.appendChild(op);
        });
    }

    cargarLotes();
}

function cargarLotes() {
    const barrio = document.getElementById("barrio").value;
    const barrioData = BARRIOS.find(b => b.nombre === barrio);
    const loteSelect = document.getElementById("lote");
    loteSelect.innerHTML = "";

    if (barrioData.sectores === null) {
        // barrio sin sectores
        LOTES[barrio].forEach(l => {
            const op = document.createElement("option");
            op.value = l;
            op.textContent = "Lote " + l;
            loteSelect.appendChild(op);
        });
    } else {
        // barrio con sectores
        const sector = document.getElementById("sector").value;
        LOTES[barrio][sector].forEach(l => {
            const op = document.createElement("option");
            op.value = l;
            op.textContent = "Lote " + l;
            loteSelect.appendChild(op);
        });
    }
}

function guardarPedidoJS() {
    const barrio = document.getElementById("barrio").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    const lote = document.getElementById("lote").value;

    let sector = null;

    const barrioData = BARRIOS.find(b => b.nombre === barrio);
    if (barrioData.sectores !== null) {
        sector = document.getElementById("sector").value;
    }

    const pedido = {
        barrio,
        sector,
        lote,
        producto,
        cantidad,
        precio,
        estado: "pendiente",
        pago: null
    };

    // 👉 AGREGAMOS ESTA LÍNEA
    guardarProductoUsado(producto);

    guardarPedido(pedido);

    alert("Pedido guardado correctamente.");
    window.location.href = "index.html";
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}
function mostrarSugerenciasProducto() {
    let texto = document.getElementById("producto").value.toLowerCase();
    let productos = JSON.parse(localStorage.getItem("productosUsados")) || [];
    let sugerenciasFiltradas = productos.filter(p => p.toLowerCase().startsWith(texto));

    let cont = document.getElementById("sugerencias");
    cont.innerHTML = "";

    sugerenciasFiltradas.forEach(prod => {
        let opcion = document.createElement("div");
        opcion.className = "item-sugerencia";
        opcion.textContent = prod;

        opcion.onclick = () => {
            document.getElementById("producto").value = prod;
            cont.innerHTML = "";
        };

        cont.appendChild(opcion);
    });
}