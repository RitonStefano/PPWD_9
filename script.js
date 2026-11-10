/* ===== DATA PROYEK ===== */
const projects = [
    {
        name: "Buku Tamu Digital",
        description: "Website formulir pencatatan tamu kantor dari tugas Modul 12.",
        url: "MODUL12/buku-tamu-digital/index.html",
        icon: "📋",
        category: "Website"
    },
    {
        name: "MAV Platform",
        description: "Website dengan tampilan menu berbeda untuk setiap peran pengguna.",
        url: "MODUL12/mav-platform/index.html",
        icon: "🧩",
        category: "Website"
    },
    {
        name: "Dashboard Admin CampusFlow",
        description: "Dashboard admin menggunakan Bootstrap dengan statistik, tabel, sidebar, dan modal.",
        url: "Dashboard_H1101251042_RitonStefano/index.html",
        icon: "📊",
        category: "Dashboard"
    },
    {
        name: "Praktik CSS",
        description: "Latihan penerapan CSS dan pengaturan tampilan halaman web.",
        url: "PRAKTIK-CSS/INDEX.HTML",
        icon: "🎨",
        category: "Praktikum"
    },
    {
        name: "Praktik CSS Mandiri",
        description: "Proyek latihan CSS mandiri dengan halaman profil dan foto.",
        url: "PraktikCSS-Mandiri/index.html",
        icon: "🖌️",
        category: "Praktikum"
    },
    {
        name: "Praktikum 5 - Kalkulator",
        description: "Latihan JavaScript membuat kalkulator sederhana.",
        url: "Praktikum5/kalkulator.html",
        icon: "🧮",
        category: "Pemrograman"
    },
    {
        name: "Praktikum 5 - BMI",
        description: "Program untuk menghitung indeks massa tubuh.",
        url: "Praktikum5/BMI.html",
        icon: "⚖️",
        category: "Pemrograman"
    },
    {
        name: "Praktikum 5 - Konversi Nilai",
        description: "Program konversi nilai angka menjadi nilai huruf.",
        url: "Praktikum5/KonversiNilai.html",
        icon: "📝",
        category: "Pemrograman"
    },
    {
        name: "Praktikum 5 - Ganjil Genap",
        description: "Program untuk menentukan bilangan ganjil atau genap.",
        url: "Praktikum5/ganjilgenap.html",
        icon: "🔢",
        category: "Pemrograman"
    },
    {
        name: "Praktikum 5 - Diskon",
        description: "Program perhitungan harga setelah mendapatkan diskon.",
        url: "Praktikum5/diskon.html",
        icon: "🏷️",
        category: "Pemrograman"
    },
    {
        name: "Praktikum 5 - Konversi Suhu",
        description: "Program untuk mengubah nilai suhu antar satuan.",
        url: "Praktikum5/suhu.html",
        icon: "🌡️",
        category: "Pemrograman"
    },
    {
        name: "UTS Pemrograman Web",
        description: "Hasil pengerjaan Ujian Tengah Semester Pemrograman Web.",
        url: "UTS/UTS_H1101251042_RitonStefano.html",
        icon: "📚",
        category: "Praktikum"
    },
    {
        name: "Toko Sepatu Jaya",
        description: "Landing page toko sepatu dengan tampilan dan fitur interaktif.",
        url: "sepatu-jaya/index.html",
        icon: "👟",
        category: "Website"
    },
    {
        name: "Website Kopi",
        description: "Website untuk menampilkan produk dan informasi kopi.",
        url: "web-kopi/webkopi.html",
        icon: "☕",
        category: "Website"
    },
    {
        name: "Website Berita",
        description: "Website penyajian informasi dan artikel berita.",
        url: "berita/index.html",
        icon: "📰",
        category: "Website"
    },
    {
        name: "Web Profil",
        description: "Halaman profil dari tugas pengembangan website.",
        url: "Tugas9_H1101251042_RitonStefano/WebProfil.html",
        icon: "👤",
        category: "Website"
    },
    {
        name: "Toko Online",
        description: "Halaman toko dari tugas pengembangan website.",
        url: "Tugas9_H1101251042_RitonStefano/Toko.html",
        icon: "🛍️",
        category: "Website"
    },
    {
        name: "Portofolio Personal",
        description: "Website portofolio dengan halaman beranda, tentang, dan kontak.",
        url: "Portofolio/index.html",
        icon: "💼",
        category: "Website"
    }
];

/* ===== ELEMEN HTML ===== */
const projectList = document.getElementById("project-list");
const searchInput = document.getElementById("search");
const projectCount = document.getElementById("project-count");
const emptyMessage = document.getElementById("empty-message");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "Semua";

/* ===== MEMBUAT KARTU PROYEK ===== */
function displayProjects(data) {
    projectList.replaceChildren();
    projectCount.textContent = `${data.length} proyek tersedia`;
    emptyMessage.hidden = data.length !== 0;

    data.forEach((project, index) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.style.animationDelay = `${index * 0.04}s`;

        const icon = document.createElement("div");
        icon.className = "project-icon";
        icon.textContent = project.icon;
        icon.setAttribute("aria-hidden", "true");

        const category = document.createElement("span");
        category.className = "project-category";
        category.textContent = project.category;

        const title = document.createElement("h3");
        title.textContent = project.name;

        const description = document.createElement("p");
        description.textContent = project.description;

        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.url;
        link.setAttribute("aria-label", `Buka ${project.name}`);

        const linkText = document.createElement("span");
        linkText.textContent = "Buka Proyek";

        const arrow = document.createElement("span");
        arrow.textContent = "↗";
        arrow.setAttribute("aria-hidden", "true");

        link.append(linkText, arrow);
        card.append(icon, category, title, description, link);
        projectList.appendChild(card);
    });
}

/* ===== PENCARIAN DAN FILTER ===== */
function filterProjects() {
    const keyword = searchInput.value.trim().toLowerCase();

    const filteredProjects = projects.filter((project) => {
        const matchesKeyword =
            project.name.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword) ||
            project.category.toLowerCase().includes(keyword);

        const matchesCategory =
            selectedCategory === "Semua" || project.category === selectedCategory;

        return matchesKeyword && matchesCategory;
    });

    displayProjects(filteredProjects);
}

searchInput.addEventListener("input", filterProjects);

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        filterButtons.forEach((item) => {
            item.classList.toggle("active", item === button);
        });

        filterProjects();
    });
});

/* ===== TAHUN OTOMATIS ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== TAMPILKAN SEMUA PROYEK ===== */
displayProjects(projects);
