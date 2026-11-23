
const soal = [
    {
        pertanyaan: "Apa manfaat menanam pohon?",
        jawaban: [
            "Mengurangi oksigen",
            "Menghasilkan oksigen",
            "Merusak tanah",
            "Mencemari udara"
        ],
        benar: 1
    },
    {
        pertanyaan: "Apa arti dari prinsip 3R?",
        jawaban: [
            "Reduce, Reuse, Recycle",
            "Run, Read, Rest",
            "Repair, Remove, Return",
            "Reuse, Reject, Repeat"
        ],
        benar: 0
    },
    {
        pertanyaan: "Bagaimana cara menghemat air?",
        jawaban: [
            "Membiarkan keran terbuka",
            "Membuang air bersih",
            "Menutup keran setelah digunakan",
            "Menggunakan air berlebihan"
        ],
        benar: 2
    },
    {
        pertanyaan: "Apa yang harus dilakukan terhadap sampah?",
        jawaban: [
            "Membuangnya ke sungai",
            "Membakarnya sembarangan",
            "Membuangnya di jalan",
            "Memilah dan membuang pada tempatnya"
        ],
        benar: 3
    },
    {
        pertanyaan: "Mengapa kita harus menjaga hutan?",
        jawaban: [
            "Agar pohon habis",
            "Untuk menjaga keseimbangan ekosistem",
            "Agar hewan kehilangan habitat",
            "Untuk memperbanyak polusi"
        ],
        benar: 1
    }
];

let nomor = 0;
let skor = 0;
let poin = 0;
let terkunci = false;

function mulaiGame() {
    nomor = 0;
    skor = 0;
    tampilkanSoal();
    document.getElementById("game").scrollIntoView({
        behavior: "smooth"
    });
}

function tampilkanSoal() {
    terkunci = false;

    if (nomor >= soal.length) {
        document.getElementById("pertanyaan").innerText =
            "Kuis selesai!";

        document.getElementById("jawaban").innerHTML = "";

        document.getElementById("hasil").innerText =
            "Skor kamu: " + skor + " dari 100";

        return;
    }

    let data = soal[nomor];

    document.getElementById("pertanyaan").innerText =
        (nomor + 1) + ". " + data.pertanyaan;

    document.getElementById("hasil").innerText = "";

    let html = "";

    data.jawaban.forEach((jawaban, index) => {
        html += `<button onclick="periksaJawaban(${index})">
            ${jawaban}
        </button>`;
    });

    document.getElementById("jawaban").innerHTML = html;
}

function periksaJawaban(pilihan) {
    if (terkunci) return;
    terkunci = true;

    if (pilihan === soal[nomor].benar) {
        skor += 20;
        document.getElementById("hasil").innerText =
            "Benar! Hebat, kamu mendapat 20 poin 🌟";
    } else {
        document.getElementById("hasil").innerText =
            "Jawaban belum tepat. Tetap semangat!";
    }

    document.getElementById("jawaban").innerHTML +=
        `<button onclick="soalBerikutnya()">Lanjutkan →</button>`;
}

function soalBerikutnya() {
    nomor++;
    tampilkanSoal();
}

function tambahPoin(checkbox) {
    if (checkbox.checked) {
        poin += 10;
    } else {
        poin -= 10;
    }

    document.getElementById("poin").innerText = poin;
}
