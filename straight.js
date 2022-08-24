const straight = function (hand) {
  hand = hand.sort((a, b) => b.value - a.value)

  // filter pairs/trips
  const uniqueValues = []
  const uniqueValuesHand = []

  for (let i = 0; i < hand.length; i++) {
    if (!uniqueValues.includes(hand[i].value)) {
      uniqueValues.push(hand[i].value)
      uniqueValuesHand.push(hand[i])
    }
  }

  const firstSlice = uniqueValuesHand.slice(0, 5)
  const secondSlice = uniqueValuesHand.slice(1, 6)
  const thridSlice = uniqueValuesHand.slice(2)

  const sliceArr = [firstSlice, secondSlice, thridSlice].filter(arr => arr.length > 4)

  for (let i = 0; i < sliceArr.length; i++) {
    if (sliceArr[i].every((el, index, arr) => arr[0].value === el.value + index)) {
      return sliceArr[i]
    }
  }

  // check for wheel
  const wheel = [5, 4, 3, 2, 14]
  const wheelHand = uniqueValuesHand.filter(c => wheel.includes(c.value))
  // push ace to end
  const ace = wheelHand.shift()
  wheelHand.push(ace)

  return wheelHand.length === 5 ? wheelHand : false
}

export default straight