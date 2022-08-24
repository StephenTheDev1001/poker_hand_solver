import handObj from './handObj';

// pairs changed to Jacks or Better

const handCheck = (handArrStr) => {

  const {
    hand,
    straightFlush,
    fourOf,
    fullHouse,
    flush,
    straight,
    threeKind,
    twoPair,
    pair
  } = handObj(handArrStr)

  console.log(handObj(handArrStr))

  if (straightFlush) {
    return straightFlush[0].value === 14
      ?
      {
        msg: 'royal flush',
        handRank: 0,
        hand: hand
      }
      :
      {
        msg: 'straight flush',
        handRank: 1,
        hand: hand
      }
  } else if (fourOf) {
    return {
      msg: 'four of a kind',
      handRank: 2,
      hand: hand
    }
  } else if (fullHouse) {
    return {
      msg: 'full house',
      handRank: 3,
      hand: hand
    }
  } else if (flush) {
    return {
      msg: 'flush',
      handRank: 4,
      hand: hand.slice(0, 5)
    }
  } else if (straight) {
    return {
      msg: 'straight',
      handRank: 5,
      hand: hand
    }
  } else if (threeKind) {
    return {
      msg: 'three of a kind',
      handRank: 6,
      hand: hand
    }
  } else if (twoPair) {
    return {
      msg: 'two pair',
      handRank: 7,
      hand: hand
    }
  } else if (pair) {
    return
    pair[0].value > 10
      ?
      {
        msg: 'jacks or better',
        handRank: 8,
        hand: hand
      }
      :
      {
        msg: 'game over',
        handRank: 9,
        hand: hand
      }
  } else {
    return {
      msg: 'game over',
      handRank: 9,
      hand: hand
    }
  }
}



export default handCheck