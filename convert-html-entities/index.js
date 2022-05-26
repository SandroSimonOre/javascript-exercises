function convertHTMLEntities(str) {

    let keys = ['&', '<', '>', '"', "'"];
    let values = ['&amp;', '&lt;', '&gt;','&quot;','&apos;']
  
    keys.forEach((e, i) => {

      str = str.replaceAll(e, values[i])
      
    })
  
    return str

  }
  
let res = convertHTMLEntities("Dolce & Gabbana");

console.log(res)