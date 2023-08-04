function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
            member: '='
        },
        controller: function($scope, $element, $attrs) {
            $scope.member.skills = $scope.member.skills || [];
            $scope.addSkill = function() {
                $scope.member.skills.push({
                    name: '',
                    level: 0
                });
            };
            $scope.removeSkill = function(index) {
                $scope.member.skills.splice(index, 1);
            };
        }
    };
}`