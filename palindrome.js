balik = ""
let input = (teks) => {
    if(typeof (teks) !== 'string'){
        console.log('tipe data harus berupa string !')
    } else {
        teks = teks.toLowerCase()
        for(let i = teks.length-1; i >= 0; i--){
        balik = balik + teks[i]
        }
        if(balik === teks){
        return console.log(`${teks} adalah palindrome`)
        } else{ return console.log(`${teks} bukan palindrome`)
        }
    }
}
input("Malam")