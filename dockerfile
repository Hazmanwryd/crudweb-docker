# Step 1: Gunakan image Node.js versi 18 dengan Alpine sebagai base image
FROM node:18-alpine

# Step 2: Tentukan direktori kerja di dalam container
WORKDIR /app

# Step 3: Salin file package.json dan package-lock.json 
COPY package.json package-lock.json ./

# Step 4: Install dependensi aplikasi dan json-server
RUN npm install && npm i -g json-server

# Step 5: Salin seluruh file aplikasi ke dalam container
COPY . .

# Step 6: Build aplikasi Next.js untuk produksi
RUN npm run build

# Step 7: Ekspos port 3000 untuk Next.js dan 5000 untuk json-server
EXPOSE 3000 5000

# Step 8: Jalankan aplikasi Next.js dan json-server
CMD ["sh", "-c", "npm run json-server & npm start"]
