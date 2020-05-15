"use strict"

// https://www.topografix.com/gpx.asp
// https://regex101.com/

/**
 * 
 * all data before trk or rte should be stored in meta data
 * 
 * { 
 * name: "mendip way",
 * }
 * 
 */

function gpxRead(buffer) {

  const lines = buffer.toString().split('\r\n');


  console.log(lines);

  console.log(lines[9].match(/<[a-z]/));



  /**
   * REGEXs 
   * lat/lon:                                             (?<=lon=")[+-]?[0-9]+.[0-9]+   or   (?<=lat=")[+-]?[0-9]+.[0-9]+
   * match full opening tag <tag>:                        (?<=<)[A-za-z:]+(?=>)
   * match half opening tag <tag blah...>                 (?<=<)[A-za-z:]+
   * match closing tag </tag>:                            (?<=<\/)[A-za-z:]+(?=>)
   * match numbers btwn two tags incl time (T and Z):     (?<=<[a-zA-Z:]+>)[0-9.TZ:\-]+(?=<\/[a-zA-Z:]+>)  
   * OR, if tag is known, this is probably quicker?       (?<=<ele>)[0-9.TZ:\-]+(?=<\/ele>)  
   * 
   * 
   */





}

function getTags(line) {

  const REGEX_LAT = /(?<=lon=")[+-]?[0-9]+.[0-9]+/;
  const REGEX_LON = /(?<=lat=")[+-]?[0-9]+.[0-9]+/;
  const REGEX_TAG = /(?<=<)[A-za-z:]+(?=>)/;
  const REGEX_VALUE = /(?<=>)[0-9.TZ:\-]+(?=<\/)/;
  // const REGEX_VALUE = /(?<=<TAG_NAME>)[0-9.TZ:\-]+(?=<\/TAG_NAME>)/;   <-- do this and inject TAG_NAME with replace when its known?


  console.log(line.match(/<[a-z]/));

  // if line has opening and closing tag on one line

  // if line has rtept or trkpt
      // then extract lat and lng
  
  
  return {[tag]: value}

}


module.exports = {
  gpxRead
}
