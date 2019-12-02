this.periodico = ""
this.efectivoanual = ""
this.nominalanual = ""
this.valor = ""
this.muertosperi = ""
this.periodomuertoi = ""
var cambiotipo = (valor) => {
    console.log(valor)
    switch (valor) {
        case "cuotafija":
            document.getElementById("demas").innerHTML = ""
            document.getElementById("demas").innerHTML = '<div class="col">' +
                '<label>Periodo</label>' +
                '<select class="form-control" id="periodo">' +
                '<option value="30">Mensual</option>' +
                '<option value="60">Bimestral</option>' +
                '<option value="90">Trimestral</option>' +
                '</select>' +
                '</div>' +

                '<div class="col">' +
                '<label>Plazo</label>' +
                '<select class="form-control" id="plazo">' +
                '<option value="60">5</option>' +
                '<option value="72">6</option>' +
                '<option value="84">7</option>' +
                '<option value="96">8</option>' +
                '<option value="120">10</option>' +
                '</select>' +
                '</div>'

            document.getElementById("demas2").innerHTML = ''
            document.getElementById("demas2").innerHTML = '<div class="col ">' +
                '<label>Efectivo anual</label>' +
                '<div class="input-group">' +
                '<input class="form-control" type="text" id="efectivoanual" onkeydown="cambiovalores(1)">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="basic-addon2">%</span>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="col ">' +
                '<label>Nominal anual</label>' +
                '<div class="input-group">' +
                '<input class="form-control" type="text" id="nominalanual" onkeydown="cambiovalores(2)">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="basic-addon2">%</span>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="col ">' +
                '<label>Periodico</label>' +
                '<div class="input-group">' +
                '<input class="form-control" type="text" id="periodico" onkeydown="cambiovalores(3)">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="basic-addon2">%</span>' +
                '</div>' +
                '</div>' +
                '</div>'

            document.getElementById("boton").innerHTML = '<input type="button" class="btn btn-primary btn-block" value="Enviar" onclick="enviar()"> '
            break;
        case "periodomuerto":
            document.getElementById("demas").innerHTML = ""
            document.getElementById("demas").innerHTML = '<div class="col">' +
                '<label>Periodo</label>' +
                '<select class="form-control" id="periodo">' +
                '<option value="90">Trimestral</option>' +
                '<option value="180">Semestral</option>' +
                '</select>' +
                '</div>' +

                '<div class="col">' +
                '<label>Plazo</label>' +
                '<select class="form-control" id="plazo">' +
                '<option value="36">3</option>' +
                '<option value="60">5</option>' +
                '<option value="120">10</option>' +
                '</select>' +
                '</div>'

            document.getElementById("demas2").innerHTML = ''
            document.getElementById("demas2").innerHTML = '<div class="col ">' +
                '<label>Efectivo anual</label>' +
                '<div class="input-group">' +
                '<input class="form-control" type="text" id="efectivoanual" onkeydown="cambiovalores(1)" >' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="basic-addon2">%</span>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="col ">' +
                '<label>Nominal anual</label>' +
                '<div class="input-group">' +
                '<input class="form-control" type="text" id="nominalanual" onkeydown="cambiovalores(2)">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="basic-addon2">%</span>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="col ">' +
                '<label>Periodico</label>' +
                '<div class="input-group">' +
                '<input class="form-control" type="text" id="periodico" onkeydown="cambiovalores(3)">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="basic-addon2">%</span>' +
                '</div>' +
                '</div>' +
                '</div>'

            document.getElementById("demas3").innerHTML = '<label>Periodo muerto</label> <select class="form-control" id="valorperiodomuerto">' +
                '<option value="12">12 Meses</option>' +
                '<option value="18">18 Meses</option>' +
                '</select>'


            document.getElementById("boton").innerHTML = '<input type="button" class="btn btn-primary btn-block" value="Enviar" onclick="enviar()"> '
            break;
        default:
            document.getElementById("demas").innerHTML = ""
            document.getElementById("demas2").innerHTML = ""
            document.getElementById("boton").innerHTML = ""
            alert("Seleccione un tipo valido")
            break;
    }
}

var cambiovalores = (tipo) => {
    switch (tipo) {
        case 1:
            var ef = parseFloat(document.getElementById("efectivoanual").value) / 100

            console.log("efectivo anual")
            //document.getElementById("nominalanual").disabled = true;
            //document.getElementById("periodico").disabled = true;

            console.log(Math.pow((1 + ef), parseFloat(document.getElementById("periodo").value) / 360) - 1)
            var periodico = Math.pow((1 + ef), parseFloat(document.getElementById("periodo").value) / 360) - 1
            document.getElementById("periodico").value = ((Math.pow((1 + ef), parseFloat(document.getElementById("periodo").value) / 360) - 1) * 100).toFixed(2);
            this.periodico = periodico;

            document.getElementById("nominalanual").value = ((periodico * 100) * periodoscalc(document.getElementById("periodo").value)).toFixed(2);
            console.log(periodico * 100)
            this.nominalanual = periodico * periodoscalc(document.getElementById("periodo").value);
            this.efectivoanual = ef;
            break;
        case 2:
            console.log("Nominal anual")

            var periodico = (parseFloat(document.getElementById("nominalanual").value)) / periodoscalc(document.getElementById("periodo").value);
            console.log((parseFloat(document.getElementById("nominalanual").value) / 100) / periodoscalc(document.getElementById("periodo").value))
            document.getElementById("periodico").value = periodico.toFixed(2);


            console.log("valor " + periodico / 100)
            console.log(Math.pow((1 + (periodico / 100)), 360 / parseFloat(document.getElementById("periodo").value)) - 1)
            var ef = (Math.pow((1 + (periodico / 100)), 360 / parseFloat(document.getElementById("periodo").value)) - 1) * 100
            document.getElementById("efectivoanual").value = ef.toFixed(2);
            break;

        case 3:
            console.log("periodico")

            var periodico = parseFloat(document.getElementById("periodico").value)
            console.log("valor " + periodico / 100)
            var ef = (Math.pow((1 + (periodico / 100)), 360 / parseFloat(document.getElementById("periodo").value)) - 1) * 100
            document.getElementById("efectivoanual").value = ef.toFixed(2);


            var nominal = periodico * periodoscalc(document.getElementById("periodo").value)
            console.log(nominal)
            document.getElementById("nominalanual").value = nominal.toFixed(2)
            break;
        default:
            break;
    }
}
var enviar = () => {

    if (document.getElementById("tipoprestamo").value === "cuotafija") {
        this.valor = document.getElementById("valor").value;
        console.log("entrando")
        if (document.getElementById("valor").value != "" && document.getElementById("efectivoanual").value != "" && document.getElementById("nominalanual").value != "" && document.getElementById("periodico").value != "") {
            document.getElementById("cuerpo").innerHTML =



            '<div class="alert alert-info" role="alert"> Valor: '+document.getElementById("valor").value+'\n Interes(ip): ' +this.periodico+
            '</div><br>'+
                '<table class="table table-dark" id="tabla">' +
                '<thead>' +
                '<tr>' +
                '<th scope="col">#</th>' +
                '<th scope="col">Fecha</th>' +
                '<th scope="col">Saldo Capital</th>' +
                '<th scope="col">Amorti Capital</th>' +
                '<th scope="col">Amorti Intereses</th>' +
                '<th scope="col">Cuota fija</th>' +
                '<th scope="col">Flujo de caja</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody id="tablabody">' +
                '</tbody>' +
                +'</table>'


            document.getElementById("botonpdf").innerHTML = '<input type="button" class="btn btn-primary btn-block" value="Enviar" onclick="generarPDF()"> '
            console.log("efectivo anual " + this.efectivoanual);
            console.log("nominal anual " + this.nominalanual);
            console.log("periodico (ip)" + this.periodico);
            console.log("periodo: " + parseInt(document.getElementById("periodo").value))
            var temporalanualidad1 = Math.pow((1 + this.periodico), parseInt(document.getElementById("plazo").value) * periodoscalc(document.getElementById("periodo").value) / 12) * this.periodico
            var temporalanualidad2 = Math.pow((1 + this.periodico), parseInt(document.getElementById("plazo").value) * periodoscalc(document.getElementById("periodo").value) / 12) - 1
            var anualidad = parseInt(this.valor) * (temporalanualidad1 / temporalanualidad2)
            console.log(anualidad + "anualidaddd")
            var fecha = new Date();
            for (var i = 0; i < parseInt(document.getElementById("plazo").value) * periodoscalc(document.getElementById("periodo").value) / 12 + 1; i++) {
                if (i === 0) {
                    document.getElementById("tablabody").innerHTML = '<tr>' +
                        '<th scope="row">' + i + '</th>' +
                        '<td>' + fecha.toISOString().split('T')[0] + '</td>' +
                        '<td>' + this.valor + '</td>' +
                        '<td>---------</td>' +
                        '<td>---------</td>' +
                        '<td>---------</td>' +
                        '<td>' + this.valor + '</td>' +
                        '</tr>'
                } else {
                    fecha.setMonth(fecha.getMonth() + periodoscalc2(document.getElementById("periodo").value))
                    document.getElementById("tablabody").innerHTML += '<tr>' +
                        '<th scope="row">' + i + '</th>' +
                        '<td>' + fecha.toISOString().split('T')[0] + '</td>' +
                        '<td>' + (this.valor - (anualidad - (this.valor * this.periodico))).toFixed(2) + '</td>' +
                        '<td>' + (anualidad - (this.valor * this.periodico)).toFixed(2) + '</td>' +
                        '<td>' + (this.valor * this.periodico).toFixed(2) + '</td>' +
                        '<td>' + anualidad.toFixed(2) + '</td>' +
                        '<td>' + anualidad.toFixed(2) + '</td>' +
                        '</tr>'
                    this.valor = (this.valor - (anualidad - (this.valor * this.periodico)))
                }
            }
        } else {
            alert("Debe ingresar algun interes");

        }
    } else {
        console.log("periodo muerto")
        this.valor = document.getElementById("valor").value;
        console.log("entrando")
        var fecha = new Date();
        if (document.getElementById("valor").value != "" && document.getElementById("efectivoanual").value != "" && document.getElementById("nominalanual").value != "" && document.getElementById("periodico").value != "") {
            document.getElementById("cuerpo").innerHTML = 
            '<div class="alert alert-info" role="alert"> Valor: '+document.getElementById("valor").value+'\n Interes(ip): ' +this.periodico+
            '</div><br>'+
            '<table class="table table-dark" id="tabla">' +
                '<thead>' +
                '<tr>' +
                '<th scope="col">#</th>' +
                '<th scope="col">Fecha</th>' +
                '<th scope="col">Saldo Capital</th>' +
                '<th scope="col">Amorti Capital</th>' +
                '<th scope="col">Amorti Intereses</th>' +
                '<th scope="col">Flujo de caja</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody id="tablabody">' +
                '</tbody>' +
                +'</table>'

            document.getElementById("botonpdf").innerHTML = '<input type="button" class="btn btn-primary btn-block" value="Generar pdf" onclick="generarPDF()"> '

            console.log("efectivo anual " + this.efectivoanual);
            console.log("nominal anual " + this.nominalanual);
            console.log("periodico (ip)" + this.periodico);

            for (var i = 0; i < parseInt(document.getElementById("plazo").value) * periodoscalc(document.getElementById("periodo").value) / 12 + 1; i++) {
                if (i === 0) {
                    document.getElementById("tablabody").innerHTML = '<tr>' +
                        '<th scope="row">' + i + '</th>' +
                        '<td>' + fecha.toISOString().split('T')[0] + '</td>' +
                        '<td>' + this.valor + '</td>' +
                        '<td>---------</td>' +
                        '<td>---------</td>' +
                        '<td>' + this.valor + '</td>' +
                        '</tr>'
                } else {
                    for (var j = 0; j < rango(1, parseInt(document.getElementById("valorperiodomuerto").value) * periodoscalc(document.getElementById("periodo").value) / 12).length + 1; j++) {
                        if (i === j) {
                            var valorintereses = parseFloat(this.valor) + (this.valor * this.periodico);
                            fecha.setMonth(fecha.getMonth() + periodoscalc2(document.getElementById("periodo").value))
                            document.getElementById("tablabody").innerHTML += '<tr>' +
                                '<th scope="row">' + i + '</th>' +
                                '<td>' + fecha.toISOString().split('T')[0] + '</td>' +
                                '<td>' + parseFloat(valorintereses).toFixed(2) + '</td>' +
                                '<td> -------------</td>' +
                                '<td>' + (this.valor * this.periodico).toFixed(2) + '</td>' +
                                '<td> -------------</td>' +
                                '</tr>'
                            this.valor = valorintereses;
                            this.muertosperi = (parseInt(document.getElementById("plazo").value) * periodoscalc(document.getElementById("periodo").value) / 12 + 1) -j -1;
                            this.periodomuertoi = j;
                        }
                    }
                }
            }


            this.cuotafija = (parseFloat(this.valor) / (this.muertosperi));
            for (var i = this.periodomuertoi +1; i < parseInt(document.getElementById("plazo").value) * periodoscalc(document.getElementById("periodo").value) / 12 + 1; i++) {
                fecha.setMonth(fecha.getMonth() + periodoscalc2(document.getElementById("periodo").value))
                document.getElementById("tablabody").innerHTML += '<tr>' +
                    '<th scope="row">' + i + '</th>' +
                    '<td>' + fecha.toISOString().split('T')[0] + '</td>' +
                    '<td>' + (parseFloat(this.valor) - (parseFloat(this.valor) / this.muertosperi)).toFixed(2) + '</td>' +
                    '<td>' + this.cuotafija.toFixed(2) + '</td>' +
                    '<td>' + (this.valor * this.periodico).toFixed(2) + '</td>' +
                    '<td>' + ((parseFloat(this.valor) * this.periodico) + parseFloat(this.cuotafija)).toFixed(2)+ '</td>' +
                    '<tr>'
                    
                this.valor = (parseFloat(this.valor) - this.cuotafija)

            }

        } else {
            alert("Debe ingresar algun interes");

        }



    }
}






var periodoscalc = (numero) => {
    switch (numero) {
        case "30":
            return 12;
            break;
        case "60":
            return 6;
            break;
        case "90":
            return 4;

            break;
        case "180":
            return 2;
            break;
        default:
            break;
    }
}


var periodoscalc2 = (numero) => {
    switch (numero) {
        case "30":
            return 1;
            break;
        case "60":
            return 2;
            break;
        case "90":
            return 3;

            break;
        case "180":
            return 6;
            break;
        default:
            break;
    }
}

function rango(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function generarPDF() {
    const element = document.getElementById("cuerpo");
    html2pdf()
        .from(element)
        .set({jsPDF:{ unit: 'in', format: 'letter', orientation: 'l' }})
        .save();
}