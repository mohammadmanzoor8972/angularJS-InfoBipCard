angular
    .module('InfobipContentCard')
    .factory('CONSTANT', function() {
        return {

            'BASEURL': "http://localhost:4030",

            'APPLICATION': {
                NAME: 'Content Card ',
                PORT: 4030,
                COPYRIGHT: 'InfoBip Ltd'
            },

            'API': {
                GET_API_DETAILS: '/api/',
                GET_ALL_CARD: '/api/getcardItemlist',
                GET_CARD_BY_ID: '/api/getcardItemlistbyId',
                ADD_CARD: '/api/addCard',
                DELETE_CARD: '/api/deleteCardById',
                UPDATE_CARD: '/api/updateCardById'
            },
            'MESSAGES': {

            },

            'AUTHOR': {
                NAME: 'Mohammad Manzoor Alam',
                DESIGNATION: 'Sr. Software Enginner',
                MOBILE: '91-9028753596',
                EMAIL: 'mohammad.manzoor8972@gmail.com',
                CREATED_ON: '12 Nov 2015',
                MODIFIED_ON: '27 JAN 2016'
            }
        };
    })