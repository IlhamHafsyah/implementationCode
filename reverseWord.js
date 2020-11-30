let teks = (x) => {
    if(typeof (x) !== 'string') {
        console.log('mohon input kalimat dalam tipe data string!')
    } else {
        let pisah = x.split(" ");
        pisah.reverse();
        let reverse = pisah.join(" "); 
        console.log(reverse);
    }
}
teks("Saya Belajar Javascript");