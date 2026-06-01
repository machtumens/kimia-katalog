const dapurData = [
  {
    produk: '1. Stella / Glade — Pengharum Ruangan',
    img: 'stella.jpg',
    senyawa: [
      { nama: 'Linalool', rumus: 'C₁₀H₁₈O', kat: 'aditif', katLabel: 'Aroma Aktif',
        fungsi: 'Bahan aktif aroma utama (bunga/lavender) yang bekerja pada reseptor olfaktori untuk memberikan sensasi segar menyenangkan.' },
      { nama: 'Limonena', rumus: 'C₁₀H₁₆', kat: 'aditif', katLabel: 'Aroma Citrus',
        fungsi: 'Komponen aroma citrus yang juga berfungsi sebagai pelarut dan memiliki efek antimikroba ringan di udara.' },
      { nama: 'Benzil Asetat', rumus: 'C₉H₁₀O₂', kat: 'aditif', katLabel: 'Aroma Floral',
        fungsi: 'Komponen aroma floral (melati/gardenia) yang merupakan ester volatil untuk distribusi wewangian di udara.' },
      { nama: 'Isobutana / Propana', rumus: 'Gas propelan (LPG)', kat: 'filler', katLabel: 'Propelan',
        fungsi: 'Pendorong aerosol yang mengubah cairan parfum menjadi partikel halus tersebar merata di ruangan.' },
      { nama: 'Etanol', rumus: 'C₂H₅OH', kat: 'filler', katLabel: 'Pelarut',
        fungsi: 'Pelarut pembawa yang melarutkan komponen parfum dan membantu penguapan cepat aroma.' },
      { nama: 'Cyclamen Aldehyde', rumus: 'Aromatik aldehida', kat: 'aditif', katLabel: 'Fiksatif Aroma',
        fungsi: 'Fiksatif dan enhancer aroma yang memperpanjang ketahanan wewangian di ruangan.' },
    ]
  },
  {
    produk: '2. Paseo / Nice — Tisu',
    img: 'paseo.jpeg',
    senyawa: [
      { nama: 'Selulosa Serat Kayu', rumus: 'Polimer alami (pulp)', kat: 'builder', katLabel: 'Material Utama',
        fungsi: 'Material utama tisu yang memberikan struktur, kekuatan tarik, dan kemampuan penyerapan cairan.' },
      { nama: 'Karboximetil Selulosa (CMC)', rumus: 'Polimer selulosa termodifikasi', kat: 'aditif', katLabel: 'Binder',
        fungsi: 'Binder yang mengikat serat selulosa agar tisu memiliki kekuatan basah dan tidak mudah hancur.' },
      { nama: 'Aloe Vera Ekstrak', rumus: 'Polisakarida alami', kat: 'aditif', katLabel: 'Pelembut',
        fungsi: 'Komponen pelembut pada tisu premium yang memberikan efek lembap dan lembut di kulit.' },
      { nama: 'Parfum Ringan', rumus: 'Campuran aromatik', kat: 'aditif', katLabel: 'Parfum',
        fungsi: 'Memberikan aroma segar ringan pada tisu wajah/tisu dapur (kadar sangat rendah).' },
      { nama: 'Agen Pemutih Optis', rumus: 'Stilbena derivat', kat: 'pemutih', katLabel: 'Pencerah Optis',
        fungsi: 'Memberikan tampilan putih bersih pada tisu melalui absorpsi UV dan emisi cahaya tampak.' },
    ]
  },
  {
    produk: '3. Bagush / Swallow — Kamper / Kapur Barus',
    img: 'bagus.webp',
    senyawa: [
      { nama: 'Paradiklorobenzena (PDB)', rumus: 'C₆H₄Cl₂', kat: 'antibakteri', katLabel: 'Fumigan Aktif',
        fungsi: 'Bahan aktif utama yang menyublim perlahan melepas uap toksik bagi serangga (ngengat, kecoa) dan berfungsi sebagai desinfektan lemari pakaian.' },
      { nama: 'Naftalena', rumus: 'C₁₀H₈', kat: 'antibakteri', katLabel: 'Ko-Fumigan',
        fungsi: 'Ko-aktif fumigan alternatif (formulasi tradisional) yang menyublim memberikan bau khas kamper sebagai repelen serangga.' },
      { nama: 'Kamper Sintetik', rumus: 'C₁₀H₁₆O (borneol teroksidasi)', kat: 'aditif', katLabel: 'Aromatik',
        fungsi: 'Komponen aromatik terpen yang memberikan aroma kamper khas dan efek pengusir serangga tambahan.' },
      { nama: 'Pewarna', rumus: 'Pigmen organik', kat: 'aditif', katLabel: 'Pewarna',
        fungsi: 'Identifikasi produk (biru, merah, putih) dan indikator visual sisa kamper yang belum menyublim.' },
    ]
  },
  {
    produk: '4. Kiwi — Semir Sepatu',
    img: 'kiwi.jpg',
    senyawa: [
      { nama: 'Carnauba Wax', rumus: 'Ester asam lemak alami', kat: 'aditif', katLabel: 'Wax Utama',
        fungsi: 'Bahan aktif utama yang memberikan lapisan pelindung mengkilap pada kulit sepatu dan menolak air.' },
      { nama: 'Beeswax (Lilin Lebah)', rumus: 'Ester asam palmitat', kat: 'aditif', katLabel: 'Ko-Wax',
        fungsi: 'Ko-wax yang melunakkan kulit dan menjaga fleksibilitas material agar tidak retak.' },
      { nama: 'Naphtha / White Spirit', rumus: 'Hidrokarbon alifatik', kat: 'filler', katLabel: 'Pelarut',
        fungsi: 'Pelarut pembawa yang melarutkan wax dan pigmen serta menguap setelah aplikasi meninggalkan lapisan kilap.' },
      { nama: 'Pigmen Karbon / Anorganik', rumus: 'Carbon black / Oksida logam', kat: 'aditif', katLabel: 'Pigmen Warna',
        fungsi: 'Memberikan warna sesuai kulit sepatu (hitam, cokelat, netral) sekaligus menutup goresan minor.' },
      { nama: 'Turpentine', rumus: 'Terpena (α-pinena)', kat: 'filler', katLabel: 'Pelarut Alami',
        fungsi: 'Pelarut alami yang membantu penetrasi wax ke pori-pori kulit sepatu untuk perawatan lebih dalam.' },
    ]
  },
  {
    produk: '5. Autan / Soffell — Losion Anti Nyamuk',
    img: 'soffel.png',
    senyawa: [
      { nama: 'DEET (N,N-diethyl-meta-toluamide)', rumus: 'C₁₂H₁₇NO', kat: 'antibakteri', katLabel: 'Repelen Utama',
        fungsi: 'Bahan aktif utama yang menghalangi reseptor olfaktori nyamuk terhadap asam laktat dan CO₂ dari kulit manusia.' },
      { nama: 'Icaridin (Picaridine)', rumus: 'C₁₂H₂₃NO₃', kat: 'antibakteri', katLabel: 'Repelen Alternatif',
        fungsi: 'Alternatif DEET yang lebih lembut di kulit, memblokir reseptor bau nyamuk tanpa merusak plastik atau sintetis.' },
      { nama: 'Eucalyptus Oil (PMD)', rumus: 'p-menthan-3,8-diol', kat: 'antibakteri', katLabel: 'Repelen Alami',
        fungsi: 'Bahan aktif alami berbasis minyak eucalyptus lemon yang efektif sebagai repelen serangga.' },
      { nama: 'Isopropil Miristat', rumus: 'C₁₇H₃₄O₂', kat: 'aditif', katLabel: 'Emolien',
        fungsi: 'Emolien dan pelarut yang membantu distribusi bahan aktif merata di kulit dan memberikan rasa tidak lengket.' },
      { nama: 'Etanol', rumus: 'C₂H₅OH', kat: 'filler', katLabel: 'Pelarut',
        fungsi: 'Pelarut pembawa pada formulasi spray yang mempercepat penguapan dan distribusi bahan aktif.' },
      { nama: 'Karbomer', rumus: 'Polimer akrilik', kat: 'aditif', katLabel: 'Pengental',
        fungsi: 'Pengental gel/losion yang menjaga konsistensi produk dan memperlambat evaporasi DEET dari kulit.' },
    ]
  },
];
