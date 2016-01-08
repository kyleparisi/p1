module.exports = function () {

  var card = document.createElement('div');
  card.className = "list";
  var cardContent = document.createElement('div');
  cardContent.className = "card";

  return {
      card: card,
      cardContent: cardContent
  }

}
