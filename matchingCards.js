// Returns an array of arrays of matching values

const matchingCards = (hand) => {
  hand.sort((a, b) => b.value - a.value)
  // filter pairs/trips
  const uniqueValues = []


  for (let i = 0; i < hand.length; i++) {
    if (!uniqueValues.includes(hand[i].value)) {
      uniqueValues.push(hand[i].value)
    }
  }
  // array of array pairs/sets/quads
  const arr = []

  for (let i = 0; i < uniqueValues.length; i++) {
    const x = []
    hand.forEach(e => {
      if (e.value === uniqueValues[i]) {
        x.push(e)
      }
    })
    arr.push(x)
  }
  return arr.sort((a, b) => b.length - a.length)
}

export default matchingCards