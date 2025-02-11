function skillsMember() {
    return {
        restrict : 'E',
        templateUrl: 'modeles/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: 'true',
        scope: {
            member: '='
        }
    };
}