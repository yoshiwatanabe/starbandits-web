'use strict';

/* App Module */


angular.module('gamesModule', []).
        config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/myPlayers', {templateUrl: 'partials/myplayer-list.html', controller: MyPlayerListCtrl}).
                when('/myPlayers/:playerId', {templateUrl: 'partials/myplayer-detail.html', controller: MyPlayerDetailCtrl}).
                when('/myPlayers/:playerId/milestoneStatuses', {templateUrl: 'partials/myplayer-milestoneStatus-list.html', controller: MyPlayerMilestoneStatusListCtrl}).
                when('/myPlayers/:playerId/milestoneStatuses/:milestoneTypeId', {templateUrl: 'partials/myplayer-milestoneStatus-detail.html', controller: MyPlayerMilestoneStatusDetailCtrl}).
                when('/myPlayers/:playerId/garrisonSnapshots', {templateUrl: 'partials/myplayer-garrisonSnapshot-list.html', controller: MyPlayerGarrisonSnapshotListCtrl}).
                when('/myPlayers/:playerId/garrisonSnapshots/:index', {templateUrl: 'partials/myplayer-garrisonSnapshot-detail.html', controller: MyPlayerGarrisonSnapshotDetailCtrl}).
                when('/myPlayers/:playerId/achievements', {templateUrl: 'partials/myplayer-achievement-list.html', controller: MyPlayerAchievementListCtrl}).
                when('/myPlayers/:playerId/achievements/:index', {templateUrl: 'partials/myplayer-achievement-detail.html', controller: MyPlayerAchievementDetailCtrl}).
                when('/myPlayers/:playerId/ships', {templateUrl: 'partials/myplayer-ship-list.html', controller: MyPlayerShipListCtrl}).
                when('/myPlayers/:playerId/ships/:shipId', {templateUrl: 'partials/myplayer-ship-detail.html', controller: MyPlayerShipDetailCtrl}).
                when('/myPlayers/:playerId/ships/:shipId/resourceInventory', {templateUrl: 'partials/myplayer-ship-detail-resourceInventory.html', controller: MyPlayerShipDetailResourceInventoryCtrl}).
                when('/myPlayers/:playerId/ships/:shipId/mineInventory', {templateUrl: 'partials/myplayer-ship-detail-mineInventory.html', controller: MyPlayerShipDetailMineInventoryCtrl}).
                when('/myPlayers/:playerId/ships/:shipId/fighterInventory', {templateUrl: 'partials/myplayer-ship-detail-fighterInventory.html', controller: MyPlayerShipDetailFighterInventoryCtrl}).
                when('/myPlayers/:playerId/ships/:shipId/gadgetInventory', {templateUrl: 'partials/myplayer-ship-detail-gadgetInventory.html', controller: MyPlayerShipDetailGadgetInventoryCtrl}).
                when('/myPlayers/:playerId/ships/:shipId/armsInventory', {templateUrl: 'partials/myplayer-ship-detail-armsInventory.html', controller: MyPlayerShipDetailArmsInventoryCtrl}).
                when('/listings', {templateUrl: 'partials/listing-list.html', controller: DirectoryCtrl}).
                when('/templates', {templateUrl: 'partials/template-list.html', controller: TemplateListCtrl}).
                when('/templates/:templateName', {templateUrl: 'partials/template-detail.html', controller: TemplateDetailCtrl}).
                when('/templates/:templateName/typesections', {templateUrl: 'partials/template-typesection-list.html', controller: TemplateTypeSectionListCtrl}).
                when('/templates/:templateName/typesections/:typesectionname', {template:'<div ng-include="templateUrl">Loading...</div>', controller: HandleCtrl}).
                when('/games', {templateUrl: 'partials/game-list.html', controller: GameListCtrl}).
                when('/games/:gameId', {templateUrl: 'partials/game-detail.html', controller: GameDetailCtrl}).
                when('/games/:gameId/accountPlayerViews', {templateUrl: 'partials/game-accountPlayerView-list.html', controller: GameAccountPlayerViewListCtrl}).
                when('/games/:gameId/accountPlayerViews/:playerId', {templateUrl: 'partials/game-accountPlayerView-detail.html', controller: GameAccountPlayerViewDetailCtrl}).
                when('/games/:gameId/spaceagerules', {templateUrl: 'partials/game-spaceagerule-list.html', controller: GameSpaceAgeRuleListCtrl}).
                when('/games/:gameId/starsystemrules', {templateUrl: 'partials/game-starsystemrule-list.html', controller: GameStarSystemRuleListCtrl}).
                otherwise({redirectTo: '/myPlayers'});
    }]);
