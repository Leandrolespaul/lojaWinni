const validaTel = (tel) => {
    let regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
    if (regex.test(tel) === true) {
        return tel
    } else {
        return tel = "Telefone inválido."
    }
}


export default validaTel 
