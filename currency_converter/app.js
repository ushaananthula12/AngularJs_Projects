angular.module('currencyConverterApp', [])
    .controller('CurrencyConverterController', ['$scope', '$http', function($scope, $http) {
        $scope.currencies = ['USD', 'EUR', 'GBP', 'INR'];
        $scope.amount = 1;
        $scope.fromCurrency = 'USD';
        $scope.toCurrency = 'EUR';

        $scope.convert = function() {
            const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
            const url = `https://api.exchangerate-api.com/v4/latest/${$scope.fromCurrency}`;
            
            $http.get(url).then(function(response) {
                const rate = response.data.rates[$scope.toCurrency];
                $scope.convertedAmount = ($scope.amount * rate).toFixed(2);
            }, function(error) {
                console.error('Error fetching exchange rate:', error);
            });
        };
    }]);
