# Step 1: Gunakan image Node.js versi 18 dengan Alpine sebagai base image
FROM node:18-alpine

# Step 2: Tentukan direktori kerja di dalam container
WORKDIR /app

# Step 3: Salin file package.json dan package-lock.json terlebih dahulu
COPY package.json package-lock.json ./

# Step 4: Install dependensi aplikasi
RUN npm install

# Step 5: Install json-server secara global
RUN npm i -g json-server

# Step 6: Salin seluruh file aplikasi ke dalam container
COPY . .

# Step 7: Build aplikasi Next.js untuk produksi
RUN npm run build

# Step 8: Ekspos port 3000 agar bisa diakses dari luar container
EXPOSE 3000

# Step 9: Ekspos port 5000 untuk json-server
EXPOSE 5000

# Step 10: Jalankan aplikasi Next.js dan json-server secara bersamaan (menggunakan & untuk menjalankan keduanya dalam satu perintah)
CMD npm start & json-server -w db.json -p 5000
