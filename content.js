chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeCode") {

        var htmlContent = document.documentElement.innerHTML;

        var uncommentedCode = htmlContent.replace(/<!--(?!<!\[endif\]-->)\s*([\s\S]*?)\s*-->/g, function(match, group1) {
            var uncommentedCodeFix = group1.replace(/<style>[\s\S]*?<\/style>/g, '');
            uncommentedCodeFix += '<img>';

            return uncommentedCodeFix;
        });

        try {
            document.body.innerHTML = uncommentedCode;
        } catch (error) {
            console.error("Error setting innerHTML:", error);
        }


    }
     
  });

