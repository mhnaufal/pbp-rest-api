# pbp-rest-api

a [Sails v1](https://sailsjs.com) application

### Version info

This app was originally generated on Fri Nov 19 2021 23:25:20 GMT+0700 (Western Indonesia Time) using Sails v1.5.0.

## Fitur webservice yang dibuat
1. Tambah anggota
    ```javascript
    POST    localhost:1337/anggota
    ```

2. Cari buku berdasarkan XXX
    ```javascript
    GET     localhost:1337/buku?where={"judul":"Pemrograman Berbasis Platform"}
    ```
    
    ```javascript
    GET     localhost:1337/buku?pengarang=anonim
    ```
    
    ```javascript
    GET     localhost:1337/buku?stok=13
    ```

Nyoba2 webservicenya pake Insomnia, [download di sini](https://insomnia.rest/download)

Terus import file ini ke Insomnia [File Insomnia](https://github.com/mhnaufal/pbp-rest-api/blob/main/test-api-insomnia.json)

## Build Guide/Panduan Pemasangan
### Unix
1. Lakukan cloning (dari branch main)
    ```bash
    git clone https://github.com/mhnaufal/pbp-rest-api.git
    ```
2. Install dependencies
    ```properties
    npm install
    ```
3. Copy & paste file **.env.example** dan beri nama **.env**

4. Sesuaiakan isi file .env dengan server & basis data lokal
    > untuk DBMS MySql, pengaturan dapat dilakukan di file [``datastore.js``](https://github.com/mhnaufal/pbp-rest-api/blob/main/config/datastores.js) atau langsung di file `.env`

    > "mysql://root:@localhost:3306/siperpus-api"

5. Jalankan
    ```properties
    npm run dev
    ```
    atau
    ```properties
    npm run start
    ```

### Windows
1. Lakukan cloning (dari branch main)
    ```bash
    git clone https://github.com/mhnaufal/pbp-rest-api.git
    ```
2. Install dependencies
    ```properties
    npm install
    ```
3. Copy & paste file **.env.example** dan beri nama **.env**

4. Sesuaiakan isi file .env dengan server & basis data lokal
    > untuk DBMS MySql, pengaturan dapat dilakukan di file [``datastore.js``](https://github.com/mhnaufal/pbp-rest-api/blob/main/config/datastores.js) atau langsung di file `.env`

    > "mysql://root:@localhost:3306/siperpus-api"

5. Jalankan dengan menggunakan **bash**, kalo belum punya [download git dulu](https://git-scm.com/downloads) (jangan powershell!)
    ```properties
    npm run dev-windows
    ```
    atau
    ```properties
    npm run dev-windows-drop
    ```
    atau
    ```properties
    source .env&&nodemon app.js
    ```
    atau
    ```properties
    set .env&&nodemon app.js
    ```
    atau
    ```properties
    source .env&&nodemon sails lift
    ```

---

## Development Guide/Panduan Pengembangan
1. Lakukan cloning (dari branch master)
    ```bash
    git clone https://github.com/mhnaufal/pbp-rest-api.git
    ```
2. Buat branch baru dan pindah ke branch tersebut sebelum memulai pengerjaan
    ```
    git branch nama-branch
    ```
    ```
    git switch nama-branch
    ```
3. Lakukan pull dari master sebelum memulai pengerjaan
    ```
    git pull origin master
    ```
4. Lakukan pengeditan
5. Lakukan commit dengan pesan yang sangat jelas (boleh menggunakan bahasa indonesia atau inggris)
    ```
    git add .
    ```
    ```
    git commit -m "Tipe: Pesan commit"
    ```
6. Lakukan pull dari master
    ```
    git fetch
    ```
    ```
    git pull origin master
    ```
7. Lakukan push
    ```
    git push origin nama-branch
    ```
8. Buka pull request (jika perlu)