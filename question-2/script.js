const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const fs = require("fs");

/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node script.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)

async function processInfo(file = `./${args}`) {
    let datos = await CSVToJSON().fromFile(file).then();
    let products = [];
    
    datos.map(e => {
        if(!products.includes(e['entityId'])) { products.push(e['entityId']) }
    })
    console.log('Total productos en archivo:', products.length)

    let productAnalisis = [];

    for(let i=0; i < products.length; i++) {
        let productLecture = {};
        productLecture.productId = products[i];
        
        let clientsQty = [];
        let clicsCounter = 0;

        datos.map(e => {
            if(e['entityId'] === products[i]) {
                if(e['eventType'] === 'click') { clicsCounter++; }
                else {
                    if(!clientsQty.includes(e['user'])) { clientsQty.push(e['user']); }
                }
            }
        })

        productLecture.impressions = clientsQty.length;
        productLecture.clicks = clicsCounter;
        productLecture.CTR = clicsCounter/clientsQty.length;

        productAnalisis.push(productLecture);
    }

    const exportCSV = JSONToCSV(productAnalisis, { fields: ["productId", "clicks", "impressions", "CTR"] });
    fs.writeFileSync('./outputFinal.csv', exportCSV);
    console.log("Su archivo final ya está creado en esta carpeta");
}

processInfo();