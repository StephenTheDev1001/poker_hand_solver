// can return more than 5 cards 

const flush = function (hand) {
  const hearts = hand.filter(c => c.suit === 'h')
  const diamonds = hand.filter(c => c.suit === 'd')
  const spades = hand.filter(c => c.suit === 's')
  const clubs = hand.filter(c => c.suit === 'c')

  const arrSuits = [hearts, diamonds, spades, clubs]

  for (let i = 0; i < arrSuits.length; i++) {
    if (arrSuits[i].length > 4) {
      return arrSuits[i].sort((a, b) => b.value - a.value)
    }
  }
  return false
}

export default flush