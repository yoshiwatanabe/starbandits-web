'use strict';

/* Controllers */

function GetApplicationUrl() {
    //return 'https://www.starbandits.com/app/Console';
    return 'http://localhost:4444';
}

function GetApiUrl() {
    //return 'https://www.starbandits.com/app/Api';
    return 'http://localhost/app/Api';
}

function TopNavigationCtrl($scope) {
    $scope.allGamesUrl = GetApplicationUrl() + '/index.html#/listings';
    $scope.testPlayersUrl = GetApplicationUrl() + '/index.html#/testPlayers';
}

function MyPlayerListCtrl($scope, $http) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas';
    $http.get($scope.url).success(function(data) {
        $scope.myPlayers = data;
    });

    $scope.goto = function(playerId) {
        var url = 'index.html#/myPlayers/' + playerId;
        window.location.href = url;
        return false;
    };
}

function MyPlayerDetailCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId;
    $http.get($scope.url).success(function(data) {
        $scope.myPlayer = data;
    });

    $scope.milestoneStatusesUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/milestoneStatuses';
    $scope.garrisonSnapshotsUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/garrisonSnapshots';
    $scope.achievementsUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/achievements';
    $scope.shipsUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships';
    
}


function MyPlayerMilestoneStatusListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/MilestoneStatuses';
    $http.get($scope.url).success(function(data) {
        $scope.myPlayerMilestoneStatuses = data;
    });

    $scope.goto = function(milestoneTypeID) {
        var url = 'index.html#/myPlayers/' + $routeParams.playerId + '/milestoneStatuses/' + milestoneTypeID;
        window.location.href = url;
        return false;
    };
}

function MyPlayerMilestoneStatusDetailCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/MilestoneStatuses/' + $routeParams.milestoneTypeId;
    $http.get($scope.url).success(function(data) {
        $scope.myPlayerMilestoneStatuse = data;
    });
}

function MyPlayerGarrisonSnapshotListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/GarrisonSnapshots';
    $http.get($scope.url).success(function(data) {
        $scope.garrisons = data;
    });

    $scope.goto = function(index) {
        var url = 'index.html#/myPlayers/' + $routeParams.playerId + '/garrisonSnapshots/' + index;
        window.location.href = url;
        return false;
    };
}

function MyPlayerGarrisonSnapshotDetailCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/GarrisonSnapshots/' + $routeParams.index;
    $http.get($scope.url).success(function(data) {
        $scope.garrison = data;
    });
}

function MyPlayerAchievementListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Achievements';
    $http.get($scope.url).success(function(data) {
        $scope.achievements = data;
    });

    $scope.goto = function(index) {
        var url = 'index.html#/myPlayers/' + $routeParams.playerId + '/achievements/' + index;
        window.location.href = url;
        return false;
    };
}

function MyPlayerAchievementDetailCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Achievements/' + $routeParams.index;
    $http.get($scope.url).success(function(data) {
        $scope.achievement = data;
    });
}


function MyPlayerShipListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships';
    $http.get($scope.url).success(function(data) {
        $scope.ships = data;
    });

    $scope.goto = function(shipId) {
        var url = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships/' + shipId;
        window.location.href = url;
        return false;
    };
}

function MyPlayerShipDetailCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships/' + $routeParams.shipId;
    $http.get($scope.url).success(function(data) {
        $scope.ship = data;
    });
    
    $scope.shipResourceInventoryUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships/' + $routeParams.shipId + '/resourceInventory';    
    $scope.shipMineInventoryUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships/' + $routeParams.shipId + '/mineInventory';    
    $scope.shipFighterInventoryUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships/' + $routeParams.shipId + '/fighterInventory';    
    $scope.shipGadgetInventoryUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships/' + $routeParams.shipId + '/gadgetInventory';    
    $scope.shipArmsInventoryUrl = 'index.html#/myPlayers/' + $routeParams.playerId + '/ships/' + $routeParams.shipId + '/armsInventory';
}

function MyPlayerShipDetailResourceInventoryCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships/' + $routeParams.shipId + '/ResourceInventory';
    $http.get($scope.url).success(function(data) {
        $scope.shipResourceInventory = data;
    });
}

function MyPlayerShipDetailMineInventoryCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships/' + $routeParams.shipId + '/MineInventory';
    $http.get($scope.url).success(function(data) {
        $scope.shipMineInventory = data;
    });
}

function MyPlayerShipDetailFighterInventoryCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships/' + $routeParams.shipId + '/FighterInventory';
    $http.get($scope.url).success(function(data) {
        $scope.shipFighterInventory = data;
    });
}

function MyPlayerShipDetailGadgetInventoryCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships/' + $routeParams.shipId + '/GadgetInventory';
    $http.get($scope.url).success(function(data) {
        $scope.shipGadgetInventory = data;
    });
}

function MyPlayerShipDetailArmsInventoryCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/LoggedOnAccount/PlayerDatas/' + $routeParams.playerId + '/Ships/' + $routeParams.shipId + '/ArmsInventory';
    $http.get($scope.url).success(function(data) {
        $scope.shipArmsInventory = data;
    });
}

function DirectoryCtrl($scope, $http) {

    $scope.listings = [
        {id: "games",
            name: "Games",
            description: "View a list of games that are hosted on our central server. Players can join and play one or more games."
        },
        {id: 'templates',
            name: "Templates",
            description: "Learn more details about a template. Each game is created from a template that defines a different set of rules."}

    ];

    $scope.goto = function(listingId) {
        var url = 'index.html#/' + listingId;
        window.location.href = url;
        return false;
    };
}

function TemplateListCtrl($scope, $http) {
    $http.get(GetApiUrl() + '/Templates').success(function(data) {
        $scope.templates = data;
    });

    $scope.goto = function(templateName) {
        var url = 'index.html#/templates/' + templateName;
        window.location.href = url;
        return false;
    };
}

function TemplateDetailCtrl($scope, $http, $routeParams) {
    $scope.templateName = $routeParams.templateName;
    var url = GetApiUrl() + '/Templates/' + $routeParams.templateName;
    $http.get(url).success(function(data) {
        $scope.template = data;
    });

    $scope.templateTypeSectionsUrl = 'index.html#/templates/' + $routeParams.templateName + '/typesections';
}

function TemplateTypeSectionListCtrl($scope, $http, $routeParams) {
    $scope.templateName = $routeParams.templateName;
    var url = GetApiUrl() + '/Templates/' + $routeParams.templateName + '/TypeSections';
    $http.get(url).success(function(data) {
        $scope.typesections = data;
    });

    $scope.goto = function(templateName, typesectionname) {
        var url = 'index.html#/templates/' + templateName + '/typesections/' + typesectionname;
        window.location.href = url;
        return false;
    };
}

function HandleCtrl($scope, $http, $routeParams) {
    $scope.templateUrl = 'partials/template-typesection-' + $routeParams.typesectionname + '-detail.html';

    var url = GetApiUrl() + '/Templates/' + $routeParams.templateName + '/TypeSections/' + $routeParams.typesectionname;
    $http.get(url).success(function(data) {
        $scope.typesection = data;
    });
}

function GameListCtrl($scope, $http) {
    $scope.url = GetApiUrl() + '/Games?includeRegulation=true';
    $http.get($scope.url).success(function(data) {
        $scope.games = data;
    });

    $scope.goto = function(gameId) {
        var url = 'index.html#/games/' + gameId;
        window.location.href = url;
        return false;
    };
}

function GameDetailCtrl($scope, $http, $routeParams) {
    $scope.gameId = $routeParams.gameId;
    $scope.url = GetApiUrl() + '/Games/' + $routeParams.gameId;
    $http.get($scope.url).success(function(data) {
        $scope.game = data;
    });

    $scope.gameAccountPlayerViewsUrl = 'index.html#/games/' + $routeParams.gameId + '/accountPlayerViews';
    $scope.gameSpaceAgeRulesUrl = 'index.html#/games/' + $routeParams.gameId + '/spaceagerules';
    $scope.gameStarSystemRulesUrl = 'index.html#/games/' + $routeParams.gameId + '/starsystemrules';
}


function GameAccountPlayerViewListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/Games/' + $routeParams.gameId + "/AccountPlayerViews";
    $http.get($scope.url).success(function(data) {
        $scope.accountPlayerViews = data;
    });

    $scope.goto = function(playerId) {
        var url = 'index.html#/games/' + $routeParams.gameId + '/accountPlayerViews/' + playerId;
        window.location.href = url;
        return false;
    };
}

function GameSpaceAgeRuleListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/Games/' + $routeParams.gameId + '/SpaceAgeRules';
    $http.get($scope.url).success(function(data) {
        $scope.spaceAgeRules = data;
    });
}

function GameStarSystemRuleListCtrl($scope, $http, $routeParams) {
    $scope.url = GetApiUrl() + '/Games/' + $routeParams.gameId + '/StarSystemRules';
    $http.get($scope.url).success(function(data) {
        $scope.starSystemRules = data;
    });
}

function GameAccountPlayerViewDetailCtrl($scope, $http, $routeParams) {

    $scope.url = GetApiUrl() + '/Games/' + $routeParams.gameId + "/AccountPlayerViews/" + $routeParams.playerId;
    $http.get($scope.url).success(function(data) {
        $scope.accountPlayerView = data;
    });
}
