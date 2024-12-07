# Step 1: Gunakan image Node.js versi 18 dengan Alpine sebagai base image
FROM node:18-alpine

# Step 2: Tentukan direktori kerja di dalam container
WORKDIR /app

# Step 3: Salin file package.json dan package-lock.json terlebih dahulu
COPY package.json package-lock.json ./

# Step 4: Install dependensi aplikasi
RUN npm install

# Step 5: Salin seluruh file aplikasi ke dalam container
COPY . .

# Step 6: Build aplikasi Next.js untuk produksi
RUN npm run build

# Step 7: Ekspos port 3000 agar bisa diakses dari luar container
EXPOSE 3000

# Step 8: Jalankan aplikasi dengan perintah npm start
CMD ["npm", "start"]
