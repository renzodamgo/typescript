(() => {
    const retirardinero = (montoRetirar: number): Promise<number> => {
        let dineroActua = 1000;

        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActua) {
                reject("No se puede retirar, no hay suficientes fondos");
            } else {
                dineroActua -= montoRetirar;
                resolve(dineroActua);
            }
        });
    };

    retirardinero(120)
        .then((montoActual) => console.log(`Me quedan ${montoActual}`))
        .catch(console.warn);
})();
