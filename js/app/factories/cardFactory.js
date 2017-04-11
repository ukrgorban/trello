angular.module('app').factory('cardFactory', function(){
  var service = {};  
  
  var cards = [
      {
          id:1,
          description: 'Описание 1',
          list_id: 1
      },
      {
          id:2,
          description: 'Описание 2',
          list_id: 1
      },
      {
          id:3,
          description: 'Описание 3',
          list_id: 3
      }
  ];
  
  service.getCards = function(list){
      return _.filter(cards, {list_id: list.id});
  };
  
  service.createCard = function(list, cardDescription){
      cards.push({
          id: _.uniqueId('card_'),
          description: cardDescription,
          list_id: list.id
      });
  };
  
  service.removeCard =function(card){
      _.pull(cards, card);
  };
  
  service.updateCard = function(updatingCard){
      var card = _.find(cards, function(o) { return o.id === updatingCard.id; });
      card.description = updatingCard.description;
  };
  
  return service;
});


