let arkFood = (harga, voucher, jarak, pajak) => {
    let ongkir = 5000 + ((jarak-2)*3000)
    console.log(`Harga         :${harga}`)
    console.log(`Biaya Antar   :${ongkir}`)
    if(voucher === 'ARKFOOD5'){
        if(harga >= 50000){
            let potongan = harga*1/2
            if(potongan <= 50000){
                console.log(`Potongan      :${potongan}`)
                if(pajak === true){
                    let ppn = harga*1/20
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                } else {
                    ppn = 0
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                }
            } else{
                potongan = 50000
                console.log(`Potongan      :${potongan}`)
                if(pajak === true){
                    let ppn = harga*1/20
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                } else {
                    ppn = 0
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                }
            }
        } else {
            potongan = 0
            console.log(`Potongan      :${potongan}`)
            if(pajak === true){
                let ppn = harga*1/20
                console.log(`Pajak         :${ppn}`)
                let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
            } else {
                ppn = 0
                console.log(`Pajak         :${ppn}`)
                let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
            }
        }
    } else if(voucher === 'DITRAKTIRDEMY'){
        if(harga >= 25000){
            let potongan = harga*3/5
            if(potongan <= 30000){
                console.log(`Potongan      :${potongan}`)
                if(pajak === true){
                    let ppn = harga*1/20
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                } else {
                    ppn = 0
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                }
            } else {
                potongan = 30000
                console.log(`Potongan      :${potongan}`)
                if(pajak === true){
                    let ppn = harga*1/20
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                } else {
                    ppn = 0
                    console.log(`Pajak         :${ppn}`)
                    let subTotal = (harga-potongan)+ongkir+ppn
                    console.log(`Sub Total     :${subTotal}`)
                }
            }
        }else {
            potongan = 0
            console.log(`Potongan      :${potongan}`)
            if(pajak === true){
                let ppn = harga*1/20
                console.log(`Pajak         :${ppn}`)
                let subTotal = (harga-potongan)+ongkir+ppn
                console.log(`Sub Total     :${subTotal}`)
            } else {
                ppn = 0
                console.log(`Pajak         :${ppn}`)
                let subTotal = (harga-potongan)+ongkir+ppn
                console.log(`Sub Total     :${subTotal}`)
            }
        }
    } else {
        potongan = 0
        console.log(`Potongan      :${potongan}`)
        if(pajak === true){
            let ppn = harga*1/20
            console.log(`Pajak         :${ppn}`)
            let subTotal = (harga-potongan)+ongkir+ppn
            console.log(`Sub Total     :${subTotal}`)
        } else {
            ppn = 0
            console.log(`Pajak         :${ppn}`)
            let subTotal = (harga-potongan)+ongkir+ppn
            console.log(`Sub Total     :${subTotal}`)
        }
        let subTotal = harga+potongan+ongkir+ppn
        console.log(`Sub Total     :${subTotal}`)
    }
}
arkFood(75000, 'ARKFOOD5', 5, true)