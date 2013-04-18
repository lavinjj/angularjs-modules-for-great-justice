myViewModule.provider('myViewModel', function() {

    function person(){
        return {
            firstName: '',
            lastName: '',
            getFullName: function() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    };

    this.$get = function() {
        return new person();
    };
});