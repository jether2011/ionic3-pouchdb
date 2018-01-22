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
 
 # Configure access to couchDB on cloud server
   -  Create a port on firewal (like tcp 8888);
   
 # Configure CORS on cloud server
   - sudo nano /etc/couchdb/default.ini;
   - change port=5984 to the alowed port (like 8888);
   - change bind_address to 0.0.0.0;
   - enable_cors=true;
   - [cors] credentials=true and add the tag `origins=*`;
   - save the file;
   - sudo service crouchdb stop;
   - sudo service crouchdb start;
   - access `http://{cloud_external_ip}:8888/_utils/fauxton/#/database/`;
 
 # Add geolocation in the app
   - https://ionicframework.com/docs/native/geolocation/
  
 # Add native camera in the app
   - https://ionicframework.com/docs/native/camera/
   - To use the mock of the cordova to test base64 in browser (chrome at least) you need install the extensions:        `https://chrome.google.com/webstore/detail/cordova-mocks/` and now you can test base64 with browser;
 
 # Add native dialogs
   - https://ionicframework.com/docs/native/dialogs/
   
      
