let changeColor = document.getElementById('changeColor'); //this is html element selector that is in our case a button

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;//for the selected element change background color
    changeColor.setAttribute('value', data.color);//for the selected element change value tag
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };