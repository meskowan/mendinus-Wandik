# APLANNYMW — Mendinus Wandik

Website portofolio statis untuk GitHub Pages dengan Login, Register, Dashboard User, dan dasar pengaturan Admin menggunakan Supabase Auth.

## 1. Upload ke GitHub Pages
1. Ekstrak ZIP ini.
2. Upload seluruh ISI folder ini ke root repository `meskowan/mendinus-Wandik` (branch `master`), bukan file ZIP-nya.
3. Pastikan GitHub Pages memakai branch `master` dan folder `/(root)`.

## 2. Siapkan Supabase (wajib untuk login sungguhan)
1. Buat project di https://supabase.com/.
2. Buka Project Settings → API.
3. Salin Project URL dan anon/publishable key. Jangan gunakan `service_role` key.
4. Isi `supabase-config.js` pada dua nilai placeholder.
5. Buka SQL Editor Supabase, jalankan seluruh isi `supabase-schema.sql`.
6. Buka Authentication → URL Configuration. Set Site URL ke `https://meskowan.github.io/mendinus-Wandik/` dan tambahkan Redirect URL yang sama.
7. Jika Email Confirmation aktif, pengguna harus mengonfirmasi email sebelum login.

## 3. Jadikan akun kamu sebagai Admin
1. Daftar melalui halaman `register.html` dan verifikasi email jika diminta.
2. Login sekali, lalu buka Supabase → Authentication → Users dan salin UUID akun kamu.
3. Di SQL Editor jalankan: `update public.profiles set role = 'admin' where id = 'UUID-AKUN-KAMU';`
4. Login ulang. Link admin akan muncul di Dashboard User.

## Catatan keamanan penting
- Password dikelola oleh Supabase Auth, tidak disimpan di file website.
- Jangan pernah menaruh `service_role` key di GitHub atau browser.
- Role admin hanya boleh diberikan oleh pemilik project melalui Supabase SQL Editor.
- Dashboard admin lama untuk mengelola proyek GitHub tetap menggunakan GitHub token yang dimasukkan saat sesi admin; jangan bagikan token lewat chat dan batasi akses token ke repository ini saja.
- GitHub Pages tidak menyediakan backend/server sendiri. Supabase dibutuhkan agar login dan akun bekerja lintas perangkat.

## File utama
- `index.html`: website publik
- `login.html` / `register.html`: halaman autentikasi
- `dashboard.html`: dashboard user dan edit nama profil
- `admin.html`: dashboard pengelolaan proyek GitHub yang sudah ada
- `supabase-config.js`: konfigurasi project Supabase
- `supabase-schema.sql`: tabel profil, trigger pendaftaran, dan kebijakan akses
