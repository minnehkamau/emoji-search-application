(() => {
  let emojiList = []; // Declare emojiList as a global variable and initialize it to an empty array.

  const options = {
    method: "GET",
  };

  const emojiContainer = document.getElementById("emoji-container");

  function getEmoji() {
    fetch("https://emojihub.yurace.pro/api/all", options)
      .then((response) => response.json())
      .then((response) => {
        // Save the API response in the emojiList variable.
        emojiList = response;
        displayEmoji(emojiList);
      })
      .catch((err) => {
        console.error(err);
        // display error message to user
      });
  }

  document
  .getElementById("search-button")
  .addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value;
    // Filter the emojiList by checking if the name, category, or group of each emoji contains the search input.
    const filteredEmojiList = emojiList.filter(
      (emoji) =>
        emoji.name.includes(searchInput) ||
        emoji.category.includes(searchInput) ||
        emoji.group.includes(searchInput)
    );
    displayEmoji(filteredEmojiList);
  });


  function displayEmoji(emojiList) {
    try {
      // clear the emojiContainer element
      emojiContainer.innerHTML = ""; 
      emojiList.forEach((emoji) => {
        const emojiDiv = document.createElement("div");
        emojiDiv.innerHTML = 

        //display the emoji, name, category and group
        `
        <p style="font-size: 70px;"> ${emoji.htmlCode}</p>
        <p><b>${emoji.name}</p>
        <p>Category: ${emoji.category}</p>
        <p>Group: ${emoji.group}</p>
       
        `;
        emojiContainer.appendChild(emojiDiv);
      });
    } catch (error) {
      console.error(error);
      // display error message to user
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // display loading indicator
    getEmoji();
  });
})();

  
  
  
  