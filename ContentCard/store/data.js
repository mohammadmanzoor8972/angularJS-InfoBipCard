function populateDB() {
    this.cardList = [];
}

populateDB.prototype.initilizeData = function() {
    this.cardList = [];
    this.addCardItem("Life", "Life is beautifull", "img/life1.jpg");
    this.addCardItem("Happy", "Life should be glorious and golden", "img/life2.jpg");
    this.addCardItem("Victory", "Never take rest on first victory", "img/life3.jpg");
    this.addCardItem("Challange", "Take every step as challenge", "img/life4.png");
    this.addCardItem("Death", "Everyone has to taste of death", "img/life5.jpg");
    this.addCardItem("Loness", "You are never alone because your shaddow always with you", "img/life6.jpg");

    return this.cardList;
}


populateDB.prototype.addCardItem = function(title, desc, imageUrl) {
    var counter = this.cardList.length + 1;
    this.cardList.push({
        id: counter,
        "title": title,
        "description": desc,
        "imageUrl": imageUrl
    });
}

populateDB.prototype.getCardItembyId = function(cardId) {
    console.log("Hello Sunny****")
    this.initilizeData();
    console.log(this.cardList);
    var foundData = this.cardList.filter(function(obj) {
        return obj.id == cardId;
    })
    return foundData;
}

module.exports = { 'populateDB': new populateDB() };