const p3kData = [
  {
    produk: '1. Betadine — Antiseptik Povidone-Iodine',
    img: 'betadine.jpg',
    senyawa: [
      { nama: 'Povidone-Iodine (PVP-I)', rumus: 'Kompleks polimer-iodin (10%)', kat: 'antibakteri', katLabel: 'Antiseptik Aktif',
        fungsi: 'Bahan aktif utama yang melepas iodin bebas secara perlahan untuk membunuh bakteri, jamur, virus, dan spora pada luka.' },
      { nama: 'Polivinil Pirolidon (PVP)', rumus: 'Polimer pembawa', kat: 'aditif', katLabel: 'Matriks Polimer',
        fungsi: 'Matriks polimer yang mengikat iodin dan melepasnya secara terkontrol agar tidak merusak jaringan sehat.' },
      { nama: 'Gliserin', rumus: 'C₃H₈O₃', kat: 'aditif', katLabel: 'Humektan',
        fungsi: 'Humektan yang menjaga kelembapan luka dan mencegah kekeringan saat antiseptik diaplikasikan.' },
      { nama: 'Natrium Hidroksida', rumus: 'NaOH', kat: 'builder', katLabel: 'Pengatur pH',
        fungsi: 'Pengatur pH agar formulasi stabil dan tidak terlalu asam pada jaringan luka.' },
      { nama: 'Air', rumus: 'H₂O', kat: 'filler', katLabel: 'Pelarut Utama',
        fungsi: 'Pelarut utama yang mendistribusikan kompleks PVP-I secara homogen.' },
    ]
  },
  {
    produk: '2. Hansaplast — Plester Luka',
    img: 'hansaplast.webp',
    senyawa: [
      { nama: 'Poliuretan / Kain Non-woven', rumus: 'Polimer sintetik', kat: 'builder', katLabel: 'Material Bantalan',
        fungsi: 'Material bantalan penyerap yang melindungi luka dari gesekan dan kontaminasi eksternal.' },
      { nama: 'Akrilik Sensitif Tekanan', rumus: 'PSA (Pressure Sensitive Adhesive)', kat: 'aditif', katLabel: 'Perekat',
        fungsi: 'Perekat berbasis polimer akrilik yang menempel pada kulit tanpa merusak saat dilepas.' },
      { nama: 'Polietilen / Rayon', rumus: 'Polimer film', kat: 'builder', katLabel: 'Lapisan Backing',
        fungsi: 'Lapisan backing kedap air yang mencegah masuknya bakteri dan air ke area luka.' },
      { nama: 'Benzalkonium Klorida', rumus: 'QAC (antibakteri)', kat: 'antibakteri', katLabel: 'Antiseptik',
        fungsi: 'Lapisan antiseptik pada bantalan yang menghambat infeksi bakteri pada luka ringan (varian antiseptik).' },
      { nama: 'Zinc Oxide', rumus: 'ZnO', kat: 'antibakteri', katLabel: 'Antibakteri',
        fungsi: 'Komponen antibakteri dan anti-inflamasi ringan pada formula plester khusus.' },
    ]
  },
  {
    produk: '3. Minyak Kayu Putih — Cap Lang / Konicare',
    img: 'minyak kayu putih.webp',
    senyawa: [
      { nama: '1,8-Sineol (Eukaliptol)', rumus: 'C₁₀H₁₈O (50-65%)', kat: 'antibakteri', katLabel: 'Aktif Utama',
        fungsi: 'Bahan aktif utama yang memberikan efek hangat, analgesik ringan, dan antiseptik; menstimulasi reseptor TRPM8 menghasilkan sensasi hangat.' },
      { nama: 'α-Terpineol', rumus: 'Monoterpenoid alkohol', kat: 'aditif', katLabel: 'Ko-Aktif',
        fungsi: 'Ko-aktif yang berkontribusi pada efek relaksasi otot dan antiseptik ringan.' },
      { nama: 'Limonena', rumus: 'C₁₀H₁₆', kat: 'aditif', katLabel: 'Terpena Aromatik',
        fungsi: 'Terpena yang memberikan aroma khas dan efek anti-inflamasi ringan.' },
      { nama: 'Felandrena', rumus: 'Monoterpena', kat: 'aditif', katLabel: 'Komponen Aroma',
        fungsi: 'Komponen aroma minyak kayu putih yang memberikan nuansa segar.' },
      { nama: 'Minyak Gandapura / Mentol', rumus: 'Metil Salisilat / Mentol', kat: 'antibakteri', katLabel: 'Ko-Aktif',
        fungsi: 'Ko-aktif counterirritant yang menambah sensasi hangat dan efek relaksasi (pada varian Cap Lang).' },
    ]
  },
  {
    produk: '4. Salonpas / Hansaplast Koyo — Plester Pereda Nyeri',
    img: 'salonpas.jpg',
    senyawa: [
      { nama: 'Metil Salisilat', rumus: 'C₈H₈O₃', kat: 'antibakteri', katLabel: 'NSAID Topikal',
        fungsi: 'Bahan aktif utama sebagai NSAID topikal yang menginhibisi COX dan memberikan efek analgesik/anti-inflamasi pada otot.' },
      { nama: 'Mentol', rumus: 'C₁₀H₂₀O', kat: 'antibakteri', katLabel: 'Counterirritant',
        fungsi: 'Ko-aktif counterirritant yang mengaktivasi reseptor TRPM8 memberikan sensasi dingin untuk mengurangi persepsi nyeri.' },
      { nama: 'Kapsaisin', rumus: 'C₁₈H₂₇NO₃', kat: 'antibakteri', katLabel: 'Counterirritant',
        fungsi: 'Ko-aktif counterirritant yang menguras substansi P (neurotransmiter nyeri) dari ujung saraf perifer.' },
      { nama: 'Kamfor', rumus: 'C₁₀H₁₆O', kat: 'aditif', katLabel: 'Ko-Analgesik',
        fungsi: 'Ko-analgesik yang meningkatkan sirkulasi darah lokal dan memberikan efek hangat pada jaringan otot.' },
      { nama: 'Matriks Akrilik / Karet', rumus: 'PSA polimer', kat: 'aditif', katLabel: 'Basis Plester',
        fungsi: 'Basis plester yang menjaga bahan aktif tetap menempel di kulit dan melepasnya secara bertahap (transdermal delivery).' },
    ]
  },
  {
    produk: '5. Safe Care / Fresh Care — Minyak Angin Aromaterapi',
    img: 'safe care.webp',
    senyawa: [
      { nama: 'Mentol', rumus: 'C₁₀H₂₀O', kat: 'antibakteri', katLabel: 'Aktif Utama',
        fungsi: 'Bahan aktif utama yang mengaktifkan reseptor TRPM8 memberikan sensasi dingin menyegarkan dan melegakan pernapasan.' },
      { nama: 'Minyak Pepermint', rumus: 'Mentha piperita oil', kat: 'antibakteri', katLabel: 'Minyak Esensial',
        fungsi: 'Sumber mentol alami yang memberikan efek aromaterapi dan dekongestif ringan pada saluran napas.' },
      { nama: 'Minyak Lavender', rumus: 'Linalool / Linalil asetat', kat: 'aditif', katLabel: 'Aromaterapi',
        fungsi: 'Komponen relaksasi yang memiliki efek anxiolitik ringan dan membantu meredakan sakit kepala.' },
      { nama: 'Minyak Eukaliptus', rumus: '1,8-Sineol', kat: 'antibakteri', katLabel: 'Ko-Aktif',
        fungsi: 'Ko-aktif yang melegakan hidung tersumbat dan memberikan sensasi segar pada pernapasan.' },
      { nama: 'Minyak Gandapura', rumus: 'Metil Salisilat', kat: 'aditif', katLabel: 'Ko-Analgesik',
        fungsi: 'Ko-analgesik counterirritant yang memberikan efek hangat pada formulasi minyak angin.' },
      { nama: 'Isopropanol / Etanol', rumus: 'Alkohol', kat: 'filler', katLabel: 'Pelarut',
        fungsi: 'Pelarut pembawa yang memudahkan penyebaran minyak esensial pada kulit dan mempercepat penguapan aromatik.' },
    ]
  },
];
