const allProducts = [
  // ============ KULINER (1-10) ============
  { id:1, name:'Abon Sapi Pedas', category:'Kuliner', price:35000, umkm:'Sari Rasa', umkmId:1, sold:230, badge:'Terlaris', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuDvDM4b6Kklx17DQyxH83AhBVadEvZgJKeL0XMPYx1ZUMA0cmgF7dH-_rC6FgUFvVlVG06nvuOe0qjlR03RfRQjvxcigTUdi0wRMdwKCUkpLp-yq9khGiOCpeANZg54pDB5sW7ljeh0YjRS3w73wKKHUUTKieJuZH0vCTXuQDjLQvYM2mJsQUkv6vUAz5C6Qph08YRZU6b6-G7hQ0SvwG8cvtJm8MVbuVlDZnKXm2X9kIukAK8TAaG94CH7L82-Ij6rjQbqFbSq', wa:'6282261375532', desc:'Abon sapi pedas dari daging pilihan dengan resep tradisional. Tanpa pengawet, cocok untuk lauk atau camilan.', info:'200gr / 500gr' },
  { id:2, name:'Dendeng Sapi Manis', category:'Kuliner', price:45000, umkm:'Sari Rasa', umkmId:1, sold:185, badge:'', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuCOgJiq2PRRcTmbVIwfZHSYrakdzzQSgMaQKNCCyi4zzPgR4yiKVzDNvrgz_3aPMH_m0xEOk6Y8MGZDW5r_QLxY984OA85WKmnfHIW36B4k3RR3JkmAVEnvQ2ZOoAQDgBLd1OiAnvLyxTd9q0OkSQE_yss-GupK4egTEcIAJYymKurPZwOUcvBkcYP7w3tjjCeHLl8HwuQlrOwCm_B5OYZ5pY5s5CHrHq-gDlw7xbrWq2D6J74H33zPqexQuVyrwdz03ytZ_yWC', wa:'6282261375532', desc:'Dendeng sapi manis khas Yogyakarta. Daging sapi pilihan diiris tipis, dibumbui rempah pilihan.', info:'250gr' },
  { id:3, name:'Kacang Pedas Gurih', category:'Kuliner', price:20000, umkm:'Sari Rasa', umkmId:1, sold:310, badge:'Populer', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuDZWpw20yXhJcYhJui8TJHDUhIVzhoaOsxH1j7A41ogwFWJwhDjRFkWahxSDKBoL9E__-zLOFQ-1s2G9mYygeVd4GDUCcOsJtvXsxqPbx26zaouFcv47JhEkU7OmKkn0xR2Xwpn9Ph1pLNRmhAokh6z3VmfKzEuxawV239SuLv27t9vzhYGpiijA0xTKBJ2bMCy5htaFnKv86lVNNv2MP2YGnnttxYra4yEv5N1YS-EnaoL1i-ABP9Zao96Ko47El5xLsXLVflb', wa:'6282261375532', desc:'Kacang tanah pilihan dengan bumbu pedas gurih. Cocok sebagai camilan sehari-hari.', info:'200gr' },
  { id:4, name:'Stik Bawang Renyah', category:'Kuliner', price:15000, umkm:'Dapur Nita', umkmId:2, sold:420, badge:'Terlaris', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuDvDM4b6Kklx17DQyxH83AhBVadEvZgJKeL0XMPYx1ZUMA0cmgF7dH-_rC6FgUFvVlVG06nvuOe0qjlR03RfRQjvxcigTUdi0wRMdwKCUkpLp-yq9khGiOCpeANZg54pDB5sW7ljeh0YjRS3w73wKKHUUTKieJuZH0vCTXuQDjLQvYM2mJsQUkv6vUAz5C6Qph08YRZU6b6-G7hQ0SvwG8cvtJm8MVbuVlDZnKXm2X9kIukAK8TAaG94CH7L82-Ij6rjQbqFbSq', wa:'6282261375532', desc:'Stik bawang gurih dan renyah. Camilan tradisional untuk segala acara.', info:'250gr' },
  { id:5, name:'Keripik Singkong Balado', category:'Kuliner', price:12000, umkm:'Dapur Nita', umkmId:2, sold:530, badge:'', img:'', wa:'6282261375532', desc:'Keripik singkong renyah dengan bumbu balado khas Padang.', info:'200gr' },
  { id:6, name:'Brownies Kukus Coklat', category:'Kuliner', price:35000, umkm:'Dapur Nita', umkmId:2, sold:280, badge:'', img:'', wa:'6282261375532', desc:'Brownies kukus coklat premium, tekstur lembut dan moist.', info:'500gr' },
  { id:7, name:'Madu Murni Hutan', category:'Kuliner', price:85000, umkm:'Madu Nusantara', umkmId:3, sold:200, badge:'Premium', img:'', wa:'6282261375532', desc:'Madu murni dari hutan Indonesia. Kaya manfaat untuk kesehatan.', info:'250ml' },
  { id:8, name:'Sirup Markisa Asli', category:'Kuliner', price:25000, umkm:'Madu Nusantara', umkmId:3, sold:150, badge:'', img:'', wa:'6282261375532', desc:'Sirup markisa asli tanpa pemanis buatan. Segar dan alami.', info:'500ml' },
  { id:9, name:'Keripik Tempe Premium', category:'Kuliner', price:10000, umkm:'Bu Sri', umkmId:4, sold:610, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Keripik tempe premium, renyah dan gurih. Produksi rumahan.', info:'150gr' },
  { id:10, name:'Bakpia Pathok Kacang Hijau', category:'Kuliner', price:30000, umkm:'Bu Tatik', umkmId:5, sold:290, badge:'', img:'', wa:'6282261375532', desc:'Bakpia pathok isi kacang hijau. Oleh-oleh khas Yogyakarta.', info:'10 pcs' },

  // ============ FASHION (11-20) ============
  { id:11, name:'Batik Tulis Solo', category:'Fashion', price:150000, umkm:'Batik Lestari', umkmId:8, sold:185, badge:'Baru', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuD_DlraYPgeZCpxIU9jyGvReCsrgGESVjE2d23JvP2tJL55acl2RltUXZrY_3mBV_VUwdGFNy0JC8jI_w7Ym8riyDIJ7kDJnbNWkas0M28NRR8HyZqgL8qqmDJU-NT3S3kuo3PPi8rF458PJ-DXMFDuDxb5WUkjDW1Z1VozmsfYebZletloapXkQ4xxFH3kTEtAWi9BtYvnuFslN3glBUZ9NZjxc1bSaaV7LcUJXg7gJCpFiEng9wJFZzbIeTSZo7cr2WABQSsX', wa:'6282261375532', desc:'Batik tulis Solo dengan motif parang dan kawung. Kain katun premium.', info:'2m x 1.15m' },
  { id:12, name:'Batik Cap Pekalongan', category:'Fashion', price:95000, umkm:'Batik Lestari', umkmId:8, sold:230, badge:'', img:'', wa:'6282261375532', desc:'Batik cap Pekalongan dengan motif pesisir warna-warni.', info:'2m x 1.15m' },
  { id:13, name:'Tenun Ikat NTT', category:'Fashion', price:250000, umkm:'Tenun Flores', umkmId:9, sold:95, badge:'Premium', img:'', wa:'6282261375532', desc:'Tenun ikat asli NTT dengan motif khas Flores.', info:'2m x 1.10m' },
  { id:14, name:'Kebaya Encim Modern', category:'Fashion', price:185000, umkm:'Bu Rina', umkmId:10, sold:120, badge:'', img:'', wa:'6282261375532', desc:'Kebaya encim modern dengan bahan katun brokat.', info:'All size' },
  { id:15, name:'Kemeja Batik Pria', category:'Fashion', price:125000, umkm:'Batik Lestari', umkmId:8, sold:165, badge:'', img:'', wa:'6282261375532', desc:'Kemeja batik pria lengan panjang. Motif kontemporer.', info:'M/L/XL' },
  { id:16, name:'Tas Rajut Tangan', category:'Fashion', price:65000, umkm:'Karya Tangan', umkmId:11, sold:175, badge:'', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuBVtLQ3foUm-Q6XElsArr-VlhKrENszgvbjqoRA15sCMhv5acpryWxMF109xu0_YLrl-9HnuZyG1y0h3rx5U5ciS7MLHKCuxx5LT2vl5Wh-YBuv2JFXlYTlrYO3YQUcMRAuNWAGyBX02jeSr0sfjY2VmM4e0M4-p3-gkWrtEQVJrIoXb6zuiSChFNYEJFgoUJ4J7AQ3ikdiqq9zIaKBWSYsas6vA66y1QFY6-HrMLZn7RWfmXJv3LCg4P8CCDuRWhjQwPLzbpej', wa:'6282261375532', desc:'Tas rajut tangan dari benang katun. Unik dan ramah lingkungan.', info:'30cm x 25cm' },
  { id:17, name:'Dompet Kulit Sapi', category:'Fashion', price:75000, umkm:'Karya Tangan', umkmId:11, sold:200, badge:'', img:'', wa:'6282261375532', desc:'Dompet kulit sapi asli jahitan tangan. Tahan lama.', info:'12cm x 9cm' },
  { id:18, name:'Sepatu Kanvas Lukis', category:'Fashion', price:85000, umkm:'Art Shoes', umkmId:12, sold:65, badge:'', img:'', wa:'6282261375532', desc:'Sepatu kanvas lukis tangan dengan desain unik limited edition.', info:'36-42' },
  { id:19, name:'Syal Batik Sutra', category:'Fashion', price:55000, umkm:'Batik Lestari', umkmId:8, sold:160, badge:'', img:'', wa:'6282261375532', desc:'Syal batik sutra lembut. Motif klasik dan modern.', info:'180cm x 50cm' },
  { id:20, name:'Masker Batik Kain', category:'Fashion', price:15000, umkm:'Batik Lestari', umkmId:8, sold:500, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Masker kain batik 3 lapis. Nyaman dan reusable.', info:'All size' },

  // ============ KERAJINAN (21-30) ============
  { id:21, name:'Anyaman Bambu Hias', category:'Kerajinan', price:65000, umkm:'Karya Tangan', umkmId:11, sold:120, badge:'', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuC1MNJXFh61T-YSBhSbSLaAUC76AXGKiImUwr6hdZ6OEz6y_4pi4xzA-2yOplOqzK1Qun3rglh5vFzzaxMzR2weu4Y6uGpcgVuFfAHHQj5dWMhXgfyg0vns9dHFQRt0y8fJcJcU4uw7xMJsZxqGmHBnz9ThbLwrEBaMqOztaMbRFhufHHc819CTSYmG8OBAlML37jQOusJ3x9wpINBbeQwmbpNqx1Ze_m1yXlAu1I3H5J2YOsdTrDGHoEoIbBC-6uZcj6TG7nH4', wa:'6282261375532', desc:'Anyaman bambu hias untuk dekorasi rumah. Produksi tradisional.', info:'40cm x 30cm' },
  { id:22, name:'Meja Kayu Jati Ukir', category:'Kerajinan', price:450000, umkm:'Mebel Jepara', umkmId:14, sold:45, badge:'Premium', img:'', wa:'6282261375532', desc:'Meja kayu jati ukir tangan khas Jepara. Kokoh dan artistik.', info:'80cm x 60cm' },
  { id:23, name:'Patung Garuda Kayu', category:'Kerajinan', price:125000, umkm:'Mebel Jepara', umkmId:14, sold:30, badge:'', img:'', wa:'6282261375532', desc:'Patung Garuda Pancasila dari kayu jati. Dekorasi kantor.', info:'30cm' },
  { id:24, name:'Vas Bunga Keramik', category:'Kerajinan', price:55000, umkm:'Karya Tangan', umkmId:11, sold:85, badge:'', img:'', wa:'6282261375532', desc:'Vas bunga keramik buatan tangan dengan glazed finish.', info:'25cm' },
  { id:25, name:'Boneka Rajut Imut', category:'Kerajinan', price:35000, umkm:'Lusi Craft', umkmId:15, sold:200, badge:'Populer', img:'', wa:'6282261375532', desc:'Boneka rajut imut dari benang katun. Hadiah untuk anak-anak.', info:'20cm' },
  { id:26, name:'Lampu Hias Bambu', category:'Kerajinan', price:75000, umkm:'Karya Tangan', umkmId:11, sold:60, badge:'', img:'', wa:'6282261375532', desc:'Lampu hias bambu dengan nuansa hangat untuk kamar tidur.', info:'30cm' },
  { id:27, name:'Kotak Perhiasan Ukir', category:'Kerajinan', price:85000, umkm:'Mebel Jepara', umkmId:14, sold:55, badge:'', img:'', wa:'6282261375532', desc:'Kotak perhiasan kayu jati dengan ukiran halus.', info:'15cm x 10cm' },
  { id:28, name:'Lukisan Kanvas Abstrak', category:'Kerajinan', price:95000, umkm:'Karya Tangan', umkmId:11, sold:40, badge:'', img:'', wa:'6282261375532', desc:'Lukisan kanvas abstrak dengan teknik palet knife.', info:'60cm x 40cm' },
  { id:29, name:'Gelang Tridatu Bali', category:'Kerajinan', price:15000, umkm:'Wisnu Craft', umkmId:13, sold:400, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Gelang tridatu khas Bali. Tiga warna filosofis.', info:'Adjustable' },
  { id:30, name:'Tempat Tisu Bambu', category:'Kerajinan', price:35000, umkm:'Karya Tangan', umkmId:11, sold:90, badge:'', img:'', wa:'6282261375532', desc:'Tempat tisu bambu anyaman. Fungsional dan dekoratif.', info:'25cm x 13cm' },

  // ============ PERTANIAN (31-40) ============
  { id:31, name:'Beras Merah Organik', category:'Pertanian', price:25000, umkm:'Tani Makmur', umkmId:16, sold:310, badge:'Organik', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuC1MNJXFh61T-YSBhSbSLaAUC76AXGKiImUwr6hdZ6OEz6y_4pi4xzA-2yOplOqzK1Qun3rglh5vFzzaxMzR2weu4Y6uGpcgVuFfAHHQj5dWMhXgfyg0vns9dHFQRt0y8fJcJcU4uw7xMJsZxqGmHBnz9ThbLwrEBaMqOztaMbRFhufHHc819CTSYmG8OBAlML37jQOusJ3x9wpINBbeQwmbpNqx1Ze_m1yXlAu1I3H5J2YOsdTrDGHoEoIbBC-6uZcj6TG7nH4', wa:'6282261375532', desc:'Beras merah organik tanpa pestisida. Kaya serat dan nutrisi.', info:'1kg' },
  { id:32, name:'Cabai Kering Pilihan', category:'Pertanian', price:15000, umkm:'Tani Makmur', umkmId:16, sold:520, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Cabai kering pilihan kualitas terbaik. Tahan lama.', info:'250gr' },
  { id:33, name:'Kopi Arabika Java', category:'Pertanian', price:45000, umkm:'Tani Makmur', umkmId:16, sold:140, badge:'Premium', img:'', wa:'6282261375532', desc:'Kopi arabika Java dengan body tebal dan acidity rendah.', info:'200gr' },
  { id:34, name:'Teh Hijau Premium', category:'Pertanian', price:20000, umkm:'Tani Makmur', umkmId:16, sold:210, badge:'', img:'', wa:'6282261375532', desc:'Teh hijau premium dari perkebunan Nusantara.', info:'100gr' },
  { id:35, name:'Jahe Merah Segar', category:'Pertanian', price:12000, umkm:'Bu Tani', umkmId:17, sold:190, badge:'', img:'', wa:'6282261375532', desc:'Jahe merah segar kaya minyak atsiri. Hangatkan tubuh.', info:'500gr' },
  { id:36, name:'Kunyit Bubuk Asli', category:'Pertanian', price:10000, umkm:'Bu Tani', umkmId:17, sold:320, badge:'', img:'', wa:'6282261375532', desc:'Kunyit bubuk asli tanpa campuran. Untuk bumbu dan jamu.', info:'100gr' },
  { id:37, name:'Madu Hutan Liar', category:'Pertanian', price:75000, umkm:'Tani Makmur', umkmId:16, sold:90, badge:'', img:'', wa:'6282261375532', desc:'Madu hutan liar dari lebah apis dorsata.', info:'250ml' },
  { id:38, name:'Pisang Ambon Manis', category:'Pertanian', price:15000, umkm:'Tani Makmur', umkmId:16, sold:180, badge:'', img:'', wa:'6282261375532', desc:'Pisang ambon manis matang pohon. Buah segar langsung panen.', info:'1 sisir' },
  { id:39, name:'Jeruk Nipis Segar', category:'Pertanian', price:8000, umkm:'Tani Makmur', umkmId:16, sold:220, badge:'', img:'', wa:'6282261375532', desc:'Jeruk nipis segar untuk minuman dan bumbu masak.', info:'500gr' },
  { id:40, name:'Gula Jawa Cetak', category:'Pertanian', price:15000, umkm:'Bu Tani', umkmId:17, sold:290, badge:'', img:'', wa:'6282261375532', desc:'Gula jawa cetak dari nira kelapa. Manis alami.', info:'500gr' },

  // ============ JASA (41-50) ============
  { id:41, name:'Service AC 1 PK', category:'Jasa', price:150000, umkm:'Servis Teknik', umkmId:18, sold:88, badge:'', img:'', wa:'6282261375532', desc:'Service AC 1 PK, pembersihan dan pengecekan freon. Bergaransi.', info:'Per unit' },
  { id:42, name:'Jasa Kebersihan Rumah', category:'Jasa', price:200000, umkm:'Bersih Bersih', umkmId:19, sold:60, badge:'', img:'', wa:'6282261375532', desc:'Jasa kebersihan rumah tinggal. Profesional dan terpercaya.', info:'3-4 jam' },
  { id:43, name:'Desain Grafis Banner', category:'Jasa', price:75000, umkm:'Digital Creative', umkmId:20, sold:120, badge:'', img:'', wa:'6282261375532', desc:'Desain banner dan konten media sosial. Revisi 2x.', info:'Per desain' },
  { id:44, name:'Paket Fotografi Produk', category:'Jasa', price:150000, umkm:'Digital Creative', umkmId:20, sold:45, badge:'', img:'', wa:'6282261375532', desc:'Paket fotografi produk untuk toko online. 10 foto.', info:'10 foto' },
  { id:45, name:'Catering Nasi Box', category:'Jasa', price:25000, umkm:'Dapur Nita', umkmId:2, sold:300, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Nasi box dengan lauk pilihan. Cocok untuk acara kantor.', info:'Per box' },
  { id:46, name:'Jasa Jahit Pakaian', category:'Jasa', price:75000, umkm:'Bu Rina', umkmId:10, sold:95, badge:'', img:'', wa:'6282261375532', desc:'Jasa jahit kebaya dan pakaian wanita. Hasil rapi.', info:'Per potong' },
  { id:47, name:'Laundry Kiloan', category:'Jasa', price:7000, umkm:'Bersih Bersih', umkmId:19, sold:500, badge:'Populer', img:'', wa:'6282261375532', desc:'Laundry kiloan cuci setrika. Antar jemput gratis.', info:'Per kg' },
  { id:48, name:'Percetakan Undangan', category:'Jasa', price:3000, umkm:'Digital Creative', umkmId:20, sold:1000, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Cetak undangan pernikahan dan acara. Kertas art paper.', info:'Per lembar' },
  { id:49, name:'Salon Kecantikan', category:'Jasa', price:75000, umkm:'Beauty Queen', umkmId:22, sold:120, badge:'', img:'', wa:'6282261375532', desc:'Potong rambut dan styling. Konsultasi gaya rambut.', info:'Per orang' },
  { id:50, name:'Jasa Pembuatan Website', category:'Jasa', price:1500000, umkm:'Digital Creative', umkmId:20, sold:10, badge:'', img:'', wa:'6282261375532', desc:'Pembuatan website UMKM. Mobile friendly.', info:'Per proyek' },

  // ============ KOSMETIK (51-60) ============
  { id:51, name:'Lipstik Matte Velvet', category:'Kosmetik', price:45000, umkm:'Beauty Queen', umkmId:22, sold:230, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Lipstik matte velvet dengan warna tahan lama.', info:'3.5gr' },
  { id:52, name:'Bedak Tabur Natural', category:'Kosmetik', price:35000, umkm:'Beauty Queen', umkmId:22, sold:180, badge:'', img:'', wa:'6282261375532', desc:'Bedak tabur natural untuk kulit berminyak.', info:'20gr' },
  { id:53, name:'Serum Wajah Vitamin C', category:'Kosmetik', price:65000, umkm:'Glowing Skin', umkmId:25, sold:150, badge:'', img:'', wa:'6282261375532', desc:'Serum wajah vitamin C mencerahkan dan antioksidan.', info:'15ml' },
  { id:54, name:'Masker Wajah Organik', category:'Kosmetik', price:20000, umkm:'Glowing Skin', umkmId:25, sold:280, badge:'Populer', img:'', wa:'6282261375532', desc:'Masker wajah organik dari bahan alami.', info:'50gr' },
  { id:55, name:'Minyak Kelapa Murni VCO', category:'Kosmetik', price:55000, umkm:'Glowing Skin', umkmId:25, sold:190, badge:'', img:'', wa:'6282261375532', desc:'Virgin coconut oil murni untuk kulit dan rambut.', info:'100ml' },
  { id:56, name:'Lulur Tradisional Spice', category:'Kosmetik', price:25000, umkm:'Beauty Queen', umkmId:22, sold:310, badge:'Terlaris', img:'', wa:'6282261375532', desc:'Lulur tradisional rempah. Menghaluskan dan mencerahkan.', info:'100gr' },
  { id:57, name:'Sabun Herbal Jerawat', category:'Kosmetik', price:18000, umkm:'Herbal Indo', umkmId:26, sold:420, badge:'Populer', img:'', wa:'6282261375532', desc:'Sabun herbal untuk kulit berjerawat dengan tea tree oil.', info:'75gr' },
  { id:58, name:'Cream Malam Anti Aging', category:'Kosmetik', price:75000, umkm:'Glowing Skin', umkmId:25, sold:95, badge:'', img:'', wa:'6282261375532', desc:'Cream malam anti aging dengan retinol.', info:'30gr' },
  { id:59, name:'Lip Balm Alami', category:'Kosmetik', price:15000, umkm:'Herbal Indo', umkmId:26, sold:350, badge:'Populer', img:'', wa:'6282261375532', desc:'Lip balm alami dari beeswax. Melembabkan bibir.', info:'4gr' },
  { id:60, name:'Sunscreen SPF 50', category:'Kosmetik', price:65000, umkm:'Glowing Skin', umkmId:25, sold:110, badge:'', img:'', wa:'6282261375532', desc:'Sunscreen organic SPF 50 PA+++. Ringan di wajah.', info:'30ml' },
];

function getProductById(id) {
  return allProducts.find(p => p.id === id);
}

function getProductsByCategory(cat) {
  return allProducts.filter(p => p.category === cat);
}

function getRelatedProducts(product, limit = 4) {
  return allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, limit);
}

function getProductImage(product, size = 400) {
  if (product.img) return product.img;
  const seed = encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, '-'));
  return `https://picsum.photos/seed/${seed}/${size}/${size}`;
}
