document.getElementById('saveButton').addEventListener('click', function () {
  var dailyItems = document.querySelectorAll('.daily-item');
  var featuredItems = document.querySelectorAll('.featured-item');

  var data = {
    daily: [],
    featured: []
  };

  dailyItems.forEach(function (item) {
    var itemText = item.querySelector('input[type="text"]').value;
    var itemNumber = item.querySelector('input[type="number"]').value;
    var itemCheckbox = item.querySelector('input[type="checkbox"]').checked;
    data.daily.push({
      cosmetic: itemText,
      price: itemNumber,
      searchID: itemCheckbox
    });
  });

  featuredItems.forEach(function (item) {
    var itemText = item.querySelector('input[type="text"]').value;
    var itemNumber = item.querySelector('input[type="number"]').value;
    var itemCheckbox = item.querySelector('input[type="checkbox"]').checked;
    data.featured.push({
      cosmetic: itemText,
      price: itemNumber,
      searchID: itemCheckbox
    });
  });

  // Perform the POST request
  var xhr = new XMLHttpRequest();
  var url = '/api/save'; // Update the URL as per your Express server's route
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
});
