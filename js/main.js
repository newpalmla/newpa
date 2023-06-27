
// Use an IIFE to avoid adding or affecting variables in the global scope.
(function() {

  // collapsible section events
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {

      var content = this.nextElementSibling;

      // if this item is active, close the content
      if (this.classList.contains("active"))
      {
        content.style.maxHeight = null;
      }
      // otherwise, close all other collapsibles and open the content
      else
      {
        for(item of coll){ 
          if (item.classList)
          item.classList.remove("active");
          item.nextElementSibling.style.maxHeight = null;
        }
        content.style.maxHeight = content.scrollHeight + "px";

        // get the collapsible items in this collapsible section
        var parentHeight = content.style.maxHeight;
        var collItems = content.getElementsByClassName("collapsible-item");
        var j;
        for (j = 0; j < collItems.length; j++) {
          collItems[j].addEventListener("click", function() {
            
            var itemContent = this.nextElementSibling;
            if (this.classList.contains("active-item"))
            {
              content.style.maxHeight -= itemContent.scrollHeight;
              itemContent.style.maxHeight = null;
              this.classList.remove("active-item");
              itemContent.classList.remove("has-content") 
            }
            else
            {
              for(item of collItems){ 
                if (item.classList)
                item.classList.remove("active-item");
                item.nextElementSibling.style.maxHeight = null;
                item.nextElementSibling.classList.remove("has-content") 
              }
              itemContent.style.maxHeight = itemContent.scrollHeight + "px";
              content.style.maxHeight = itemContent.scrollHeight + parentHeight;
              this.classList.add("active-item"); 
              itemContent.classList.add("has-content") 
            }

          });
        }
      }
      this.classList.toggle("active"); // toggle the active state of this collapsible

    });
  }

  
  var isMobile = function () {
    return window.innerWidth <= 900;
    };
  
  var rangeStart = function (elem) {
    return $(elem).offset().top - 125; //125 is height of navbar, fudge factor for rangestart
    };

  
  })();
  
  
  
  
  
  
  
  