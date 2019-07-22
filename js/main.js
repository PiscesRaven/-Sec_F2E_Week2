new Vue({
  el: '#main',
  data: {
    onDrag: false, // 拖曳狀態
    OnDragCard: null,//拖曳 號碼
    onDragGamming: null, //  拉起的區塊
    onDopGamming: null, //  放下的區塊
    onCatchDeck: null, //  放到暫時區
    isFinshed: false, // 完成牌區
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['♥', '♦', '♠', '♣'],
    cardList: [],
    draggable: false,
    suitColor: {
      '♠': 'spades',
      '♣': 'plum',
      '♦': 'diamond',
      '♥': 'heart',
    },
    temporarily: [],
    finish: [],
    gamming: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ],
    isDeckShuffled: false,
  },
  methods: {
    initCard() {
      let id = 1;
      for (let s = 0; s < this.suits.length; s++) {
        for (let r = 0; r < this.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          }
          this.cardList.push(card);
          id++;
        }
      }

      this.randonCard()
    },
    randonCard() {
      for (let i = this.cardList.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let temp = this.cardList[i];
        this.gamming[1].push(temp)
        Vue.set(this.cardList, i, this.cardList[randomIndex]);
        Vue.set(this.cardList, randomIndex, temp);
      }

      this.isDeckShuffled = true;
    }
  },
  created() {
    this.initCard();
  },
})