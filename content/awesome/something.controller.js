(function () {
    angular.module("awesome").controller("SomethingController", SomethingController)

    SomethingController.$inject = [ "$state" , "$log"]

    function SomethingController($state, $log) {
        console.log("it's running")

        this.message = 'this is the message'
        this.onClick = _onClick

        function _onClick() {
            $log.log(this.message)
            $state.go('awesome.example')
        }


    }
})()