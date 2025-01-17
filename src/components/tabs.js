import axios from 'axios';

const Tabs = (topics) => {

  const topicPanel = document.createElement('div');
  const tabOne = document.createElement('div');
  const tabTwo = document.createElement('div')
  const tabThree = document.createElement('div');

  topicPanel.classList.add('topics');
  tabOne.classList.add('tab');
  tabTwo.classList.add('tab');
  tabThree.classList.add('tab');

  tabOne.textContent = topics[0];
  tabTwo.textContent = topics[1];
  tabThree.textContent = topics[2];

  topicPanel.appendChild(tabOne);
  topicPanel.appendChild(tabTwo);
  topicPanel.appendChild(tabThree);

  return topicPanel;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  const entryPoint = document.querySelector(selector);
  axios.get('http://localhost:5001/api/topics')
  .then(res =>{
    // console.log(res)
    res.data.topics.forEach(topic => {
      const topicPanel = Tabs([topic]);
      // console.log(topicPanel)
      entryPoint.appendChild(topicPanel);
    })
  })
  .catch(err => {
    // console.error(err);
  })
  .finally(() => {

  })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
