const { testDbConnection } = require('./db_config');
const Brands = require('../backend/models/brands_models');
const fs = require('fs');
const path = require('path');

// Testing the connection
testDbConnection();

const imagesDirectory = path.join(__dirname, 'brands_img');


// Read all images from dir then insert data in database
const insertBrandImage = async () => {
    const dir = fs.opendirSync(imagesDirectory);
    let dirent;

    let count = 0;

    while ((dirent = dir.readSync()) !== null) {
        let name = dirent.name.split('.')[0];
        let img_dir = path.join(imagesDirectory, dirent.name);
        let is_published ;

        const imageBuffer = fs.readFileSync(img_dir);

        if (count % 2 == 0){
            is_published = false;
        }else{
            is_published = true;
        }

        // Model inserting data in the database
        Brands.create({
            image_url: imageBuffer,
            name: name,
            published: is_published,
        });
        count +=1
    }
    dir.closeSync();
}

// Create table if exists pass then call function to insert data in database
Brands.sync()
.then(() => {console.log("Brands Model synced");})
.then(() => insertBrandImage());
  
