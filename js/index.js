$(document).ready((async () => {
  const faqBox = document.getElementsByClassName('faqBox')[0];
  const installBox = document.getElementsByClassName('installBox')[0];

  let language = (navigator.language || navigator.userLanguage).split('-')[0];
  if (!['pt', 'en'].includes(language)) language = 'en';
  const strings = await $.getJSON(`locales/${language}/strings.json`);

  let newValue = `<h2 style="margin: 18px 0px !important;">${strings.section['3'].title}</h2>`;
  const faqValues = strings.section['3'].faq;

  for (let i = 0; i < faqValues.length; i++) {
    newValue += `<details>
      <summary><h4 style="display: inline;">${faqValues[i].question}</h4></summary>
      ${faqValues[i].answer}
    </details>`;
  }

  faqBox.insertAdjacentHTML('beforeend', newValue);

  newValue = `<h2 style="margin-bottom: 18px !important;">${strings.section['4'].title}</h2><div class="showFeatures alignCenter" style="align-items: center;">`;
  const installValues = strings.section['4'].options;

  for (let i = 0; i < installValues.length; i++) {
    newValue += `<div class="feature" style="min-height: 155px;">
      <a href="${installValues[i].link}" target="_blank">
        <img style="cursor: pointer; ${installValues[i].imageStyle}" src="${installValues[i].imageButton}">
      </a>
      <br><br>
      <p style="margin-bottom: 0px;">${installValues[i].description}</p>
    </div>`;
  }

  installBox.insertAdjacentHTML('beforeend', newValue + "</div>");
}));

function scrollInstall() {
  const installBox = document.getElementsByClassName('installBox')[0];
  
  installBox.scrollIntoView();
  installBox.classList.add("blink");
  installBox.style.animation = "none";
  installBox.offsetHeight;
  installBox.style.animation = null;
};