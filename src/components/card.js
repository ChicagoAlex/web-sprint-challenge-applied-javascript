import axios from 'axios';

const Card = (article) => {

  const cardPanel = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const image = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardPanel.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author')
  imgDiv.classList.add('img-container');

  headlineDiv.textContent = article.headline;
  image.src = article.authorPhoto;
  authorSpan.textContent = `By ${article.authorName}`;

  cardPanel.appendChild(headlineDiv);
  cardPanel.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(image);
  authorDiv.appendChild(authorSpan);

  return cardPanel

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
}

const cardAppender = (selector) => {
  const entryPoint = document.querySelector(selector)
  axios.get('http://localhost:5001/api/articles')
  .then(res =>{
    console.log(res.data.articles)
    res.data.articles.bootstrap.forEach(message => {
      const cardDiv = Card({headline: message.headline, authorPhoto: message.authorPhoto, authorName: message.authorName})
      entryPoint.appendChild(cardDiv)
      
    })
    
  })
  .catch(err =>{
    console.error(err)

  })
  .finally(() =>{
    console.log('Its working')
  })


  axios.get('http://localhost:5001/api/articles')
  .then(res =>{

    res.data.articles.javascript.forEach(message => {
      const cardDiv = Card({headline: message.headline, authorPhoto: message.authorPhoto, authorName: message.authorName})
      entryPoint.appendChild(cardDiv)
      
    })
    
  })
  .catch(err =>{
    console.error(err)

  })
  .finally(() =>{
    console.log('Its working')
  })


  axios.get('http://localhost:5001/api/articles')
  .then(res =>{

    res.data.articles.jquery.forEach(message => {
      const cardDiv = Card({headline: message.headline, authorPhoto: message.authorPhoto, authorName: message.authorName})
      entryPoint.appendChild(cardDiv)
      
    })
    
  })
  .catch(err =>{
    console.error(err)

  })
  .finally(() =>{
    console.log('Its working')
  })


  axios.get('http://localhost:5001/api/articles')
  .then(res =>{
    res.data.articles.node.forEach(message => {
      const cardDiv = Card({headline: message.headline, authorPhoto: message.authorPhoto, authorName: message.authorName})
      entryPoint.appendChild(cardDiv)
      
    })
    
  })
  .catch(err =>{
    console.error(err)

  })
  .finally(() =>{
    console.log('Its working')
  })


  axios.get('http://localhost:5001/api/articles')
  .then(res =>{
    console.log(res.data.articles)
    res.data.articles.technology.forEach(message => {
      const cardDiv = Card({headline: message.headline, authorPhoto: message.authorPhoto, authorName: message.authorName})
      entryPoint.appendChild(cardDiv)
      
    })
    
  })
  .catch(err =>{
    console.error(err)

  })
  .finally(() =>{
    console.log('Its working')
  })
    
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
