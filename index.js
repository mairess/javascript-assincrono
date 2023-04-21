/** 
 * Promise
 * 
 * A promessa de qual algo irá acontecer
 * Poderá dar certo ou errado, 
 * mas irá acontecer
**/

let aceitar = true
console.log('pedir uber')
const promessa = new Promise ((resolve, reject) => {
    if (aceitar) {
        return resolve('motorista aceitou')
    }

    return reject ('motorista cancelou')
})

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))

console.log('aguardando')