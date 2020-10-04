chrome.runtime.onInstalled.addListener(function() {

    console.log("The color is green.");

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'web.whatsapp.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });


 
      
  });


  

