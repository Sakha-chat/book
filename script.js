document.addEventListener("DOMContentLoaded", function () {
    const highlightsContainer = document.getElementById("highlights");
    const text = document.getElementById("text");

    // Function to create and display a highlight
    function createHighlight(range) {
const highlight = document.createElement("div");
highlight.classList.add("highlighter");
const rect = range.getBoundingClientRect();
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
highlight.style.left = rect.left + scrollLeft + "px";
highlight.style.top = rect.top + scrollTop + "px";
highlight.style.width = rect.width + "px";
highlight.style.height = rect.height + "px";
highlightsContainer.appendChild(highlight);
}


    // Event listener to track text selection
    text.addEventListener("mouseup", function (event) {
      const selection = window.getSelection();
      if (selection.toString().length > 0) {
        createHighlight(selection.getRangeAt(0));
      }
    });
  });