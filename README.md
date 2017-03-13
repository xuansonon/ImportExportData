# Import and Export Data
While thinking of creating a web browser game, I wondered how I would be able to handle saving and loading game data. Of course, I could use local storage, but what if the player wanted to play on one computer and load the same file on the next? Using a server would be OVERLY complicated for a simple game - so I thought about creating save data in the form of text.
<br/><br/>
Once the export and import methods were thought out, I then asked myself how I could convert the data to a different form so that users wouldn't be able to change it's contents (i.e. cheat or hack). I thought encoding the text in base64 would be enough - of course, the tech-savvy who understand encoding will know what to do, but this is just a game, it's not a server that holds millions of records containing personal information.
<br/><br/>
***How does it work***<br/>
JavaScript will grab the contents in the various text inputs on the page. Once that data is saved, the script will then concatenate the strings together to a form similar to below:
```
AA||BB||CC||DD ... YY||ZZ
```
When the export string is completed - we need to encode the string. JavaScript already has a defined function to encode/decode string. 
```
btoa(X), where X is string in plaintext. btoa() will return an encoded version of the text (X).
atob(X), where X is an encoded string. atob() will return a decoded version of a base64 encoded text.
```
<br/>
If you would like to demo the program, you can do so either by:<br/>
A. Downloading the source and opening via localhost OR,<br/>
B. Demoing on my site - http://www.xuansonon.com/projects/import-export-data/demo.html<br/><br/>

***References***<br/>
JavaScript Base64 Encoding/Decoding - https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
