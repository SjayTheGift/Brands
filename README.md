
# Challenge Fullstack App
Had to follow figma file to create the web app.


## Run Locally

Clone the project

```bash
  git clone https://github.com/SjayTheGift/Brands
```

Go to the project directory, update the .env file for connecting to posgreSQL database, with your own credentials.

```bash
    DB_USERNAME = username
    POSTGRESQL_DB_URI = db_name
    DB_PASSWORD = password
```

Open terminal on current dir and run below to install all dependencies.

```bash
  npm install
```

On your terminal

```bash
  cd frontend
  npm install
```

Once everything is installed go back to main dir using command and then
run command to create table and insert data in table.
```bash
  cd ..
  npm run query_db
```

Done running script, to run both server and react website run then click on provided url on the terminal.

```bash
  npm run dev
```


## Tech Stack

**Client:** React Js, Tailwind

**Server:** NodeJs, Express

