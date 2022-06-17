function convertToRoman(num) {

    if (num === 1) return 'I'
  
    const r = ['M','CM','D','CD','C','XC','L','XL','X','IX','V', 'IV', 'I']
  
    const a = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  
    let resto;
    let entero;
    let resultado = '';
    
    for (let i = 0; i < a.length; i++) {
        if (num >= a[i]) {
          entero = Math.floor(num / a[i])
          resto = num % a[i]
          resultado += r[i].repeat(entero) + convertToRoman(resto)
          break;
        }
    }
  
   return resultado;
  }
  
  convertToRoman(36);