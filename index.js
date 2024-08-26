/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const prompt = inquirer.createPromptModule();

prompt([
  {
    message: "What is the url that you want to convert into a QR image ? ",
    name: "url",
  },
])
  .then((answers) => {
    const url = answers.url;
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`url-image.png`));
  })
  .catch((err) => {
    console.log(err);
  });
