const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

document.getElementById('loremForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const paragraphs = parseInt(document.getElementById('paragraphs').value);
    const totalWords = parseInt(document.getElementById('totalWords').value);

    const wordsArray = loremIpsum.split(' ');
    const wordsPerParagraph = Math.floor(totalWords / paragraphs);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 0; i < paragraphs; i++) {
        let paragraph = '';
        for (let j = 0; j < wordsPerParagraph; j++) {
            paragraph += wordsArray[(i * wordsPerParagraph + j) % wordsArray.length] + ' ';
        }
        outputDiv.innerHTML += `<p>${paragraph.trim()}.</p>`;
    }
});