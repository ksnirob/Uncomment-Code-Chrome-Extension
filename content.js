chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeCode") {

        var htmlContent = document.documentElement.innerHTML;

        // Uncomment the code excluding <style> and <!--[if mso]> <![endif]-->
        var uncommentedCode = htmlContent.replace(/<!--(?!<!\[endif\]-->)\s*([\s\S]*?)\s*-->/g, function(match, group1) {
            return group1.replace(/<style>[\s\S]*?<\/style>/g, '') // Remove content inside <style> tags
        });

        try {
            // Set the uncommented code to the body's innerHTML
            document.body.innerHTML = uncommentedCode;
        } catch (error) {
            console.error("Error setting innerHTML:", error);
        }

    }
     
  });

