const generateButton = document.querySelector('#generate-button');
      const titleInput = document.querySelector('#title');
      const generatedParagraph = document.querySelector('#generated-paragraph');

      // Add an event listener to the generate button
      generateButton.addEventListener('click', () => {
        // Get the value of the title input
        const title = titleInput.value;
        // Generate a paragraph based on the title
        const paragraph = `The title of this piece is "${title}". It is a thought-provoking and insightful exploration of the theme of ${title}. The author does an excellent job of using vivid language and compelling examples to illustrate their points. Overall, this is a must-read for anyone interested in ${title}.`;

        // Set the generated paragraph as the inner HTML of the generated paragraph div
        generatedParagraph.innerHTML = paragraph;
      });
