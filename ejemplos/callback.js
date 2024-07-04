
function uno (dos) {
    console.log("uno")
    setTimeout(dos,200)
}

function dos (tres) {
    console.log("dos")
    setTimeout(tres,200)
}

function tres (cuatro) {
    console.log("tres")
    setTimeout(cuatro,200)
}

function cuatro (cinco) {
    console.log("cuatro")
    setTimeout(cinco,200)
}

function cinco () {
    console.log("cuatro")
}

setTimeout(()=> uno(dos),5000)

//callback hell
