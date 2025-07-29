const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const portfolioData = [
    {
        nama: "Aditya Firmansyah",
        jk: "Laki-laki",
        kontak: "08123456789",
        status: "Bekerja",
        hobi: "Coding, Musik",
        lulusan: "Universitas ABC",
        instagram: "https://instagram.com/aditya",
        linkedin: "https://linkedin.com/in/aditya",
        facebook: "https://facebook.com/aditya",
        portfolio: "https://drive.google.com/portfolio-aditya",
        pengalaman: "3 tahun pengalaman di bidang web development.",
        cv: "cv_aditya.pdf",
        foto: "foto_aditya.jpg"
    }
];

app.get('/api/portfolio', (req, res) => {
    res.json(portfolioData);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
