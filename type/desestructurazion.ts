(() => {
    const avenger = {
        nombre: "Steve",
        clave: "Capita America",
        poder: "Droga",
    };

    const extraer = ({ nombre, poder }: any) => {
        console.log(nombre);

        console.log(poder);
    };

    extraer(avenger);

    const avengers: string[] = ["Thor", "Ironman", "Spiderman"];
    const [thor, , spiderman] = avengers;
    // console.log(thor);
    // console.log(spiderman);

    const extraerArr = ([thor, ironman, spiderman]: any) => {
        console.log(thor);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();
