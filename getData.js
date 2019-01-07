const days = Array.from(
  document.querySelector('.adunis-examtable-overview').children
);

const exams = days
  .map(day => day.children)
  .map(([date, rest]) =>
    Array.from(rest.querySelectorAll('.fc-content')).map(content => [
      date,
      content
    ])
  )
  .flat();

exams
  .map(([dateElem, restElem]) => {
    const iElem = restElem.querySelector('i');
    const title = iElem.dataset.title.replace(/ \(Mit Zulassung\)/, '');
    const date = dateElem.innerText
      .replace(/.01.$/, '. Januar')
      .replace(/.02.$/, '. Februar');
    const time = restElem.querySelector('.adunis-exam-time').innerHTML;

    return `## [${title}](https://linkkkkkkkk.commmmmmmm) (${date}, ${time})`;
  })
  .join('\n\n');
