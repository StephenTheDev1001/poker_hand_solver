import deck from './deckOfCards'
import flush from './flush'
import straight from './straight'
import matchingCards from './matchingCards';

function handObj(sevenCardArr) {
  // sorts hand highest Value Card to Lowest
  const hand = sevenCardArr.map(
    card => deck.find(d => card === d.key)
  ).sort((a, b) => b.value - a.value);

  // check straight flush 
  const straightFlush = (function () {
    if (flush(hand)) {
      return straight(flush(hand))
    }
    return false
  })();

  // four of a kind
  const fourOf = (hand) => {
    const fof = matchingCards(hand)

    if (fof[0].length === 4) {
      return (
        hand[0].value === fof[0][0].value
          ?
          [...fof[0], hand[4]]
          :
          [...fof[0], hand[0]]
      )
    }
    return false
  }

  // check full house
  const fullHouse = (hand) => {
    const fh = matchingCards(hand)

    if (fh[0].length === 3 && fh[1].length > 1) {
      return [...fh[0], ...fh[1].slice(0, 2)]
    }
  }

  // check 3 of kind
  const threeKind = (hand) => {
    const setHand = matchingCards(hand);

    if (matchingCards(hand)[0].length === 3) {
      const set = setHand.shift()
      return [...set, ...setHand[0], ...setHand[1]]
    }
    return false
  }

  // check 2 pair
  const twoPair = (hand) => {
    const twoPairHand = matchingCards(hand);

    if (twoPairHand[0].length === 2 && twoPairHand[1].length === 2) {
      const pair1 = twoPairHand.shift()
      const pair2 = twoPairHand.shift()
      return [...pair1, ...pair2, ...twoPairHand[0]]
    }
    return false
  }

  // check pair
  const pair = (hand) => {
    const pairHand = matchingCards(hand);

    if (pairHand[0].length === 2) {
      const pair = pairHand.shift()
      return [...pair, ...pairHand[0], ...pairHand[1], ...pairHand[2],]
    }
    return false
  }
  return {
    hand,
    straightFlush,
    fourOf: fourOf(hand),
    fullHouse: fullHouse(hand),
    matchingCards: matchingCards(hand),
    flush: flush(hand),
    straight: straight(hand),
    threeKind: threeKind(hand),
    twoPair: twoPair(hand),
    pair: pair(hand)
  }
}

export default handObj