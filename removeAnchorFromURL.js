// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    let urlArray = url.split("");
    for(let i=0;i<urlArray.length;i++){
      if (urlArray[i] === "#"){
        let urlUnanchored = urlArray.slice(0,i);
        return urlUnanchored.join("");
      }
    }
    return url;
  }
