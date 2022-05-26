#Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

_Requeriments:_
1. convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

2. convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

3. convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

4. convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

5. convertHTML("Schindler's List") should return the string Schindler&apos;s List.

6. convertHTML("<>") should return the string &lt;&gt;.

7. convertHTML("abc") should return the string abc.


_Others:_
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-html-entities/16007
