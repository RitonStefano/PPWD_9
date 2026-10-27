
const daftar = document.getElementById("daftar");

// Jalankan fungsi saat tombol simpan diklik
document.getElementById("simpan").addEventListener("click", function () {

    // Ambil nilai dari input
    const nama = document.getElementById("nama").value;
    const instansi = document.getElementById("instansi").value;

    // Periksa apakah nama sudah diisi
    if (nama === "") {
        alert("Nama wajib diisi");
        return;
    }

    // Buat item daftar baru
    const item = document.createElement("li");
    item.textContent = nama + " - " + instansi;

    // Tambahkan item ke daftar
    daftar.appendChild(item);

    // Kosongkan input setelah data disimpan
    document.getElementById("nama").value = "";
    document.getElementById("instansi").value = "";

});