(function () {
  'use strict';

  /**
   * Config for the router
   */

  function notificationsConfiguration(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 2000,
      startBottom: 20,
      startRight: 20,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'bottom'
    });
  };

  angular.module('app')
    .config(notificationsConfiguration);

  notificationsConfiguration.$inject = ['NotificationProvider'];


})();
