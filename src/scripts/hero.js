let typed = document.querySelector('.hero-container .typed');
let dataItems = typed.getAttribute('data-items').split(', ');

typeItems()

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function typeItems () {
  while (dataItems.length > 0) {
    for (dataItem of dataItems) {
      let itemLetters = dataItem.split('');
      for (const letter of itemLetters) {
        typed.innerText += letter;
        await sleep(100)
      }

      await sleep(2000)

      for (const i in itemLetters) {
        let text = typed.innerText;
        let subtractTyped = text.substring(0, text.length - 1)
        typed.innerText = subtractTyped;
        await sleep(100)
      }

      await sleep(1000)
    }
  }

}


