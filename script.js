// script.js
document.addEventListener("DOMContentLoaded", function() {
    var namaElement = document.getElementById("nama");
    if (namaElement) {
        namaElement.innerText = "John";
    }
});

function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    if (nama == "" || email == "" || pesan == "") {
        alert("Semua bidang harus diisi!");
        return false;
    }

    // Tambahkan kode untuk menampilkan nilai
    console.log("Nama: " + nama);
    console.log("Email: " + email);
    console.log("Pesan: " + pesan);

    return true;
}
