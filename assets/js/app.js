// set environment variables
export GOOGLE_PLACES_API_KEY = "AIzaSyAEKxDDZn-bqAwEwOlISxa-y2sMxWuZ8ZI"
export GOOGLE_PLACES_OUTPUT_FORMAT = "json"


const app = new Vue({
    el: '#app',

    components: { VueGoogleAutocomplete },

    data: {
        address: ''
    },

    methods: {
        /**
        * When the location found
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        */
        getAddressData: function (addressData, placeResultData) {
            this.address = addressData;
        }
    }
});

