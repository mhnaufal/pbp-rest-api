# pbp-rest-api

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Fri Nov 19 2021 23:25:20 GMT+0700 (Western Indonesia Time) using Sails v1.5.0.

<!-- Internally, Sails used [`sails-generate@2.0.3`](https://github.com/balderdashy/sails-generate/tree/v2.0.3/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

[File Insomnia](#)

## Build Guide/Panduan Pemasangan
### Unix
1. Lakukan cloning (dari branch master)
    ```bash
    git clone https://github.com/mhnaufal/pbp-rest-api.git
    ```
2. Install dependencies
    ```properties
    npm install
    ```
3. Copy & paste file **.env.example** dan beri nama **.env**

4. Sesuaiakan isi file .env dengan server & basis data lokal
    > untuk DBMS MySql, pengaturan dapat dilakukan di file ``datastore.js`` atau langsung di file `.env`

5. Jalankan
    ```properties
    npm run dev
    ```
    atau
    ```properties
    npm run start
    ```

### Windows
1. Lakukan cloning (dari branch master)
    ```bash
    git clone https://github.com/mhnaufal/pbp-rest-api.git
    ```
2. Install dependencies
    ```properties
    npm install
    ```
3. Copy & paste file **.env.example** dan beri nama **.env**

4. Sesuaiakan isi file .env dengan server & basis data lokal
    > untuk DBMS MySql, pengaturan dapat dilakukan di file ``datastore.js`` atau langsung di file `.env`

5. Jalankan dengan menggunakan **bash** atau **cmd** (jangan powershell!)
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