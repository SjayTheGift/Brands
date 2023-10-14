const client = require('./db_config');
var fs = require('fs');
var path = require('path');


const createBrandsTable =  async() => {

    // SQL statement to create the brands table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS brands (
        id SERIAL PRIMARY KEY,
        image TEXT,
        name TEXT,
        is_published BOOLEAN
        )
    `;
     await client.connect(); // creates connection
     await client.query(createTableQuery); // sends query
}

const imagesDirectory = path.join(__dirname, 'brands_img');


const insertBrandImage = async() => {
    const dir = fs.opendirSync(imagesDirectory);
    let dirent;

    let count = 0;

    while ((dirent = dir.readSync()) !== null) {
        let name = dirent.name.split('.')[0];
        let img_dir = path.join(imagesDirectory, dirent.name);
        let is_published ;

        

        if (count % 2 == 0){
            is_published = false;
        }else{
            is_published = true;
           
        }
        

        const insertQuery  = `
            INSERT INTO brands (image ,name , is_published)  
            VALUES($1,$2,$3)
            RETURNING *
        `;
        const values = [img_dir, name, is_published];
        // client.connect(); // creates connection
        
        try{
           await client.query(insertQuery, values) // sends query
           count += 1
            // console.log(`${name} image brands inserted successfully`)
        }catch(err){
            console.log(err)
        }finally {
            // client.end(); // closes connection
        }
    }

    dir.closeSync();
}

  
// Call the function to create the brands table
createBrandsTable()
.then(() => console.table('brands table created successfully'))
.then(() => insertBrandImage())
.then(() => console.table('image brands inserted successfully'))
.then(() => client.end())
.catch(error => console.error(error.stack));
