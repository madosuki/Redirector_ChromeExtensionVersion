'use strict'

const main = () => {
  const langToggleContainer = document.getElementsByClassName('lang-toggle-container')

  if(langToggleContainer.length === 0) {
    return
  }

  const left = location.href.substring(0, 27)
  const target = location.href.substring(27, 32)
  const right = location.href.substring(32, location.href.length)

  if(target === 'ja-jp') {
    const url = left + 'en-us' + right
    console.log('goto ' + url)
    location.href = url
  }
}

main()
