export const data = {
    
    bride: {
        L: {
            id: 1,
            name: 'Jaka  S.Kom',
            child: 'Putra ke Empat',
            father: 'Asmarni',
            mother: 'Lamidah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Harinurdian  S.E',
            child: 'Putri ke Pertama',
            father: 'Hatta',
            mother: 'Sumartik',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'April',
            date: '10',
            day: 'Jumaat',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Mei',
            date: '29',
            day: 'Jumaat',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl. Pimpinan, Desa Pipitteja, Kec. Tlk. Keramat, Kabupaten Sambas, Kalimantan Barat 79469, Indonesia'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/3YYemBmdvS864x65A',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Jaka',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Harinurdian',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycby97rq9KZjM9WdjDhADo2F9vL7Rjys1zTnJm8HQ1-dpCyadRtKOKvkNswrNKnT6HQ3BBQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
