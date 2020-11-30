let divideAndSort = (input) => {
    if(typeof(input) !== 'number'){
        console.log('Inputan harus bertipe data number!')
    } else {
        console.log(`input  : ${input}`)
        let convert = input.toString()
        let separate = convert.split(0)
        // console.log(separate)
        separate = separate.map((element) => {
            return element.split('')
        })
        // console.log(separate)
        let sorting = separate.map((element) => {
            return element.sort(function(a, b){return a-b})
        })
        // console.log(sorting)
        let gabung = sorting.map((element) => {
            return element.join('')
        })
        // console.log(gabung)
        let result = gabung.join('')
        console.log(`output : ${result}`)
        // let sorting = hasil.sort(function(a, b){return a-b})
       // console.log(sorting)
    }
}
divideAndSort(5530289035780995)