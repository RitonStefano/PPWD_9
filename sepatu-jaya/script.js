$(document).ready(function () {
    // Efek jQuery 1: fade-in untuk konten utama saat halaman dibuka.
    $(".hero-copy").hide().fadeIn(900);
    $(".hero-visual").hide().delay(250).fadeIn(900);

    // Efek jQuery 2: slideToggle untuk menu navigasi versi mobile.
    $(".menu-toggle").on("click", function () {
        $(".nav-links").slideToggle(250).toggleClass("open");
    });

    // Tutup menu mobile setelah tautan navigasi dipilih.
    $(".nav-links a").on("click", function () {
        if (window.innerWidth <= 700) {
            $(".nav-links").slideUp(200).removeClass("open");
        }
    });

    // Navigasi tab: tampilkan produk sesuai kategori yang dipilih.
    $(".tab").on("click", function () {
        const kategori = $(this).data("category");

        $(".tab").removeClass("active").attr("aria-selected", "false");
        $(this).addClass("active").attr("aria-selected", "true");

        if (kategori === "semua") {
            // Efek jQuery 3: fadeIn untuk menampilkan semua produk.
            $(".product-card").stop(true, true).fadeIn(300);
        } else {
            $(".product-card").stop(true, true).hide();
            $('.product-card[data-category="' + kategori + '"]').fadeIn(350);
        }
    });
    

    // Efek jQuery 4: animate untuk menggulir ke form dan menyorotnya.
    $(".choose-product").on("click", function () {
        const namaProduk = $(this).data("product");
        $("#produkPilihan").val(namaProduk);

        $("html, body").animate({
            scrollTop: $("#pesan").offset().top - 75
        }, 600);

        $(".order-form").stop(true).animate({ opacity: 0.65 }, 180, function () {
            $(this).animate({ opacity: 1 }, 250);
        });
    });

    // Validasi form menggunakan jQuery Validation Plugin.
    $("#orderForm").validate({
        rules: {
            nama: { required: true, minlength: 3 },
            email: { required: true, email: true },
            telepon: { required: true, digits: true, minlength: 10, maxlength: 15 },
            produkPilihan: { required: true },
            ukuran: { required: true },
            jumlah: { required: true, digits: true, min: 1, max: 10 },
            alamat: { required: true, minlength: 10 },
            pembayaran: { required: true },
            persetujuan: { required: true }
        },
        messages: {
            nama: {
                required: "Nama lengkap wajib diisi.",
                minlength: "Nama minimal terdiri dari 3 karakter."
            },
            email: {
                required: "Email wajib diisi.",
                email: "Masukkan format email yang valid."
            },
            telepon: {
                required: "Nomor telepon wajib diisi.",
                digits: "Nomor telepon hanya boleh berisi angka.",
                minlength: "Nomor telepon minimal 10 digit.",
                maxlength: "Nomor telepon maksimal 15 digit."
            },
            produkPilihan: "Silakan pilih model sepatu.",
            ukuran: "Silakan pilih ukuran sepatu.",
            jumlah: {
                required: "Jumlah pesanan wajib diisi.",
                digits: "Jumlah harus berupa angka bulat.",
                min: "Minimal pemesanan 1 pasang.",
                max: "Maksimal pemesanan 10 pasang."
            },
            alamat: {
                required: "Alamat pengiriman wajib diisi.",
                minlength: "Alamat minimal terdiri dari 10 karakter."
            },
            pembayaran: "Silakan pilih metode pembayaran.",
            persetujuan: "Centang persetujuan sebelum mengirim pesanan."
        },
        errorElement: "label",
        errorPlacement: function (error, element) {
            if (element.attr("name") === "persetujuan") {
                error.insertAfter(element.closest(".checkbox-group").find("label"));
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            const nama = $("#nama").val();
            const produk = $("#produkPilihan").val();
            $("#formMessage")
                .removeClass("fail")
                .addClass("success")
                .text("Terima kasih, " + nama + "! Pesanan " + produk +
                    " berhasil divalidasi. Ini masih demo, data belum dikirim ke server.");

            // Form tidak dikirim ke server karena tugas ini hanya membuat front-end.
            return false;
        }
    });
});
