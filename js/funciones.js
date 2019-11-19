array = [{ "id": 1, "imagen": "imagenes/foto1.jpg" },
{ "id": 2, "imagen": "imagenes/foto2.jpg" },
{ "id": 3, "imagen": "imagenes/foto3.jpg" },
{ "id": 4, "imagen": "imagenes/foto4.jpg" },
{ "id": 5, "imagen": "imagenes/foto5.jpg" },
{ "id": 6, "imagen": "imagenes/foto6.jpg" },
{ "id": 7, "imagen": "imagenes/foto7.jpg" },
{ "id": 8, "imagen": "imagenes/foto8.jpg" },
{ "id": 9, "imagen": "imagenes/foto9.jpg" },
{ "id": 10, "imagen": "imagenes/foto10.jpg" }];
imagenes = [1, 2, 3, 4, 5];

var posActual = 0;

function inicio() {
    for (i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (10));
    }
    posActual = 0;
    verificar();
    imprimir();
}

function imprimir() {
    console.log(imagenes);
    var texto = "<img src=" + array[imagenes[posActual]].imagen + ">";
    window.document.getElementById("imagen").innerHTML = texto;
}
function verificar() {
    if (posActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    }
    else if (posActual == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;
    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;
    }
}

function siguiente() {
    posActual++;
    verificar();
    imprimir();
}

function anterior() {
    posActual--;
    verificar();
    imprimir();
}