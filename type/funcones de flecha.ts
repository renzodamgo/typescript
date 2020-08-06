(function () {
    let miFuncion = function (a: string) {
        return a.toUpperCase();
    };
    const miFuncionF = (a: string) => a.toUpperCase();

    const sumarN = function (a: number, b: number) {
        return a + b;
    };
    const sumarM = (a: number, b: number) => a + b;

    const hulk = {
        nombre: "hulk",
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre}, smash!!!`);
            }, 1000);
        },
    };
    hulk.smash();
})();
