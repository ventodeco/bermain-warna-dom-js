const ubahwarna = document.getElementById('ubahwarna')

ubahwarna.addEventListener('click', function(){
    document.body.classList.toggle('biru-muda');
});


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

const but = document.querySelector('button');

document.body.insertBefore(tAcakWarna, but);
let a = 100;
let b = 100;
let c = 100; 
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255);
    console.log(r);
    const g = Math.round(Math.random() * 255);
    console.log(g);
    const b = Math.round(Math.random() * 255);
    console.log(b);
    document.body.style.backgroundColor = 'rgb(' + r +','+ g +',' + b + ')';



    // if(a>0 && b>0 && c>0){
    //     a = a-10;
    //     b = b-10;
    //     c = c-10;
    //     document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ','+ c + ')';
    // } else{
    //     a = 255;
    //     b = 255;
    //     c = 255;
    //     document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ','+ c + ')';
    // }
    
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    document.body.style.backgroundColor = 'rgb(' + sMerah.value +','+ sHijau.value +','+ sBiru.value +')';
});

sHijau.addEventListener('input', function(){
    document.body.style.backgroundColor = 'rgb(' + sMerah.value +','+ sHijau.value +',' + sBiru.value+')';
});

sBiru.addEventListener('input', function(){
    document.body.style.backgroundColor = 'rgb(' + sMerah.value +','+ sHijau.value +','+ sBiru.value +')';
});


document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round(event.clientX / window.innerWidth * 255);
    const yPos = Math.round(event.clientY / window.innerHeight * 255);

    document.body.style.backgroundColor = 'rgb(' + xPos +','+ yPos +',100)';
});