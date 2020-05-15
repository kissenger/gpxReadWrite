

const gpxRead = require('./src/gpxRead.js').gpxRead;
const fs = require('fs');

const fileName = 'mendip_way.gpx';
const dir = './tests/data/'

loadFile(dir+fileName)
  .then( function(buffer) {


    gpxResult = gpxRead(buffer);



  })
  .catch( function(error) {
    console.log(error);
  })


/**
 * Load the data from the requested file into a buffer and give back a promise
 */
function loadFile(fn) {
  return new Promise ( (res, rej) => {
    fs.readFile(fn, (err, data) => {
      if (err) {
        rej(err);
      };
      res(data);
    })

  })
}
