//document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//document.querySelector(".img2").setAttribute("src", "images/dice6.png");
resimDegistir(".img1", "dice6.png");
resimDegistir(".img2", "dice6.png");



function buttonClick() {

  var zar1 = Math.random() * 6;
  zar1 = Math.ceil(zar1);

  var zar2 = Math.random() * 6;
  zar2 = Math.ceil(zar2);

  console.log(zar1);
  console.log(zar2);

  for (var i = 1; i <= 2; i++) {

    var zar;
    var resim;
    var sonuc;
    if (i === 1) {
      zar = zar1;
      resim = ".img1";
      sonuc = ".sonuc1";
    } else {
      zar = zar2;
      resim = ".img2";
      sonuc = ".sonuc2";
    }


    resimDegistir(resim, "dice"+zar+".png");
    yaziDegistir(sonuc, "Sonuç: " + zar);
  }

  if (zar1 > zar2) {
    yaziDegistir("h1", "1. Oyuncu Kazandı!");
  } else if (zar1 < zar2) {
    yaziDegistir("h1", "2. Oyuncu Kazandı!");
  } else {
    yaziDegistir("h1", "Berabere!");
  }
}


function resimDegistir(sinif, yazi) {

  return document.querySelector(sinif).setAttribute("src", "images/" + yazi);

}

function yaziDegistir(sinif, yazi) {
  return document.querySelector(sinif).innerHTML = yazi;
}
