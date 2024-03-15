function makeAlbum (artist: string, tittle: string): { artist: string; tittle: string} {
const dictionaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: tittle.charAt(0).toUpperCase() + tittle.slice(1)


};
return dictionaries;

} 

let album = makeAlbum("ali", "light")
console.log(album)

album = makeAlbum("bilal", "red ware")
console.log(album)

album = makeAlbum("hamza","seenbreez")
console.log(album)