// app.js
(function() {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyShoppingController', ToBuyShoppingController)
      .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var toBuyCtrl = this;
      
      toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  
      toBuyCtrl.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }
  
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var boughtCtrl = this;
      
      boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }
  
    function ShoppingListCheckOffService() {
      var service = this;
  
      // Initial items to buy
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "milk", quantity: 2 },
        { name: "bread", quantity: 1 },
        { name: "eggs", quantity: 12 },
        { name: "cheese", quantity: 5 }
      ];
  
      var boughtItems = [];
  
      service.getToBuyItems = function() {
        return toBuyItems;
      };
  
      service.getBoughtItems = function() {
        return boughtItems;
      };
  
      service.buyItem = function(itemIndex) {
        var item = toBuyItems[itemIndex];
        toBuyItems.splice(itemIndex, 1);
        boughtItems.push(item);
      };
    }
  
  })();
  