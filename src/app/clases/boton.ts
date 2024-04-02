export class Boton {

    public tipo: string;

    constructor() {
        this.tipo = "text";
    }

    public cambiarTipo(): void {

        if (this.tipo == "range") {
            this.tipo = "text";
            return;
        }
        if (this.tipo == "text") {
            this.tipo = "date";
            return;
        }
        if (this.tipo == "date") {
            this.tipo = "checkbox";
            return;
        }
        if (this.tipo == "checkbox") {
            this.tipo = "color";
            return;
        }
        if (this.tipo == "color") {
            this.tipo = "file";
            return;
        }
        if (this.tipo == "file") {
            this.tipo = "range";
            return;
        }
    }
}
