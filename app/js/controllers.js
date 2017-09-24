var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $scope.accounts = [];
    $scope.coinbase = {};
    $scope.expectMainAcc = [];

    function _getAccountBalance(account) {
        return new Promise((resolve, reject) => {
            MetaCoin.getBalance.call(account, {
                from: account
            }).then(function (value) {
                alert(value);
                resolve({
                    account: value.valueOf()
                });
            }).catch(function (e) {
                console.log(e)
                reject()
            })
        })
    }

    web3.eth.getAccounts(function (err, accs) {
        if (err != null) {
            alert('There was an error fetching your accounts.')
            console.error(err);
            return
        }

        if (accs.length === 0) {
            alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
            return;
        }

        console.log(":::::::::Accounts :::::::::::");
        console.log(accs);

        var i = 0;
        var accountsAndBalances = accs.map((account) => {
            var accountName = "User" + i++;
            return _getAccountBalance(account).then((balance) => {
                return {
                    account, balance, accountName
                }
            })
        })

        var accountsclone = [];
        Promise.all(accountsAndBalances).then((accountsAndBalances) => {
            console.log("::::: accountsAndBalances ::::::");
            console.log(accountsAndBalances);
            accountsAndBalances[0].accountName = "Main Account";
            accountsclone = accountsAndBalances.slice();
            accountsclone.shift();
            //
            $scope.accounts = accountsAndBalances;
            $scope.coinbase = accountsAndBalances[0];
            $scope.expectMainAcc = accountsclone;
        });
    });


    $http.get('js/data.json').success(function (data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('js/data.json').success(function (data) {
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;


        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.artists.length - 1;
        }

        if ($routeParams.itemId < $scope.artists.length - 1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);

artistControllers.controller('RegistrationController', ['$scope', function ($scope) {

    $scope.register = function () {
        $scope.message = 'Welcome ' + $scope.user.firstname;
    };

}]);