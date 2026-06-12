const btn = document.getElementById("calcular");

btn.addEventListener("click", () => {
    const area = Number(document.getElementById("area").value);
    const litros = Number(document.getElementById("litros").value);

    const consumo = area * litros;

    document.getElementById("resultado").textContent =
        `Consumo estimado: ${consumo} litros`;
});
