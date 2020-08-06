(function () {
    function activar(
        quien: string,
        objeto: string = "batiseñal",
        momento?: string
    ) {
        // El momento es opcional

        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}`);
        } else {
            console.log(`${quien} activó la ${objeto}`);
        }
    }
    activar("Gordon", "batiseñal", "tarde");
})();
