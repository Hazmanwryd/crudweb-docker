# Aplikasi Web dengan Docker

First, run the development server:
```bash
json-server -w db.json -p 5000 
```

## Deskripsi

Aplikasi ini adalah contoh aplikasi web yang menggunakan Docker untuk menjalankan aplikasi Next.js dan `json-server` untuk crud product dan harga.

## Langkah-langkah Instalasi

1. **Instalasi Docker:**
   - Pastikan Docker telah terinstal di komputer Anda. Jika belum, unduh dan instal Docker di [sini](https://www.docker.com/get-started).

2. **Clone Repository:**
   Clone repository ini ke komputer Anda.
```bash
   git clone https://github.com/username/proyek-anda.git
   cd proyek-anda
   ```

open
http://localhost:3000/

# Dockerfile
Dockerfile adalah file teks yang berisi instruksi untuk membangun image Docker. Berikut adalah penjelasan setiap instruksi yang ada di dalam Dockerfile:

dockerfile
Copy code
# Step 1: Gunakan image Node.js versi 18 dengan Alpine sebagai base image
FROM node:18-alpine
FROM node:18-alpine: Menggunakan image Node.js versi 18 berbasis Alpine Linux sebagai image dasar. Alpine lebih ringan dan efisien, cocok untuk aplikasi produksi.
dockerfile
Copy code
# Step 2: Tentukan direktori kerja di dalam container
WORKDIR /app
WORKDIR /app: Menentukan direktori kerja di dalam container sebagai /app. Semua perintah selanjutnya akan dijalankan di dalam direktori ini.
dockerfile
Copy code
# Step 3: Salin file package.json dan package-lock.json terlebih dahulu
COPY package.json package-lock.json ./
COPY package.json package-lock.json ./: Menyalin file package.json dan package-lock.json ke dalam container. File ini berisi daftar dependensi yang diperlukan oleh aplikasi.
dockerfile
Copy code
# Step 4: Install dependensi aplikasi
RUN npm install
RUN npm install: Menjalankan perintah npm install untuk menginstal semua dependensi yang tercantum di package.json.
dockerfile
Copy code
# Step 5: Salin seluruh file aplikasi ke dalam container
COPY . .
COPY . .: Menyalin semua file dan folder dari direktori lokal ke dalam container, di dalam direktori kerja (/app).
dockerfile
Copy code
# Step 6: Build aplikasi Next.js untuk produksi
RUN npm run build
RUN npm run build: Membuat build produksi untuk aplikasi Next.js. Ini akan menghasilkan versi optimasi dari aplikasi yang siap untuk dijalankan di lingkungan produksi.
dockerfile
Copy code
# Step 7: Ekspos port 3000 agar bisa diakses dari luar container
EXPOSE 3000
EXPOSE 3000: Memberitahu Docker bahwa aplikasi akan mendengarkan pada port 3000, sehingga port ini akan terbuka untuk akses dari luar container.
dockerfile
Copy code
# Step 8: Jalankan aplikasi dengan perintah npm start
CMD ["npm", "start"]
CMD ["npm", "start"]: Menentukan perintah yang akan dijalankan ketika container dijalankan. Perintah ini akan menjalankan aplikasi Next.js dengan npm start.


# docker-compose.yml
docker-compose.yml digunakan untuk mengonfigurasi dan menjalankan beberapa container Docker sekaligus. Dalam kasus ini, kita hanya memiliki satu container untuk aplikasi web Next.js. Berikut adalah penjelasan untuk setiap bagian dalam docker-compose.yml:

yaml
Copy code
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
services: Mendefinisikan layanan yang akan dijalankan dalam container. Di sini, kita memiliki satu layanan yang disebut web.

build: .: Menyatakan bahwa Docker akan membangun image dari Dockerfile yang ada di direktori saat ini (.).

ports: Memetakan port dari container ke port lokal Anda. Di sini, port 3000 di dalam container akan dipetakan ke port 3000 di mesin lokal Anda, yang memungkinkan Anda mengakses aplikasi di http://localhost:3000.

environment: Menentukan variabel lingkungan yang akan digunakan di dalam container. Dalam hal ini, kita menetapkan NODE_ENV=production untuk memberitahu aplikasi bahwa ini adalah lingkungan produksi.

restart: always: Menetapkan agar container selalu restart jika mengalami kegagalan atau ketika Docker daemon dimulai ulang. Ini penting untuk memastikan aplikasi tetap berjalan.

