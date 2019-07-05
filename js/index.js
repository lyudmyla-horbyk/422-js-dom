const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';


const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara)

linkPara.parentNode.removeChild(linkPara);

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('chosen');

const colorDisplay = document.querySelector('.clock');



