Linux was used to create this tutorial.

# Ionic3Pouchdb

http://couchdb.apache.org/

# Debian/Ubuntu install
   First, install the repository key to install couchdb

    curl -L https://couchdb.apache.org/repo/bintray-pubkey.asc \
        | sudo apt-key add -
        
    sudo apt-get update && sudo apt-get install couchdb


  Verify the instalation

    sudo service couchdb status
    sudo service couchdb start
    sudo service couchdb stop

# Database access
 http://127.0.0.1:5984/_utils/

# Node install

# Ionic install

# Create ionic project
- ionic start tab {project_name}

- Install pouchDB (https://pouchdb.com/)
    `npm install pouchdb --save`

- CORS configure
    `sudo npm install -g add-cors-to-couchdb`

- Create Provider
    `ionic generate provider "NomeProvider"`

- pouchdb find
     `sudo npm install pouchdb-find --save`
     
 # Prepare CouchDB server on cloud server
      https://www.digitalocean.com/community/tutorials/how-to-install-couchdb-and-futon-on-ubuntu-14-04
