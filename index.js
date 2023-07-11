const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const path = require('path')
const log = require("../structs/log.js");
const fs = require("fs");
const bodyParser = require('body-parser');
const catalog = require("../Config/catalog_config.json")

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.use('/', express.static(path.join(__dirname, 'html')));

app.use(bodyParser.json());

app.post('/api/save', (req, res) => {
  const data = req.body;
  // console.log(data);
  const items = Object.values(data).filter(item => item.cosmetic !== '' && item.price !== '');
  // console.log(items)
  
  // const daily = data.daily;

  // const dailyItems = Object.values(daily).filter(item => item.cosmetic !== '' && item.price !== '');
  // const searchID = dailyItems.filter((item) => item.checked !== false);
  // const requests = dailyItems.map((item) => {
  //   if (item.searchID == true) {
  //     axios.get(`https://fortnite-api.com/v2/cosmetics/br/${item.cosmetic}`)
  //       .then(function (response) {
  //         // handle success
  //         const data = response.data;
  //         const itemID = `${data.data.type.backendValue}:${data.data.id}`;
  //         log.dashboard(`Cosmetic ${data.data.name} found.`);
  //         log.dashboard(`Price ${item.price}`)
  //         log.dashboard(`Backend ID: ${itemID}`);
  //         // fs.readFile(catalog, (err, data) => {
  //         //   if (err) throw err;
  //         //   let catalog = JSON.parse(data);
  //         //   console.log(catalog)
  //         // })
  //         // console.log(searchID);
  //         const itemData = {
  //           "itemID": itemID,
  //           "price": item.price
  //         };
  //         console.log(itemData);
  //         console.log(catalog);
  //         let itemData2 = JSON.stringify(itemData);
  //         fs.writeFileSync('../Config/catalog_config.json', itemData2);
  //         //   var itemData2 = JSON.stringify(itemData)
  //         //   // Write the updated data to the JSON file
  //         //   fs.appendFile(catalog, itemData2, err => {
  //         //     // error checking
  //         //     if(err) throw err;
  //         // }); 
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error)
  //         const errorCode = error.response.status;
  //         if (errorCode == 400) {
  //           log.error(`Cosmetic ${item.cosmetic} was not found!`);
  //         } else {
  //           log.error(error);
  //           res.status(500).send('An issue occurred.');
  //         }
  //       });
  //   } else {
  //     // axios.get(`https://fortnite-api.com/v2/cosmetics/br/search?name=${item.cosmetic}`)
  //     //   .then(function (response) {
  //     //     // handle success
  //     //     const data = response.data;
  //     //     const itemID = `${data.data.type.backendValue}:${data.data.id}`;
  //     //     log.dashboard(`Cosmetic ${item.cosmetic} found.`);
  //     //     log.dashboard(`Price ${item.price}`)
  //     //     log.dashboard(`Backend ID: ${itemID}`);
  //     //     // console.log(response.data);
  //     //   })
  //     //   .catch(function (error) {
  //     //     // handle error
  //     //     const errorCode = error.response.status;
  //     //     if (errorCode == 404) {
  //     //       log.error(`Cosmetic ${item.cosmetic} was not found!`);
  //     //     } else {
  //     //       log.error(error);
  //     //       res.status(500).send("An issue occurred.");
  //     //     }
  //     //   })
  //   }
// }
// );


// Promise.all(requests)
//   .then(function () {
//     // All requests completed
//   })
//   .catch(function (error) {
//     // Handle error if any of the requests failed
//     console.log(error);
//   });

//   // Perform additional operations or save the data as per your requirements

});

app.listen(port, () => {
  log.dashboard("Dashboard online on port 3000");
})