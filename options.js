let page = document.getElementById('buttonDiv'); //element to work use
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#FFFFFF']; //list of colors to use
  function constructOptions(kButtonColors) { //function to construct options
    for (let item of kButtonColors) { // for loop to iterate over all the buttons
      let button = document.createElement('button'); // what we will be creating
      button.style.backgroundColor = item; // select color from the iterator
      button.addEventListener('click', function() { //this is an event i,e what happens when it is clicked
        chrome.storage.sync.set({color: item}, function() { //this is the storage api and stores the color value
          console.log('color is ' + item);
        })
      });
      page.appendChild(button); //document object model, to dynamically update a access and update content
    }
  }
  constructOptions(kButtonColors); //call the function