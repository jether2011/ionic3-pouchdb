The used OS to develop was Linux.

# ionic3-pouchdb

http://couchdb.apache.org/

# Debian/Ubuntu install
First, install the repository key
´´´
curl -L https://couchdb.apache.org/repo/bintray-pubkey.asc \
    | sudo apt-key add -
´´´
´´´
sudo apt-get update && sudo apt-get install couchdb
´´´
Verify the isntalltion

´´´
sudo service couchdb status
sudo service couchdb start
sudo service couchdb stop
´´´

# database access
´´´
http://127.0.0.1:5984/_utils/
´´´

# node install

# ionic install

# create ionic project
ionic start tab {project_name}

- Install pouchDB (https://pouchdb.com/)
npm install pouchdb --save

- CORS configure
sudo npm install -g add-cors-to-couchdb

- Create Provider
ionic generate provider "NomeProvider"

- pouchdb find
sudo npm install pouchdb-find --save