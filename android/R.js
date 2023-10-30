// Impor data CHIRPS dalam format .bil
var chirpsCollection = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
  .select('precipitation')
  .filterDate('2015-01-01', '2015-12-31'); // Tanggal awal dan akhir yang diinginkan

// Gantilah definisi region dengan geometri yang sudah Anda buat
var yourGeometry = geometry// Gantilah dengan geometri yang Anda miliki

// Hitung rata-rata curah hujan di seluruh wilayah
var meanPrecipitation = chirpsCollection.mean()
  .clip(yourGeometry); // Menggunakan geometri yang sudah Anda buat untuk operasi clip

// Tampilkan hasilnya
Map.centerObject(yourGeometry, 3);
Map.addLayer(meanPrecipitation, {
  min: 0,
  max: 10,
  palette: ['white', 'pink', 'yellow', 'green']
}, 'Rata-rata Curah Hujan');

// Export hasilnya jika diperlukan
Export.image.toDrive({
  image: meanPrecipitation,
  description: 'mean_precipitation',
  scale: 5000, // Resolusi spatil dalam meter
  maxPixels: 1e13
});