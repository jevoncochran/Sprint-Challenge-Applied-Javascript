// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
let cardsCont = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response);
        let bootstrap = response.data.articles.bootstrap;
        bootstrap.forEach(item => cardsCont.appendChild(cardCreator(item.authorName, item.authorPhoto, item.headline)));
        let javascript = response.data.articles.javascript;
        javascript.forEach(item => cardsCont.appendChild(cardCreator(item.authorName, item.authorPhoto, item.headline)));
        let technology = response.data.articles.technology;
        technology.forEach(item => cardsCont.appendChild(cardCreator(item.authorName, item.authorPhoto, item.headline)));
        let jQuery = response.data.articles.jquery;
        jQuery.forEach(item => cardsCont.appendChild(cardCreator(item.authorName, item.authorPhoto, item.headline)));
        let nodejs = response.data.articles.node;
        nodejs.forEach(item => cardsCont.appendChild(cardCreator(item.authorName, item.authorPhoto, item.headline)));
    })
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(headlineText, imgSRC, authorNameText) {
    const card = document.createElement('div'),
            headline = document.createElement('div'),
            author = document.createElement('div'),
            imgCont = document.createElement('div'),
            pic = document.createElement('img'),
            authorName = document.createElement('span');

            headline.textContent = headlineText;
            pic.src = imgSRC;
            authorName.textContent = authorNameText;

            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgCont.classList.add('img-container');

            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgCont);
            author.appendChild(authorName);
            imgCont.appendChild(pic);

            return card;
}
