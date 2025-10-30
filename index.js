/* //Değişken Tanımı var let ve const
/*
ECMASCRIPT 6 ve sonrası için
*/

/* var adi="yusuf"
//DEĞİKEN
let yas="23"
//sabit değişken
const adres="İzmir"; */

//ECMASCRIPT 6 öncesi 
function topla(x,y){
    return x+y
}

//ECMASCRIPT 6 sonrası
//Arrow function
/* const add=(x,y)=>x+y;
let x=10
if(x==10){
    console.log("X 10'a eşittir")
} */

let total=0
for(let i=0;i<10;i++){
    total+=i
}

//var ile let arasındaki farklar
//var funciton scope - let ise block scope özelliğine sahiptir

function test(){
    if(true){
        var degisken="Merhaba"
    }
    if(true){
        console.log(degisken)
    }
}
test()


/* //Tekrar tanımlama özelliği: var ile iki tane değişken kullanabilirsin ama let ile tekrar tanımlama özelliği ortadan kaldırdı. ama ikisinde de sonradan değiştirebilirsin.
var adi="can";
var adi="ahmet";

var soyadi="uzun"
soyadi="aydin"

let adres="izmir"
adres="istanbul" */ 

//Hoisting (guvenlik acigi)
/* adi="can"
console.log(adi)

var adi; */

//Rest Operatörü
//traditional
/* function add(){
    let total=0
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total
}
console.log(add(1,2,3,4,5,6)) */

//rest

/* const add=(...args)=>{
    let total=0;
    for(let i=0;i<args.lentght;i++){
        total+=args[i]
    }
    return total;
}
console.log(add(1,2,3,4,5,6)) */

function addToCart(urun_adi,adet,fiyat){


}
addToCart("elma",2,10)
addToCart("armut",5,35)
addToCart("limon",8,65)

let urun=[{
    urunadi:"elma",
    adet:2,
    fiyat:10
},
{
    urunadi:"armut",
    adet:5,
    fiyat:35
},
{
    urunadi:"limon",
    adet:8,
    fiyat:65
}]

/* function addToCartNew(urunler){
    console.log(urunler.urunadi)
    console.log(urunler.adet)
    console.log(urunler.fiyat)
}
addToCartNew(urun[0]) */

//distracting işlemi
/* let bolgeler=["iç anadolu","marmara","karadeniz"]
console.log(bolgeler[0]) */

let [icanadolu,marmara,karadeniz]=["iç anadolu","marmara","karadeniz"]
console.log(icanadolu)

let urunler = [
  {urunler_adi: "elma", adet: 10, fiyat: 100},
  {urunler_adi: "armut", adet: 5, fiyat: 300},
  {urunler_adi: "limon", adet: 50, fiyat: 10},
]

let {urunler_adi, adet, fiyat} = urunler[1]
console.log(urunler_adi, adet, fiyat)

//filter bu ve find map çok önemli hep kullacağız

const sayilar=[1,2,3,4,5,6,7,8,9,10]
const teksayilar=sayilar.filter(sayi=>sayi%2===0);
console.log(teksayilar)

//find
const number=[1,2,3,4,5,6,7,8,9,10]
const ciftsayilar=number.find(function(sayi){
    return sayi%2===0;
}
);
console.log(ciftsayilar)


//map fonksiyonu

/* const num=[1,2,3,4,5,6]

const katSayi=num.map(num=>num*2)
console.log(katSayi)
 */

//reduce

const num = [1, 2, 3, 4, 5, 6];
const toplam = num.reduce((acc, curr) => acc + curr, 0);
console.log(toplam);


//forEach fonksiyonu

const say = [1, 2, 3, 4, 5, 6]
say.forEach(sayi => {
    console.log(sayi)
})


//hata denetimi
try{
    const result=10/0
    console.log(result)
}
catch(error){
    console.log
}

