chrome.runtime.onInstalled.addListener(function() { //event that runs when onInstalled event occurs
    chrome.storage.sync.set({color: '#3aa757'}, function() { //call chrome storage api
      console.log('The color is green.'); //log on screen for selected color
    });
    //in this section rules are added to only activate when the pageURL is the one given
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() { //remove rules event when page changes
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });