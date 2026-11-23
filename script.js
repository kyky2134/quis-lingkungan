
const questions = [
    {
        question: "Kapan Indonesia memproklamasikan kemerdekaan?",
        options: [
            "17 Agustus 1945",
            "10 November 1945",
            "1 Juni 1945",
            "20 Mei 1908"
        ],
        answer: 0,
        explanation: "Indonesia memproklamasikan kemerdekaan pada 17 Agustus 1945. Proklamasi dibacakan oleh Soekarno didampingi Mohammad Hatta di Jalan Pegangsaan Timur No. 56, Jakarta."
    },
    {
        question: "Siapa presiden pertama Republik Indonesia?",
        options: [
            "Soeharto",
            "Soekarno",
            "Mohammad Hatta",
            "B.J. Habibie"
        ],
        answer: 1,
        explanation: "Soekarno merupakan presiden pertama Republik Indonesia. Ia menjabat sejak tahun 1945 hingga 1967."
    },
    {
        question: "Siapa wakil presiden pertama Indonesia?",
        options: [
            "Sutan Sjahrir",
            "Ahmad Yani",
            "Mohammad Hatta",
            "Ki Hajar Dewantara"
        ],
        answer: 2,
        explanation: "Mohammad Hatta adalah wakil presiden pertama Indonesia. Ia mendampingi Soekarno setelah kemerdekaan."
    },
    {
        question: "Apa nama organisasi pergerakan nasional yang berdiri pada 20 Mei 1908?",
        options: [
            "Sarekat Islam",
            "Budi Utomo",
            "Indische Partij",
            "Perhimpunan Indonesia"
        ],
        answer: 1,
        explanation: "Budi Utomo berdiri pada 20 Mei 1908. Organisasi ini menjadi salah satu pelopor kebangkitan nasional Indonesia."
    },
    {
        question: "Kapan peristiwa Sumpah Pemuda terjadi?",
        options: [
            "17 Agustus 1945",
            "28 Oktober 1928",
            "1 Juni 1945",
            "10 November 1945"
        ],
        answer: 1,
        explanation: "Sumpah Pemuda berlangsung pada 28 Oktober 1928. Peristiwa ini menegaskan persatuan tanah air, bangsa, dan bahasa Indonesia."
    },
    {
        question: "Siapa tokoh yang dikenal sebagai Bapak Pendidikan Nasional?",
        options: [
            "Ki Hajar Dewantara",
            "Soekarno",
            "Mohammad Yamin",
            "Pangeran Diponegoro"
        ],
        answer: 0,
        explanation: "Ki Hajar Dewantara dikenal sebagai Bapak Pendidikan Nasional. Ia mendirikan Taman Siswa pada tahun 1922."
    },
    {
        question: "Apa nama pertempuran besar pada 10 November 1945?",
        options: [
            "Bandung Lautan Api",
            "Pertempuran Ambarawa",
            "Pertempuran Surabaya",
            "Perang Diponegoro"
        ],
        answer: 2,
        explanation: "Pertempuran Surabaya terjadi pada 10 November 1945. Peristiwa ini menjadi simbol perjuangan rakyat mempertahankan kemerdekaan Indonesia."
    },
    {
        question: "Siapa tokoh yang mengetik naskah Proklamasi Kemerdekaan Indonesia?",
        options: [
            "Sayuti Melik",
            "Ahmad Soebardjo",
            "Mohammad Hatta",
            "Sutan Sjahrir"
        ],
        answer: 0,
        explanation: "Sayuti Melik mengetik naskah Proklamasi yang sebelumnya dirumuskan oleh Soekarno, Mohammad Hatta, dan Ahmad Soebardjo."
    },
    {
        question: "Kapan Indonesia resmi menjadi anggota PBB?",
        options: [
            "1945",
            "1948",
            "1950",
            "1965"
        ],
        answer: 2,
        explanation: "Indonesia resmi menjadi anggota Perserikatan Bangsa-Bangsa (PBB) pada 28 September 1950."
    },
    {
        question: "Siapa pahlawan wanita dari Aceh yang terkenal melawan Belanda?",
        options: [
            "R.A. Kartini",
            "Cut Nyak Dien",
            "Dewi Sartika",
            "Martha Christina Tiahahu"
        ],
        answer: 1,
        explanation: "Cut Nyak Dien adalah pahlawan nasional dari Aceh yang memimpin perjuangan melawan penjajahan Belanda dalam Perang Aceh."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        `Soal ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("score").innerText =
        `Skor: ${score}`;

    document.getElementById("progressBar").style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option";
        button.innerText =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.onclick = () => checkAnswer(index, button);

        optionsDiv.appendChild(button);
    });

    const explanation = document.getElementById("explanation");

    explanation.style.display = "none";
    explanation.className = "explanation";
    explanation.innerHTML = "";

    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selected, button) {
    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach((option, index) => {
        option.disabled = true;

        if (index === q.answer) {
            option.classList.add("correct");
        }
    });

    const explanation = document.getElementById("explanation");

    if (selected === q.answer) {
        score += 10;

        explanation.className = "explanation correct-box";
        explanation.innerHTML = `
            <strong>✅ Jawaban Benar!</strong><br>
            ${q.explanation}
        `;
    } else {
        button.classList.add("wrong");

        explanation.className = "explanation wrong-box";
        explanation.innerHTML = `
            <strong>❌ Jawaban Salah!</strong><br>
            Jawaban yang benar adalah:
            <strong>${q.options[q.answer]}</strong>
            <br><br>
            <strong>📚 Penjelasan:</strong><br>
            ${q.explanation}
        `;
    }

    document.getElementById("score").innerText =
        `Skor: ${score}`;

    document.getElementById("nextBtn").style.display = "block";

    document.getElementById("nextBtn").innerText =
        currentQuestion === questions.length - 1
        ? "Lihat Hasil Quiz"
        : "Soal Berikutnya →";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("finalScore").innerText =
        `Skor Kamu: ${score} / 100`;

    let message = "";

    if (score === 100) {
        message = "🏆 Luar biasa! Kamu sangat memahami sejarah Indonesia!";
    } else if (score >= 70) {
        message = "👏 Bagus! Pengetahuan sejarahmu sudah cukup baik.";
    } else if (score >= 40) {
        message = "👍 Lumayan! Terus belajar sejarah Indonesia.";
    } else {
        message = "📖 Jangan menyerah! Pelajari kembali sejarah Indonesia.";
    }

    document.getElementById("message").innerText = message;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";

    loadQuestion();
}

loadQuestion();
