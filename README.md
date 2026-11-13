# APLANNYMW — Portofolio Mendinus Wandik

Website statis untuk GitHub Pages dengan dashboard admin yang mengelola proyek melalui GitHub Contents API.

## Fitur
- Website publik responsif dengan profil, keahlian, kontak, dan galeri proyek.
- Filter kategori: Website, Aplikasi, Desain, Proyek IT lainnya, Dokumentasi pekerjaan.
- Dashboard admin di `admin.html`: tambah, edit, dan hapus proyek.
- Gambar proyek disimpan di folder `uploads/`, daftar proyek di `data/projects.json`.
- Tidak ada token atau password admin bawaan yang ditanam dalam source code.

## Deploy ke GitHub Pages
1. Buat repository GitHub bernama `mendinus-wandik` (atau nama pilihanmu).
2. Upload seluruh isi folder proyek ini ke root repository.
3. Pastikan branch repository kamu saat ini adalah `master`; gunakan `master` saat menghubungkan dashboard.
4. Buka Settings → Pages → Deploy from a branch → `master` → `/(root)` → Save.
5. Setelah GitHub Pages aktif, buka alamat publik yang ditampilkan GitHub.

## Hubungkan dashboard admin
1. Di GitHub, buka Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token.
2. Pada Resource owner pilih akunmu.
3. Repository access: Only select repositories → pilih repository portofolio ini saja.
4. Repository permissions: set **Contents: Read and write**. Metadata read-only akan diberikan otomatis.
5. Buat token dan salin. Jangan kirim token lewat chat, jangan menaruh token ke file website, dan jangan bagikan screenshot yang memperlihatkannya.
6. Buka `https://meskowan.github.io/mendinus-Wandik/admin.html` (atau `/admin.html` pada domain Pages), owner `meskowan`, repository `mendinus-Wandik`, branch `master`, dan token lalu klik Hubungkan GitHub.
7. Tambahkan proyek. Setelah commit tersimpan, GitHub Pages akan memperbarui website publik secara otomatis setelah proses deployment selesai.

## Keamanan dan batasan penting
- GitHub Pages adalah hosting statis; halaman admin ini bukan sistem login server-side. Siapa pun dapat melihat source code admin, tetapi tidak bisa mengubah repository tanpa token yang valid.
- Token dimasukkan sendiri oleh pemilik ke browser dan tidak disimpan di localStorage/sessionStorage maupun file proyek. Token berada sementara di memori halaman selama tab terbuka; tutup tab untuk mengakhiri sesi dan tekan Putuskan koneksi sebelum meninggalkan perangkat bersama.
- Gunakan fine-grained token yang dibatasi ke satu repository dan izin Contents: Read and write saja. Atur masa berlaku token; cabut token dari GitHub bila perangkat hilang atau token terpapar.
- Jangan gunakan dashboard dari perangkat umum. Jangan pernah memberikan token ke orang lain.
- File gambar dibatasi maksimal 3 MB dan format JPG/PNG/WEBP/GIF. Hapus proyek menghapus entri dari daftar; file gambar lama di folder `uploads/` mungkin masih tertinggal dan bisa dihapus manual dari GitHub.
- Sebelum publikasi, pastikan kamu memiliki hak untuk memublikasikan foto, desain, dokumen, dan informasi dalam proyek.
- Ganti `emailkamu@example.com` pada `index.html` dengan email aktif. Jangan mengisi pengalaman atau proyek yang belum benar-benar kamu kerjakan.

## Struktur
- `index.html` — website publik
- `admin.html` — dashboard admin
- `admin.js` — pengelolaan repository melalui GitHub API
- `script.js` — galeri proyek publik dan filter
- `style.css` — tampilan responsif
- `data/projects.json` — data awal proyek
- `assets/logo-aplannymw.svg` — logo brand
