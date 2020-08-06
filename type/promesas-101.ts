(() => {
    console.log("Inicio");
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("se termino el Timeout");
        }, 100);
    });

    prom1
        .then((mensaje) => console.log(mensaje))
        .catch((err) => console.warn(err));

    console.log("Fin");
})();
