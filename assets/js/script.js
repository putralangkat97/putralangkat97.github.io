// perhitungan usia
function hitungJumlah() {
    var umur    = document.getElementById('usia').value;
    var batas   = 18;
    var hasil  = batas - umur;
    if(hasil < 0) {
        document.getElementById('jangka').value = "Batas Usia Hanya 18"
    } else {
        document.getElementById('jangka').innerHTML = hasil;
    }
}

// perhitungaan biaya
function hitungBiaya() {
    // hitungan pertama
    var biaya   = document.getElementById('biaya').value;
    var inflasi = document.getElementById('inflasi').value;
    inflasi     = inflasi/100;
    var jangka  = document.getElementById('jangka').value;
    var hitung  = Math.pow(1 + inflasi, jangka);
    var hitung2 = Math.floor(biaya * hitung);
    var formatU = formatUang(hitung2);
    document.getElementById('biaya_nanti').innerHTML = "Rp. "+formatU;

    // hitungan kedua
    var asumsi          = document.getElementById('asumsi').value;
    asumsi              = asumsi/100;
    var diskonto        = 1/(1+(asumsi/12));
    var hasil1          = (hitung2*(asumsi/12*diskonto));
    var akhir           = jangka*12;
    var hasil2          = ((1 + asumsi/12));
    var hasil_akhir     = Math.pow(hasil2, akhir);
    var hasil_akhir_2   = hasil_akhir - 1;
    var hasil_final     = Math.floor(hasil1/hasil_akhir_2);
    var formatU2        = formatUang(hasil_final);
    document.getElementById('tabungan_bulanan').innerHTML = "Rp. "+formatU2;
}

$(document).ready(function(){
    $("#card1").css("center-block")   
});