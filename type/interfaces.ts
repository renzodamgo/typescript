(() => {
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision`);
    };
    const wolverine: Xmen = {
        nombre: "Logan",
        edad: 33,
    };
    enviarMision(wolverine);
})();
