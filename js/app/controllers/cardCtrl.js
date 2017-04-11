angular.module('app').controller('cardCtrl', function(cardFactory){
    
    this.isEditing = false;
    this.editingCard = null;
    
    this.removeCard = function(card){
        cardFactory.removeCard(card);
    };
    
    this.editCard = function(card){
        this.isEditing = true;
        this.editingCard = angular.copy(card);
    };
    
    this.updateCard = function(card){
        cardFactory.updateCard(this.editingCard);
        this.isEditing = false;
        this.editingCard = null;
    };
});
