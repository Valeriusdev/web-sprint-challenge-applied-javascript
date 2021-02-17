import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const mycard = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const myimage = document.createElement('img');
  const by = document.createElement('span');

  mycard.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  myimage.src = article.authorPhoto;
  by.textContent = `By ${article.authorName}`;

  mycard.appendChild(headline);
  mycard.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(by);
  imgContainer.appendChild(myimage);
  
  mycard.addEventListener('click', () => {
    console.log(headline.textContent)
  });

  return mycard;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {  
    console.log(res.data.articles); 

    const boot = res.data.articles.bootstrap;
    const js = res.data.articles.javascript;
    const jquery = res.data.articles.jquery;
    const node = res.data.articles.node;
    const tech = res.data.articles.technology;  
    const cardsContainer = document.querySelector(selector);

    boot.forEach(element => {
      const newArticle = Card(element); 
      cardsContainer.appendChild(newArticle);   
    });
    js.forEach(element => {
      const newArticle = Card(element); 
      cardsContainer.appendChild(newArticle);   
    });
    jquery.forEach(element => {
      const newArticle = Card(element); 
      cardsContainer.appendChild(newArticle);   
    });
    node.forEach(element => {
      const newArticle = Card(element); 
      cardsContainer.appendChild(newArticle);   
    });
    tech.forEach(element => {
      const newArticle = Card(element); 
      cardsContainer.appendChild(newArticle);   
    });

  })
  .catch((err) => {
    console.log(err);
  });

}

export { Card, cardAppender }
