const nombre = alert("Bienvenido a ART + DESING")

const mensajeConsulta= "Ingrese el codigo del producto a consultar:\n" +
                        "1) Flowers in a Vase Print\n" +
                        "2) Sunflowers Print\n" +
                        "3) The Virgin of the Rocks Print\n" +
                        "4) Portrait of a Man Print\n" +
                        "5) The Fighting Temeraire Print\n" +
                        "6) Venice: The Grand Canal with S. Simeone Pccolo Mini Print\n" +
                        "7) The Triumph of Pan Print\n" +
                        "8) A Regatta on the Grand Canal Print\n" +
                        "9) Bathers at Asnières Print\n" +
                        "10) Penelope with the Suitors\n" +
                        "11) Ruth in Boaz's Field\n" +
                        "12) Self Portrait as Saint Catherine of Alexandria Print"

function descontar(precioBase)  {
    if (precioBase > 4500) {
        let descuento = precioBase * 20 / 100
        let precioFinal = precioBase - descuento
        alert(`Descuento del 20% aplicado al precio final: $${precioFinal}`)
    } else{
        alert("No se ha encontrado ningun descuento aplicable")
    }
}                      

function consultarPrecios() {
    let elegir = parseInt(prompt(mensajeConsulta))
    if(elegir === "") {
        alert("Debe elegir un producto, porfavor!")
    } else {
        let precioBase
        switch(elegir) {
            case 1:
                precioBase = 5000
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 2:
                precioBase = 3700
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 3:
                precioBase = 6200
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 4:
                precioBase = 4900
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 5:
                precioBase = 3500
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 6:
                precioBase = 8000
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 7:
                precioBase = 3200
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 8:
                precioBase = 5600
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 9:
                precioBase = 5000
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 10:
                precioBase = 3700
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 11:
                precioBase = 6700
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            case 12:
                precioBase = 6500
                consultaPrecio = `Precio final(+IVA): $${precioBase}`
                break
            default:
                consultaPrecio = "No se encuentran datos disponibles para el codigo seleccionado."
                break
        }
        alert(consultaPrecio)
        descontar(precioBase)
    }
}

consultarPrecios()

const repetir = confirm("¿Desea consultar otros precios?")
    while(repetir) {
        consultarPrecios()
        break
    }