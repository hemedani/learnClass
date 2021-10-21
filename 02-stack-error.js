function ki() {
    throw new Error("Naaa !");
}

function chi() {
    ki()
}

function chera() {
    chi()
}

chera();

