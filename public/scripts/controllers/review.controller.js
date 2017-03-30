app.controller('ReviewController', ['$routeParams', 'CardDetailFactory',
function($routeParams, CardDetailFactory) {
  console.log('review controller loaded');
  console.log($routeParams);
  var self = this;
  self.placeDetails = CardDetailFactory.allDetails;
  self.previousVisits = CardDetailFactory.previousVisitDetails;


// console.log('self.newReview', self.newReview);
  CardDetailFactory.getPlace($routeParams.placeId);

  CardDetailFactory.getReviews($routeParams.placeId);

  self.addNewReview = function() {
    console.log('clicked', self.newReview);
    self.newReview.id = $routeParams.placeId;
    CardDetailFactory.addNewReview(self.newReview);
    self.newReview = {};
  }
CardDetailFactory.getReviews($routeParams.placeId);


  // console.log(self.placeDetails);
}]);
