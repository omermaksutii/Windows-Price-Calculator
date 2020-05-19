"use strict";
var Height, Width, bHeight, bWidth, pHeight, pWidth, nHeight, nWidth, tHeight, tWidth;
var Length;
var price = 0.0025;
var aPrice = 0.0127;
var currentCity = "";
var ineed;
var tLength;
var tPrice = 0.012;
var hPrice = 0.0065;
var vekaPrice;
var brands;
var i, tabcontent, tablinks;
var priceOne;
var Width, hLength, hPrice;
var convertedHeight, convertedWidth;
var priceBrand;
var valAm;
/*---------------------tab---------------------------------*/

function brandPriceFunction(value) {

    brands = value.value;
    if (brands == "Euro Standart") {


        price = 0.0025;
        if (currentCity == "London") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "0 $";
            totalResult(priceBrand);
        } else if (currentCity == "Berlin") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "250 $";
            totalResult(priceBrand);
        } else if (currentCity == "Paris") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "475 $";
            totalResult(priceBrand);
        } else if (currentCity == "Newyork") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "425 $";
            totalResult(priceBrand);
        } else if (currentCity == "Tokyo") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "617 $";
            totalResult(priceBrand);
        }

    } else if (brands == "Veka") {
        price = 0.004;
        if (currentCity == "London") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "200 $";
            totalResult(priceBrand);
        } else if (currentCity == "Berlin") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "400 $";
            totalResult(priceBrand);
        } else if (currentCity == "Paris") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "760 $";
            totalResult(priceBrand);
        } else if (currentCity == "Newyork") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "680 $";
            totalResult(priceBrand);
        } else if (currentCity == "Tokyo") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "671 $";
            totalResult(priceBrand);
        }

    } else if (brands == "Fornax") {
        price = 0.005;
        if (currentCity == "London") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "250 $";
            totalResult(priceBrand);
        } else if (currentCity == "Berlin") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "500 $";
            totalResult(priceBrand);
        } else if (currentCity == "Paris") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "950 $";
            totalResult(priceBrand);
        } else if (currentCity == "Newyork") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "850 $";
            totalResult(priceBrand);
        } else if (currentCity == "Tokyo") {
            priceBrand = document.getElementById("onlyWindowPrice").innerHTML = "1,235 $";
            totalResult(priceBrand);
        }
    }
}



function openCity(evt, cityName) {

    tabcontent = document.getElementsByClassName("tabcontent");

    var x = document.querySelectorAll(".olloo");

    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" olloo", "");
    }

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).classList.add("olloo");



    evt.currentTarget.className += " active";

    if (cityName == 'London') {
        document.getElementById('resultPhoto').src = "assets/images/1window/g.jpg";
        currentCity = "London";
        resultWindowPrice("1000", "500", price)
        var amalgPrice = document.getElementById('amalgaaPrice').innerHTML = "21 $";
        totalResultAmalgaa(amalgPrice);
        var tawP = document.getElementById('tawtsanPrice').innerHTML = "12 $";
        totalResultTawtsan(tawP);
        var haylP = document.getElementById('haylagaPrice').innerHTML = "7 $";
        totalResultHaylaga(haylP);
        document.getElementById('tawtsan-slider').value = 20;
        document.getElementById('amalgaa-slider').value = 20;
        document.getElementById('haylaga-slider').value = 20;

    } else if (cityName == 'Berlin') {
        document.getElementById('resultPhoto').src = "assets/images/2window/g_g.jpg";
        currentCity = "Berlin";
        resultWindowPrice("1000", "1000", price)
        var amalgPrice = document.getElementById('amalgaaPrice').innerHTML = "55 $";
        totalResultAmalgaa(amalgPrice);
        var tawP = document.getElementById('tawtsanPrice').innerHTML = "24 $";
        totalResultTawtsan(tawP);
        var haylP = document.getElementById('haylagaPrice').innerHTML = "13 $";
        totalResultHaylaga(haylP);
        document.getElementById('tawtsan-slider').value = 20;
        document.getElementById('amalgaa-slider').value = 20;
        document.getElementById('haylaga-slider').value = 20;
    } else if (cityName == 'Paris') {
        document.getElementById('resultPhoto').src = "assets/images/onewithBalcon/g.jpg";
        currentCity = "Paris";
        resultWindowPrice("1900", "1000", price);
        var amalgPrice = document.getElementById('amalgaaPrice').innerHTML = "58 $";
        totalResultAmalgaa(amalgPrice);
        var tawP = document.getElementById('tawtsanPrice').innerHTML = "24 $";
        totalResultTawtsan(tawP);
        var haylP = document.getElementById('haylagaPrice').innerHTML = "13 $";
        totalResultHaylaga(haylP)
        document.getElementById('tawtsan-slider').value = 20;
        document.getElementById('amalgaa-slider').value = 20;
        document.getElementById('haylaga-slider').value = 20;
    } else if (cityName == 'Newyork') {
        document.getElementById('resultPhoto').src = "assets/images/3window/g_g_g.jpg";
        currentCity = "Newyork";
        resultWindowPrice("1000", "1700", price);
        var amalgPrice = document.getElementById('amalgaaPrice').innerHTML = "90 $";
        totalResultAmalgaa(amalgPrice);
        var tawP = document.getElementById('tawtsanPrice').innerHTML = "40 $";
        totalResultTawtsan(tawP);
        var haylP = document.getElementById('haylagaPrice').innerHTML = "22 $";
        totalResultHaylaga(haylP)
        document.getElementById('tawtsan-slider').value = 20;
        document.getElementById('amalgaa-slider').value = 20;
        document.getElementById('haylaga-slider').value = 20;

    } else if (cityName == 'Tokyo') {
        document.getElementById('resultPhoto').src = "assets/images/WithBalcon/g_g.jpg";
        currentCity = "Tokyo";
        resultWindowPrice("1900", "1300", price);
        var amalgPrice = document.getElementById('amalgaaPrice').innerHTML = "74 $";
        totalResultAmalgaa(amalgPrice);
        var tawP = document.getElementById('tawtsanPrice').innerHTML = "31 $";
        totalResultTawtsan(tawP);
        var haylP = document.getElementById('haylagaPrice').innerHTML = "16 $";
        totalResultHaylaga(haylP)
        document.getElementById('tawtsan-slider').value = 20;
        document.getElementById('amalgaa-slider').value = 20;
        document.getElementById('haylaga-slider').value = 20;

    }

}

// Get the element with id="defaultOpen" and click on it

//edited for Envanto
var tabuud = document.getElementsByClassName("tabcontent");

for (i = 1; i < tabuud.length; i++) {
    tabuud[i].style.display = "none";
    currentCity = "London";
}




/*---------------------tab ending--------------------------*/

/*---------London--------------------------------------*/
/*----------height-------------*/
var slider1 = document.getElementById("slider1");
var val1 = document.getElementById("london-value-height").value;
val1 = document.getElementById("london-value-height").value = slider1.value;
Height = slider1.value;
slider1.oninput = function () {
    val1 = document.getElementById("london-value-height").value = this.value;
    Height = val1;
    resultWindowPrice(Height, Width, price);
    resultWindowFramePrice(Height, Width, Length, aPrice);
    resultChangeHeight(this.value);
}

function insertLondonSlider1() {
    var x1 = document.getElementById("london-value-height").value;
    document.getElementById("slider1").value = x1;
    Height = x1;
    resultWindowPrice(Height, Width, price);
    resultWindowFramePrice(Height, Width, Length, aPrice);
    resultChangeHeight(x1);


}



/*---------width -----------------*/
var slider = document.getElementById("slider");
var val = document.getElementById("london-value-width").value;
val = document.getElementById("london-value-width").value = slider.value;
Width = slider.value;
slider.oninput = function () {
    val = document.getElementById("london-value-width").value = this.value;
    Width = val;
    resultWindowPrice(Height, Width, price);
    resultWindowFramePrice(Height, Width, Length, aPrice);
    resultWindowTawtsanPrice(Width, tLength, tPrice);
    resultWindowHaylagaPrice(Width, hLength, hPrice);
    resultChangeWidth(this.value);

}

function insertLondonSlider() {
    var x = document.getElementById("london-value-width").value;
    document.getElementById("slider").value = x;
    Width = x;
    resultWindowPrice(Height, Width, price);
    resultWindowFramePrice(Height, Width, Length, aPrice);
    resultWindowTawtsanPrice(Width, tLength, tPrice);
    resultWindowHaylagaPrice(Width, hLength, hPrice);
    resultChangeWidth(x);
}
/*--------------London ending---------------------------*/


/*---------Berlin--------------------------------------*/
/*----------height-------------*/
var slider1 = document.getElementById("bslider1");
var val1 = document.getElementById("berlin-value-height").value;
val1 = document.getElementById("berlin-value-height").value = slider1.value;
bHeight = slider1.value;
slider1.oninput = function () {
    val1 = document.getElementById("berlin-value-height").value = this.value;
    bHeight = val1;
    resultWindowPrice(bHeight, bWidth, price);
    resultWindowFramePrice(bHeight, bWidth, Length, aPrice);
    resultChangeHeight(this.value);
}

function insertBerlinSlider1() {
    var x1 = document.getElementById("berlin-value-height").value;
    document.getElementById("bslider1").value = x1;
    bHeight = x1;
    resultWindowPrice(bHeight, bWidth, price);
    resultWindowFramePrice(bHeight, bWidth, Length, aPrice);
    resultChangeHeight(x1);
}



/*---------width -----------------*/
var slider = document.getElementById("bslider");
var val = document.getElementById("berlin-value-width").value;
val = document.getElementById("berlin-value-width").value = slider.value;
bWidth = slider.value;
slider.oninput = function () {
    val = document.getElementById("berlin-value-width").value = this.value;
    bWidth = val;
    resultWindowPrice(bHeight, bWidth, price);
    resultWindowFramePrice(bHeight, bWidth, Length, aPrice);
    resultWindowTawtsanPrice(bWidth, tLength, tPrice);
    resultWindowHaylagaPrice(bWidth, hLength, hPrice);
    resultChangeWidth(this.value);
}

function insertBerlinSlider() {
    var x = document.getElementById("berlin-value-width").value;
    document.getElementById("bslider").value = x;

    bWidth = x;
    resultWindowPrice(bHeight, bWidth, price);
    resultWindowFramePrice(bHeight, bWidth, Length, aPrice);
    resultWindowTawtsanPrice(bWidth, tLength, tPrice);
    resultWindowHaylagaPrice(bWidth, hLength, hPrice);
    resultChangeWidth(x);

}
/*--------------Berlin ending---------------------------*/


/*---------paris--------------------------------------*/
/*----------height-------------*/
var slider1 = document.getElementById("pslider1");
var val1 = document.getElementById("paris-value-height").value;
val1 = document.getElementById("paris-value-height").value = slider1.value;
pHeight = slider1.value;
slider1.oninput = function () {
    val1 = document.getElementById("paris-value-height").value = this.value;
    pHeight = val1;
    resultWindowPrice(pHeight, pWidth, price);
    resultWindowFramePrice(pHeight, pWidth, Length, aPrice);
    resultChangeHeight(this.value);
}

function insertParisSlider1() {
    var x1 = document.getElementById("paris-value-height").value;
    document.getElementById("pslider1").value = x1;
    pHeight = x1;
    resultWindowPrice(pHeight, pWidth, price);
    resultWindowFramePrice(pHeight, pWidth, Length, aPrice);
    resultChangeHeight(x1);
}



/*---------width -----------------*/
var slider = document.getElementById("pslider");
var val = document.getElementById("paris-value-width").value;
val = document.getElementById("paris-value-width").value = slider.value;
pWidth = slider.value;
slider.oninput = function () {
    val = document.getElementById("paris-value-width").value = this.value;
    pWidth = val;
    resultWindowPrice(pHeight, pWidth, price);
    resultWindowFramePrice(pHeight, pWidth, Length, aPrice);
    resultWindowTawtsanPrice(pWidth, tLength, tPrice);
    resultWindowHaylagaPrice(pWidth, hLength, hPrice);
    resultChangeWidth(this.value);
}

function insertParisSlider() {
    var x = document.getElementById("paris-value-width").value;
    document.getElementById("pslider").value = x;
    pWidth = x;
    resultWindowPrice(pHeight, pWidth, price);
    resultWindowFramePrice(pHeight, pWidth, Length, aPrice);
    resultWindowTawtsanPrice(pWidth, tLength, tPrice);
    resultWindowHaylagaPrice(pWidth, hLength, hPrice);
    resultChangeWidth(x);

}
/*--------------paris ending---------------------------*/


/*---------newyork--------------------------------------*/
/*----------height-------------*/
var slider1 = document.getElementById("nslider1");
var val1 = document.getElementById("newyork-value-height").value;
val1 = document.getElementById("newyork-value-height").value = slider1.value;
nHeight = slider1.value;
slider1.oninput = function () {
    val1 = document.getElementById("newyork-value-height").value = this.value;
    nHeight = val1;
    resultWindowPrice(nHeight, nWidth, price);
    resultWindowFramePrice(nHeight, nWidth, Length, aPrice);
    resultChangeHeight(this.value);
}

function insertNewyorkSlider1() {
    var x1 = document.getElementById("newyork-value-height").value;
    document.getElementById("nslider1").value = x1;
    nHeight = x1;
    resultWindowPrice(nHeight, nWidth, price);
    resultWindowFramePrice(nHeight, nWidth, Length, aPrice);
    resultChangeHeight(x1);
}



/*---------width -----------------*/
var slider = document.getElementById("nslider");
var val = document.getElementById("newyork-value-width").value;
val = document.getElementById("newyork-value-width").value = slider.value;
nWidth = slider.value;
slider.oninput = function () {
    val = document.getElementById("newyork-value-width").value = this.value;
    nWidth = val;
    resultWindowPrice(nHeight, nWidth, price);
    resultWindowFramePrice(nHeight, nWidth, Length, aPrice);
    resultWindowTawtsanPrice(nWidth, tLength, tPrice);
    resultWindowHaylagaPrice(nWidth, hLength, hPrice);
    resultChangeWidth(this.value);
}

function insertNewyorkSlider() {
    var x = document.getElementById("newyork-value-width").value;
    document.getElementById("nslider").value = x;
    nWidth = x;
    resultWindowPrice(nHeight, nWidth, price);
    resultWindowFramePrice(nHeight, nWidth, Length, aPrice);
    resultWindowTawtsanPrice(nWidth, tLength, tPrice);
    resultWindowHaylagaPrice(nWidth, hLength, hPrice);
    resultChangeWidth(x);

}
/*--------------newyork ending---------------------------*/


/*---------tokyo--------------------------------------*/
/*----------height-------------*/
var slider1 = document.getElementById("tslider1");
var val1 = document.getElementById("tokyo-value-height").value;
val1 = document.getElementById("tokyo-value-height").value = slider1.value;
tHeight = slider1.value;
slider1.oninput = function () {
    val1 = document.getElementById("tokyo-value-height").value = this.value;
    tHeight = val1;
    resultWindowPrice(tHeight, tWidth, price);
    resultWindowFramePrice(tHeight, tWidth, Length, aPrice);

    resultChangeHeight(this.value);
}

function insertTokyoSlider1() {
    var x1 = document.getElementById("tokyo-value-height").value;
    document.getElementById("tslider1").value = x1;
    tHeight = x1;
    resultWindowPrice(tHeight, tWidth, price);
    resultWindowFramePrice(tHeight, tWidth, Length, aPrice);
    resultChangeHeight(x1);
}



/*---------width -----------------*/
var slider = document.getElementById("tslider");
var val = document.getElementById("tokyo-value-width").value;
val = document.getElementById("tokyo-value-width").value = slider.value;
tWidth = slider.value;
slider.oninput = function () {
    val = document.getElementById("tokyo-value-width").value = this.value;
    tWidth = val;
    resultWindowPrice(tHeight, tWidth, price);
    resultWindowFramePrice(tHeight, tWidth, Length, aPrice);
    resultWindowTawtsanPrice(tWidth, tLength, tPrice);
    resultWindowHaylagaPrice(tWidth, hLength, hPrice);
    resultChangeWidth(this.value);
}

function insertTokyoSlider() {
    var x = document.getElementById("tokyo-value-width").value;
    document.getElementById("tslider").value = x;
    tWidth = x;
    resultWindowPrice(tHeight, tWidth, price);
    resultWindowFramePrice(tHeight, tWidth, Length, aPrice);
    resultWindowTawtsanPrice(tWidth, tLength, tPrice);
    resultWindowHaylagaPrice(tWidth, hLength, hPrice);
    resultChangeWidth(this.value);

}
/*--------------tokyo ending---------------------------*/


/*-------------------Photo Choosing field-------------------------------*/

/*-----------------London Photo---------------------------*/
function changeFunction() {
    var neg = document.getElementById("neg").value;
    var negdugeer = document.getElementById("negdeh").src = "assets/images/1window" + "/" + neg + ".jpg";
    resultChangeWordLondon(neg);
    resultChangePhoto(negdugeer);
    changedOneWindow(neg);
}
/*-----------------Berlin Photo---------------------------*/
function hoyrdohFunction() {
    var hoyor = document.getElementById("hoyor").value;

    var hoyor1 = document.getElementById("hoyor1").value;

    var hoyrdugaar = document.getElementById("hoyrdoh").src = "assets/images/2window" + "/" + hoyor + "_" + hoyor1 + ".jpg";
    resultChangeWordBerlin(hoyor, hoyor1);
    resultChangePhoto(hoyrdugaar);
    changedWindow(hoyor, hoyor1);
}

function hoyrdoh1Function() {
    var hoyor1 = document.getElementById("hoyor1").value;

    var hoyor = document.getElementById("hoyor").value;
    var hoyrdugaar1 = document.getElementById("hoyrdoh").src = "assets/images/2window" + "/" + hoyor + "_" + hoyor1 + ".jpg";
    resultChangeWordBerlin(hoyor, hoyor1);
    resultChangePhoto(hoyrdugaar1);
    changedWindow(hoyor, hoyor1);
}

/*-----------------Paris Photo---------------------------*/
function gurawdahFunction() {
    var guraw = document.getElementById("guraw").value;
    var gurawdugaar = document.getElementById("gurawdah").src = "assets/images/onewithBalcon" + "/" + guraw + ".jpg";
    resultChangeWordLondon(guraw);
    resultChangePhoto(gurawdugaar);
    changedBalconWindow(guraw);
}

/*-------------------Photo Choosing field ending------------------------------*/

/*-----------------Newyork Photo---------------------------*/

function duruwdehFunction() {
    var duruw = document.getElementById("duruw").value;

    var duruw1 = document.getElementById("duruw1").value;

    var duruw2 = document.getElementById("duruw2").value;

    var duruwdugeer = document.getElementById("duruwdeh").src = "assets/images/3window" + "/" + duruw + "_" + duruw1 + "_" + duruw2 + ".jpg";
    resultChangeWordNewyork(duruw, duruw1, duruw2);
    resultChangePhoto(duruwdugeer);
    changedThreeWindow(duruw, duruw1, duruw2);
}

function duruwdeh1Function() {
    var duruw = document.getElementById("duruw").value;

    var duruw1 = document.getElementById("duruw1").value;

    var duruw2 = document.getElementById("duruw2").value;

    var duruwdugeer1 = document.getElementById("duruwdeh").src = "assets/images/3window" + "/" + duruw + "_" + duruw1 + "_" + duruw2 + ".jpg";
    resultChangeWordNewyork(duruw, duruw1, duruw2);
    resultChangePhoto(duruwdugeer1);
    changedThreeWindow(duruw, duruw1, duruw2);
}

function duruwdeh2Function() {
    var duruw = document.getElementById("duruw").value;

    var duruw1 = document.getElementById("duruw1").value;

    var duruw2 = document.getElementById("duruw2").value;
    var duruwdugeer2 = document.getElementById("duruwdeh").src = "assets/images/3window" + "/" + duruw + "_" + duruw1 + "_" + duruw2 + ".jpg";
    resultChangeWordNewyork(duruw, duruw1, duruw2);
    resultChangePhoto(duruwdugeer2);
    changedThreeWindow(duruw, duruw1, duruw2);
}
/*-----------------Newyork Photo ending---------------------------*/

/*-----------------Tokyo Photo---------------------------*/

function tawdahFunction() {
    var taw = document.getElementById("taw").value;

    var taw1 = document.getElementById("taw1").value;


    var tawdugaar = document.getElementById("tawdah").src = "assets/images/WithBalcon" + "/" + taw + "_" + taw1 + ".jpg";
    resultChangeWordBerlin(taw, taw1);
    resultChangePhoto(tawdugaar);
    changedTwoBalconWindow(taw, taw1);
}

function tawdah1Function() {
    var taw1 = document.getElementById("taw1").value;

    var taw = document.getElementById("taw").value;
    var tawdugaar1 = document.getElementById("tawdah").src = "assets/images/WithBalcon" + "/" + taw + "_" + taw1 + ".jpg";
    resultChangeWordBerlin(taw, taw1);
    resultChangePhoto(tawdugaar1);
    changedTwoBalconWindow(taw, taw1);
}

/*-----------------Tokyo Photo ending---------------------------*/

/*---------for Active-d zoriulaw -london-----------------*/
var header = document.getElementById("for-active-london");

var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("london-choosed");
        current[0].className = current[0].className.replace(" london-choosed", "");
        this.className += " london-choosed";
    });
}

/*---------for Active ending------------------*/


/*---------------Inside Promise------------------*/


var amalgaa = document.getElementById("amalgaa-slider");
// var valAm = document.getElementById("london-amalgaa").value;     
document.getElementById("london-amalgaa").value = amalgaa.value;
Length = amalgaa.value;
amalgaa.oninput = function () {
    valAm = document.getElementById("london-amalgaa").value = this.value;
    Length = valAm;

    if (currentCity == "London") {
        resultWindowFramePrice(Height, Width, Length, aPrice);
    } else if (currentCity == "Berlin") {
        resultWindowFramePrice(bHeight, bWidth, Length, aPrice);
    } else if (currentCity == "Paris") {
        resultWindowFramePrice(pHeight, pWidth, Length, aPrice);
    } else if (currentCity == "Newyork") {
        resultWindowFramePrice(nHeight, nWidth, Length, aPrice);
    } else if (currentCity == "Tokyo") {
        resultWindowFramePrice(tHeight, tWidth, Length, aPrice);
    }


    amalgaaToResult(this.value);
    convertorAmaglaa(this.value);
}

function amalgaaSlider() {
    var xa = document.getElementById("london-amalgaa").value;
    document.getElementById("amalgaa-slider").value = xa;

}


function convertorAmaglaa(ama) {


    if (ama == 20) {
        document.getElementById("amalgaa-photo").style.left = "-30px";
        document.getElementById("amalgaa-photo").style.top = "15px";
    } else if (ama == 30) {
        document.getElementById("amalgaa-photo").style.left = "-25px";
        document.getElementById("amalgaa-photo").style.top = "12px";
    } else if (ama == 40) {
        document.getElementById("amalgaa-photo").style.left = "-15px";
        document.getElementById("amalgaa-photo").style.top = "9px";
    } else if (ama == 50) {
        document.getElementById("amalgaa-photo").style.left = "-10px";
        document.getElementById("amalgaa-photo").style.top = "6px";
    } else if (ama == 60) {
        document.getElementById("amalgaa-photo").style.left = "-5px";
        document.getElementById("amalgaa-photo").style.top = "3px";
    }
}
/*-----------------Inside Promise ending------------ */



/*------------Indoor deck-------------------------*/
var tawtsan = document.getElementById("tawtsan-slider");
var valt = document.getElementById("tawtsan").value;
valt = document.getElementById("tawtsan").value = tawtsan.value;
tLength = valt;
tawtsan.oninput = function () {
    valt = document.getElementById("tawtsan").value = this.value;
    tLength = valt;
    tawtsanToResult(valt)
    convertorTawtsan(this.value);

    if (currentCity == "London") {
        resultWindowTawtsanPrice(Width, tLength, tPrice);
    } else if (currentCity == "Berlin") {
        resultWindowTawtsanPrice(bWidth, tLength, tPrice);
    } else if (currentCity == "Paris") {
        resultWindowTawtsanPrice(pWidth, tLength, tPrice);
    } else if (currentCity == "Newyork") {
        resultWindowTawtsanPrice(nWidth, tLength, tPrice);
    } else if (currentCity == "Tokyo") {
        resultWindowTawtsanPrice(tWidth, tLength, tPrice);
    }

}


function tawtsanSlider() {
    var y = document.getElementById("tawtsan").value;
    document.getElementById("tawtsan-slider").value = y;
}


function convertorTawtsan(ama) {


    if (ama == 20) {
        document.getElementById("tawtsan-photo").style.left = "35px";
    } else if (ama == 30) {
        document.getElementById("tawtsan-photo").style.left = "30px";
    } else if (ama == 40) {
        document.getElementById("tawtsan-photo").style.left = "25px";
    } else if (ama == 50) {
        document.getElementById("tawtsan-photo").style.left = "20px";
    } else if (ama == 60) {
        document.getElementById("tawtsan-photo").style.left = "15px";
    }
}
/*------------Indoor deck ending------------------*/




/*------------Water discharge--------------------------*/
var haylaga1 = document.getElementById("haylaga-slider");
var valt1 = document.getElementById("haylaga").value;

valt1 = document.getElementById("haylaga").value = haylaga1.value;
hLength = valt1;
haylaga1.oninput = function () {
    valt1 = document.getElementById("haylaga").value = this.value;
    hLength = valt1;
    convertorHaylaga(this.value);
    haylagaToResult(valt1)


    if (currentCity == "London") {
        resultWindowHaylagaPrice(Width, hLength, hPrice);
    } else if (currentCity == "Berlin") {
        resultWindowHaylagaPrice(bWidth, hLength, hPrice);
    } else if (currentCity == "Paris") {
        resultWindowHaylagaPrice(pWidth, hLength, hPrice);
    } else if (currentCity == "Newyork") {
        resultWindowHaylagaPrice(nWidth, hLength, hPrice);
    } else if (currentCity == "Tokyo") {
        resultWindowHaylagaPrice(tWidth, hLength, hPrice);
    }
}

function haylagaSlider() {
    var z = document.getElementById("haylaga").value;
    document.getElementById("tawtsan-slider").value = z;
}

function convertorHaylaga(ama) {


    if (ama == 20) {
        document.getElementById("haylaga-photo").style.left = "-60px";
    } else if (ama == 30) {
        document.getElementById("haylaga-photo").style.left = "-50px";
    } else if (ama == 40) {
        document.getElementById("haylaga-photo").style.left = "-40px";
    } else if (ama == 50) {
        document.getElementById("haylaga-photo").style.left = "-30px";
    } else if (ama == 60) {
        document.getElementById("haylaga-photo").style.left = "-20px";
    }
}
/*-------------Water discharge ending------------------*/
/*===========Button size===============*/

$('.btn-toggle').on('click', function () {
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary').length > 0) {
        $(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').length > 0) {
        $(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').length > 0) {
        $(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').length > 0) {
        $(this).find('.btn').toggleClass('btn-info');
    }

    $(this).find('.btn').toggleClass('btn-default');

});
/*-------------Calculator-------------------*/


function resultChangePhoto(value) {
    document.getElementById('resultPhoto').src = value;
}

function resultChangeHeight(value) {
    document.getElementById('resultHeight').innerHTML = value;
}

function resultChangeWidth(value) {
    document.getElementById('resultWidth').innerHTML = value;
}



/*-----------------London Brand--------------------------*/

document.getElementById("changeLondonBrand").addEventListener('change', changeBrandLondonFunction);

function changeBrandLondonFunction() {
    var wordBrand = document.getElementById("changeLondonBrand").value;

    document.getElementById('brandContent').innerHTML = wordBrand;
}

/*-----------------London Brand--------------------------*/

function resultChangeWordLondon(value, value1, value2) {
    var two, one, three;
    var obj = {
        g: "Deaf",
        p: "Swivel",
        o: "Folding",
        po: "Swing-out"
    };

    for (var char in obj) {

        if (char == value) {
            one = obj[char];
        }
    }

    for (var char1 in obj) {

        if (char1 == value1) {
            two = obj[char1];
        }
    }

    for (var char2 in obj) {

        if (char2 == value2) {
            three = obj[char2];
        }
    }

    document.getElementById("windowContent").innerHTML = "left side: " + one + ", middle side: " + two + ", right side: " + three;

}
/*---------------3 with Window---------------------------------------------------*/


function resultChangeWordNewyork(value, value1, value2) {
    var two, one, three;
    var obj = {
        g: "Deaf",
        p: "Swivel",
        o: "Folding",
        po: "Swing-out"
    };

    for (var char in obj) {

        if (char == value) {
            one = obj[char];
        }
    }

    for (var char1 in obj) {

        if (char1 == value1) {
            two = obj[char1];
        }
    }

    for (var char2 in obj) {

        if (char2 == value2) {
            three = obj[char2];
        }
    }

    document.getElementById("windowContent").innerHTML = "left side: " + one + ", middle side: " + two + ", right side: " + three;

}
/*---------------3 window ending---------------------------------------------------*/

/*---------------1 window---------------------------------------------------*/
function resultChangeWordLondon(value) {

    var obj = {
        g: "Deaf",
        p: "Swivel",
        o: "Folding",
        po: "Swing-out"
    };

    for (var char in obj) {
        if (char == value) {
            document.getElementById("windowContent").innerHTML = obj[char];
        }
    }
}
/*---------------1-window ending---------------------------------------------------*/

/*---------------2-window---------------------------------------------------*/
function resultChangeWordBerlin(value, value1) {
    var two, one;
    var obj = {
        g: "Deaf",
        p: "Swivel",
        o: "Folding",
        po: "Swing-out"
    };
    for (var char in obj) {
        if (char == value) {
            one = obj[char];
        }
    }

    for (var char in obj) {
        if (char == value1) {
            two = obj[char];

        }
    }
    document.getElementById("windowContent").innerHTML = "left side: " + one + ", right-side: " + two;
}
/*---------------2 window ending---------------------------------------------------*/


/*----------Window glass quantity-------------------------------------------------------------------*/

document.getElementById("twoGlass").addEventListener('click', glassChangeWindow);


function glassChangeWindow() {
    document.getElementById("glassWindow").innerHTML = "2-layers of glass";
    var number = document.getElementById("onlyWindowPrice").innerHTML;
    number = formatInverse(number);
    number -= 20;
    number = format1(number);
    document.getElementById("onlyWindowPrice").innerHTML = number + " төг";
    totalResult(number);
}

document.getElementById("threeGlass").addEventListener('click', glassChangeWindowThree);

function glassChangeWindowThree() {
    document.getElementById("glassWindow").innerHTML = "3-layers of glass";
    var number = document.getElementById("onlyWindowPrice").innerHTML;
    number = formatInverse(number);
    number += 20;
    number = format1(number);
    document.getElementById("onlyWindowPrice").innerHTML = number + " $";
    totalResult(number);
}

/*----------Window glass quantity--ending-----------------------------------------------------------------*/

/*----------Window glass Side-------------------------------------------------------------------*/

document.getElementById("oneSide").addEventListener('click', glassChangeSide);


function glassChangeSide() {
    document.getElementById("resultSide").innerHTML = "1-Slide";
    var number = document.getElementById("coloringPrice").innerHTML;
    number = formatInverse(number);
    if (number == 0) {
        return;
    }
    number -= 13;
    // number = format1(number);
    var sidecolor = document.getElementById("coloringPrice").innerHTML =  " ";
    totalColoringResult(sidecolor);

}

document.getElementById("twoSide").addEventListener('click', glassChangeTwoSide);

function glassChangeTwoSide() {
    document.getElementById("resultSide").innerHTML = "2-Slide";
    var number = document.getElementById("coloringPrice").innerHTML;
    number = formatInverse(number);
    if (number == 0) {
        return;
    }
    number += 13;
    // number = format1(number);
    var sidecolor = document.getElementById("coloringPrice").innerHTML = " ";
    totalColoringResult(sidecolor);

}

/*----------Window glass Side--ending-----------------------------------------------------------------*/


/*----------Window glass Side-------------------------------------------------------------------*/

document.getElementById("whiteColor").addEventListener('click', ChangeColorWhite);


function ChangeColorWhite() {
    document.getElementById("resultColor").innerHTML = "White";
    var colorval = document.getElementById("coloringPrice").innerHTML =   " ";
    document.getElementById("button1").disabled = true;
    totalColoringResult(colorval);
}

document.getElementById("color1").addEventListener('click', ChangeColorBrown);

function ChangeColorBrown() {
    document.getElementById("resultColor").innerHTML = "AP05";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color2").addEventListener('click', Color2);

function Color2() {
    document.getElementById("resultColor").innerHTML = "AP06";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color3").addEventListener('click', Color3);

function Color3() {
    document.getElementById("resultColor").innerHTML = "AP07";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}

document.getElementById("color4").addEventListener('click', Color4);

function Color4() {
    document.getElementById("resultColor").innerHTML = "AP08";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color5").addEventListener('click', Color5);

function Color5() {
    document.getElementById("resultColor").innerHTML = "AP09";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color6").addEventListener('click', Color6);

function Color6() {
    document.getElementById("resultColor").innerHTML = "AP10";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color7").addEventListener('click', Color7);

function Color7() {
    document.getElementById("resultColor").innerHTML = "AP11";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color8").addEventListener('click', Color8);

function Color8() {
    document.getElementById("resultColor").innerHTML = "AP12";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color9").addEventListener('click', Color9);

function Color9() {
    document.getElementById("resultColor").innerHTML = "AP13";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color10").addEventListener('click', Color10);

function Color10() {
    document.getElementById("resultColor").innerHTML = "AP14";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color11").addEventListener('click', Color11);

function Color11() {
    document.getElementById("resultColor").innerHTML = "AP15";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color12").addEventListener('click', Color12);

function Color12() {
    document.getElementById("resultColor").innerHTML = "AP16";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color13").addEventListener('click', Color13);

function Color13() {
    document.getElementById("resultColor").innerHTML = "AP17";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color14").addEventListener('click', Color14);

function Color14() {
    document.getElementById("resultColor").innerHTML = "AP18";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color15").addEventListener('click', Color15);

function Color15() {
    document.getElementById("resultColor").innerHTML = "AP19";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color16").addEventListener('click', Color16);

function Color16() {
    document.getElementById("resultColor").innerHTML = "AP20";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color17").addEventListener('click', Color17);

function Color17() {
    document.getElementById("resultColor").innerHTML = "AP21";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color18").addEventListener('click', Color18);

function Color18() {
    document.getElementById("resultColor").innerHTML = "AP22";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}

document.getElementById("color19").addEventListener('click', Color19);

function Color19() {
    document.getElementById("resultColor").innerHTML = "AP23";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color20").addEventListener('click', Color20);

function Color20() {
    document.getElementById("resultColor").innerHTML = "AP24";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color21").addEventListener('click', Color22);

function Color22() {
    document.getElementById("resultColor").innerHTML = "AP25";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color22").addEventListener('click', Color22);

function Color22() {
    document.getElementById("resultColor").innerHTML = "AP26";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color23").addEventListener('click', Color23);

function Color23() {
    document.getElementById("resultColor").innerHTML = "AP27";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color24").addEventListener('click', Color24);

function Color24() {
    document.getElementById("resultColor").innerHTML = "AP28";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color25").addEventListener('click', Color25);

function Color25() {
    document.getElementById("resultColor").innerHTML = "AP29";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color26").addEventListener('click', Color26);

function Color26() {
    document.getElementById("resultColor").innerHTML = "AP30";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}
document.getElementById("color27").addEventListener('click', Color27);

function Color27() {
    document.getElementById("resultColor").innerHTML = "AP31";
    var colorval = document.getElementById("coloringPrice").innerHTML ="";
    document.getElementById("button1").disabled = false;
    totalColoringResult(colorval);
}























/*----------Window glass Side--ending-----------------------------------------------------------------*/

/*--------------------Main Window Price calculator----------------------------------------------------*/
function resultWindowPrice(height, width, price) {

    var full = parseInt(height) * parseInt(width) * price / 10;

    full = format1(full);

    document.getElementById("onlyWindowPrice").innerHTML = full + " $";
    totalResult(full);
}

/*--------------------Main Window Price calculator-ending---------------------------------------------------*/

/*--------------------Inside promise---------------------------------*/

function resultWindowFramePrice(height, width, Length, aPrice) {

    convertedHeight = height / 10;
    convertedWidth = width / 10;

    var full = ((parseInt(convertedHeight) * parseInt(Length)) + (parseInt(convertedHeight) * parseInt(convertedWidth)) + (parseInt(convertedWidth) * parseInt(Length))) * 2 * aPrice / 10;

    full = format1(full);

    document.getElementById("amalgaaPrice").innerHTML = full + " $";
    totalResultAmalgaa(full)

}

function resultWindowTawtsanPrice(width, Length, tPrice) {


    convertedWidth = width / 10;

    var full = parseInt(convertedWidth) * parseInt(Length) * tPrice;

    full = format1(full);

    document.getElementById("tawtsanPrice").innerHTML = full + " $";
    totalResultTawtsan(full)

}

function resultWindowHaylagaPrice(width, Length, hPrice) {


    convertedWidth = width / 10;

    var full = parseInt(convertedWidth) * parseInt(Length) * hPrice;

    full = format1(full);

    document.getElementById("haylagaPrice").innerHTML = full + " $";
    totalResultHaylaga(full);

}

/*---------------------disable enable promise-------------------------------------*/


document.getElementById("ion").addEventListener("click", enabledResult);

function enabledResult() {
    if (currentCity == 'London') {

        var amPrice = document.getElementById('amalgaaPrice').innerHTML = "29 $";
        totalResultAmalgaa(amPrice);

    } else if (currentCity == 'Berlin') {

        var amPrice = document.getElementById('amalgaaPrice').innerHTML = "55 $";
        totalResultAmalgaa(amPrice);
    } else if (currentCity == 'Paris') {

        var amPrice = document.getElementById('amalgaaPrice').innerHTML = "58 $";
        totalResultAmalgaa(amPrice);
    } else if (currentCity == 'Newyork') {

        var amPrice = document.getElementById('amalgaaPrice').innerHTML = "90 $";
        totalResultAmalgaa(amPrice);

    } else if (currentCity == 'Tokyo') {

        var amPrice = document.getElementById('amalgaaPrice').innerHTML = "74 $";
        totalResultAmalgaa(amPrice);

    }
}

document.getElementById("ioff").addEventListener("click", disabledResult);

function disabledResult() {
    var off = document.getElementById("amalgaaPrice").innerHTML = "0 $";
    totalResultAmalgaa(off);

}


/*---------------------disable enable amalgaa-ending------------------------------------*/


/*---------------------disable enable deck-------------------------------------*/


document.getElementById("ton").addEventListener("click", enabledToTawtsanResult);

function enabledToTawtsanResult() {
    if (currentCity == 'London') {

        var tawtsanP = document.getElementById('tawtsanPrice').innerHTML = "12 $";
        totalResultTawtsan(tawtsanP);

    } else if (currentCity == 'Berlin') {

        var tawtsanP = document.getElementById('tawtsanPrice').innerHTML = "24 $";
        totalResultTawtsan(tawtsanP);
    } else if (currentCity == 'Paris') {

        var tawtsanP = document.getElementById('tawtsanPrice').innerHTML = "24 $";
        totalResultTawtsan(tawtsanP);
    } else if (currentCity == 'Newyork') {

        var tawtsanP = document.getElementById('tawtsanPrice').innerHTML = "40 $";
        totalResultTawtsan(tawtsanP);

    } else if (currentCity == 'Tokyo') {

        var tawtsanP = document.getElementById('tawtsanPrice').innerHTML = "31 $";
        totalResultTawtsan(tawtsanP);

    }
}

document.getElementById("toff").addEventListener("click", disabledToTawtsanResult);

function disabledToTawtsanResult() {
    var off = document.getElementById("tawtsanPrice").innerHTML = "0 $";
    totalResultTawtsan(off);

}


/*---------------------disable enable deck-ending------------------------------------*/

/*---------------------disable enable deck-------------------------------------*/


document.getElementById("hon").addEventListener("click", enabledToHaylagaResult);

function enabledToHaylagaResult() {
    if (currentCity == 'London') {

        var hayP = document.getElementById('haylagaPrice').innerHTML = "6 $";
        totalResultHaylaga(hayP);

    } else if (currentCity == 'Berlin') {

        var hayP = document.getElementById('haylagaPrice').innerHTML = "13 $";
        totalResultHaylaga(hayP);
    } else if (currentCity == 'Paris') {

        var hayP = document.getElementById('haylagaPrice').innerHTML = "13 $";
        totalResultHaylaga(hayP);
    } else if (currentCity == 'Newyork') {

        var hayP = document.getElementById('haylagaPrice').innerHTML = "22 $";
        totalResultHaylaga(hayP);

    } else if (currentCity == 'Tokyo') {

        var hayP = document.getElementById('haylagaPrice').innerHTML = "16 $";
        totalResultHaylaga(hayP);

    }
}

document.getElementById("hoff").addEventListener("click", disabledToHaylagaResult);

function disabledToHaylagaResult() {
    var off = document.getElementById("haylagaPrice").innerHTML = "0 $";
    totalResultHaylaga(off);

}


/*---------------------disable enable deck-ending------------------------------------*/


/*---------------------Change Inside slider to result-------------------------------------*/


function amalgaaToResult(value) {
    document.getElementById("amalgaaSize").innerHTML = value + "см Length";
}

/*---------------------Change Inside slider to result-ending------------------------------------*/


/*---------------------Change tawtsan slider to result-------------------------------------*/


function tawtsanToResult(value) {
    document.getElementById("tawtsanSize").innerHTML = value + "см Length";
}

/*---------------------Change tawtsan slider to result-ending------------------------------------*/


/*---------------------Change haylaga slider to result-------------------------------------*/


function haylagaToResult(value) {
    document.getElementById("haylagaSize").innerHTML = value + "см Length";
}

/*---------------------Change haylaga slider to result-ending------------------------------------*/


function format1(currency) {
    var currency = Math.ceil(currency);
    currency = currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currency;
}

function formatInverse(currency) {
    currency = currency.replace(",", "");
    return parseInt(currency);
}

function changedOneWindow(val, val1) {
    var arr = {
        g: 0,
        p: 10,
        o: 10,
        po: 20
    };
    var firstValue = 0;
    var first;

    for (var char in arr) {
        if (val == char) {
            first = arr[char];
        }

    }

    var addedToo = first + firstValue;
    var addedToo = format1(addedToo);
    document.getElementById("onlyWindowTypePrice").innerHTML = addedToo + " $";
    totalTypeResult(addedToo);
}



function changedWindow(val, val1) {
    var arr = {
        g: 0,
        p: 10,
        o: 10,
        po: 20
    };
    var firstValue = 0;
    var first;
    var second;
    for (var char in arr) {
        if (val == char) {
            first = arr[char];
        }

    }
    for (var char in arr) {
        if (val1 == char) {
            second = arr[char];

        }
    }

    var addedToo = first + second + firstValue;
    var addedToo = format1(addedToo);
    document.getElementById("onlyWindowTypePrice").innerHTML = addedToo + " $";
    totalTypeResult(addedToo);
}

function changedBalconWindow(val) {
    var arr = {
        g: 0,
        p: 10,
        o: 10,
        po: 20
    };
    var firstValue = 0;
    var first;

    for (var char in arr) {
        if (val == char) {
            first = arr[char];
        }

    }

    var addedToo = first + firstValue;
    var addedToo = format1(addedToo);
    document.getElementById("onlyWindowTypePrice").innerHTML = addedToo + " $";
    totalTypeResult(addedToo);
}




function changedThreeWindow(val, val1, val2) {
    var arr = {
        g: 0,
        p: 10,
        o: 10,
        po: 20
    };
    var firstValue = 0;

    var first;
    var second;
    var third;
    for (var char in arr) {
        if (val == char) {
            first = arr[char];
        }

    }
    for (var char in arr) {
        if (val1 == char) {
            second = arr[char];

        }
    }
    for (var char in arr) {
        if (val2 == char) {
            third = arr[char];

        }
    }

    var addedToo = first + second + third + firstValue;
    var addedToo = format1(addedToo);
    document.getElementById("onlyWindowTypePrice").innerHTML = addedToo + " $";
    totalTypeResult(addedToo);
}


function changedTwoBalconWindow(val, val1) {
    var arr = {
        g: 0,
        p: 10,
        o: 10,
        po: 20
    };
    var firstValue = 0;
    var first;
    var second;
    for (var char in arr) {
        if (val == char) {
            first = arr[char];
        }

    }
    for (var char in arr) {
        if (val1 == char) {
            second = arr[char];

        }
    }


    var addedToo = first + second + firstValue;
    var addedToo = format1(addedToo);
    document.getElementById("onlyWindowTypePrice").innerHTML = addedToo + " $";
    totalTypeResult(addedToo);
}




function totalResult(val) {

    var result;
    var typePrice = document.getElementById("onlyWindowTypePrice").innerHTML;
    var amalgaaPrice = document.getElementById("amalgaaPrice").innerHTML;
    var tawtsanPrice = document.getElementById("tawtsanPrice").innerHTML;
    var haylagaPrice = document.getElementById("haylagaPrice").innerHTML;
    var coloringPrice = document.getElementById("coloringPrice").innerHTML;
    typePrice = formatInverse(typePrice);
    amalgaaPrice = formatInverse(amalgaaPrice);
    tawtsanPrice = formatInverse(tawtsanPrice);
    haylagaPrice = formatInverse(haylagaPrice);
    coloringPrice = formatInverse(coloringPrice);
    priceOne = formatInverse(val);
    result = amalgaaPrice + tawtsanPrice + haylagaPrice + coloringPrice + priceOne + typePrice;


    result = format1(result);
    document.getElementById("lastResult").innerHTML = result + " $";


}

function totalTypeResult(val) {

    var result;

    var onlyPrice = document.getElementById("onlyWindowPrice").innerHTML;
    var amalgaaPrice = document.getElementById("amalgaaPrice").innerHTML;
    var tawtsanPrice = document.getElementById("tawtsanPrice").innerHTML;
    var haylagaPrice = document.getElementById("haylagaPrice").innerHTML;
    var coloringPrice = document.getElementById("coloringPrice").innerHTML;

    onlyPrice = formatInverse(onlyPrice);
    amalgaaPrice = formatInverse(amalgaaPrice);
    tawtsanPrice = formatInverse(tawtsanPrice);
    haylagaPrice = formatInverse(haylagaPrice);
    coloringPrice = formatInverse(coloringPrice);
    priceOne = formatInverse(val);
    result = amalgaaPrice + tawtsanPrice + haylagaPrice + coloringPrice + priceOne + onlyPrice;


    result = format1(result);
    document.getElementById("lastResult").innerHTML = result + " $";


}


function totalResultAmalgaa(val) {

    var result;
    var typePrice = document.getElementById("onlyWindowTypePrice").innerHTML;
    var onlyPrice = document.getElementById("onlyWindowPrice").innerHTML;
    var tawtsanPrice = document.getElementById("tawtsanPrice").innerHTML;
    var haylagaPrice = document.getElementById("haylagaPrice").innerHTML;
    var coloringPrice = document.getElementById("coloringPrice").innerHTML;
    typePrice = formatInverse(typePrice);
    onlyPrice = formatInverse(onlyPrice);
    tawtsanPrice = formatInverse(tawtsanPrice);
    haylagaPrice = formatInverse(haylagaPrice);
    coloringPrice = formatInverse(coloringPrice);
    priceOne = formatInverse(val);
    result = onlyPrice + tawtsanPrice + haylagaPrice + coloringPrice + priceOne + typePrice;


    result = format1(result);
    document.getElementById("lastResult").innerHTML = result + " $";


}


function totalResultTawtsan(val) {

    var result;
    var typePrice = document.getElementById("onlyWindowTypePrice").innerHTML;
    var amalgaaPrice = document.getElementById("amalgaaPrice").innerHTML;
    var onlyPrice = document.getElementById("onlyWindowPrice").innerHTML;
    var haylagaPrice = document.getElementById("haylagaPrice").innerHTML;
    var coloringPrice = document.getElementById("coloringPrice").innerHTML;
    typePrice = formatInverse(typePrice);
    amalgaaPrice = formatInverse(amalgaaPrice);
    onlyPrice = formatInverse(onlyPrice);
    haylagaPrice = formatInverse(haylagaPrice);
    coloringPrice = formatInverse(coloringPrice);
    priceOne = formatInverse(val);
    result = amalgaaPrice + onlyPrice + haylagaPrice + coloringPrice + priceOne + typePrice;


    result = format1(result);
    document.getElementById("lastResult").innerHTML = result + " $";


}


function totalResultHaylaga(val) {

    var result;
    var typePrice = document.getElementById("onlyWindowTypePrice").innerHTML;
    var amalgaaPrice = document.getElementById("amalgaaPrice").innerHTML;
    var tawtsanPrice = document.getElementById("tawtsanPrice").innerHTML;
    var onlyPrice = document.getElementById("onlyWindowPrice").innerHTML;
    var coloringPrice = document.getElementById("coloringPrice").innerHTML;
    typePrice = formatInverse(typePrice)
    amalgaaPrice = formatInverse(amalgaaPrice);
    tawtsanPrice = formatInverse(tawtsanPrice);
    onlyPrice = formatInverse(onlyPrice);
    coloringPrice = formatInverse(coloringPrice);
    priceOne = formatInverse(val);
    result = amalgaaPrice + tawtsanPrice + onlyPrice + coloringPrice + priceOne + typePrice;


    result = format1(result);
    document.getElementById("lastResult").innerHTML = result + " $";


}

function totalColoringResult(val) {

    var result;
    var typePrice = document.getElementById("onlyWindowTypePrice").innerHTML;
    var amalgaaPrice = document.getElementById("amalgaaPrice").innerHTML;
    var tawtsanPrice = document.getElementById("tawtsanPrice").innerHTML;
    var haylagaPrice = document.getElementById("haylagaPrice").innerHTML;
    var onlyPrice = document.getElementById("onlyWindowPrice").innerHTML;
    typePrice = formatInverse(typePrice);
    amalgaaPrice = formatInverse(amalgaaPrice);
    tawtsanPrice = formatInverse(tawtsanPrice);
    haylagaPrice = formatInverse(haylagaPrice);
    onlyPrice = formatInverse(onlyPrice);
    priceOne = formatInverse(val);
    result = amalgaaPrice + tawtsanPrice + haylagaPrice + onlyPrice + priceOne + typePrice;


    result = format1(result);
    document.getElementById("lastResult").innerHTML = result + " $";


}



document.getElementById("selectedOrder").addEventListener('click', postToBack);

function postToBack() {

    var brandText = document.getElementById("brandContent").innerHTML;
    var glassText = document.getElementById("glassWindow").innerHTML;
    var windowText = document.getElementById("windowContent").innerHTML;
    var amalgaaSizeText = document.getElementById("amalgaaSize").innerHTML;
    var amalgaaColorText = document.getElementById("amalgaaColor").innerHTML;
    var amalgaaPriceText = document.getElementById("amalgaaPrice").innerHTML;

    var tawtsanSizeText = document.getElementById("tawtsanSize").innerHTML;
    var tawtsanColorText = document.getElementById("tawtsanColor").innerHTML;
    var haylagaColorText = document.getElementById("haylagaColor").innerHTML;
    var haylagaText = document.getElementById("haylagaSize").innerHTML;
    var lastPriceText = document.getElementById("lastResult").innerHTML;

    var heightText = document.getElementById("resultHeight").innerHTML;
    var widthText = document.getElementById("resultWidth").innerHTML;

    document.getElementById("exampleInputType1").value = brandText + ", " + glassText + ", " + windowText + ", Inside promise:" + amalgaaSizeText + ", " + amalgaaColorText + ", Indoor deck:" + tawtsanSizeText + ", " + tawtsanColorText + ", Water discharge:" + haylagaText + ", " + haylagaColorText;

    document.getElementById("exampleInputSize1").value = heightText + " x " + widthText;

    document.getElementById("exampleInputPrice1").value = lastPriceText;
    document.getElementById("exampleInputQuantity1").value = 1;

}
    function pr() {
        document.getElementById("fres").innerHTML = document.getElementById('fname').value + " $";
    }
