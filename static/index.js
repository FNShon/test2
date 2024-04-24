import data from './data.js';

const root = document.querySelector("#root");

function main() {
  console.log(data);

  const section = document.createElement('section');

  const container = document.createElement('div');
  container.className = 'flat-list';

  const titleblock = document.createElement('div');
  titleblock.className = 'flat-list-title';

  const h1 = document.createElement('h1');
  h1.className = 'h1';
  h1.innerText = 'Clean Code Principles';

  titleblock.append(h1);
  container.append(titleblock);
  section.append(container);
  root.append(section);

  for (const cards of data){
    const card = document.createElement('div');
    card.className = 'card';

    const cardtitle = document.createElement('div');
    cardtitle.className = 'card__title';
    cardtitle.innerText = cards.title;

    const cardbody = document.createElement('div');
    cardbody.className = 'card__body';
    cardbody.innerText = cards.description;

    card.append(cardtitle, cardbody);
    section.append(card);
  }
  root.append(section);

}

main();
