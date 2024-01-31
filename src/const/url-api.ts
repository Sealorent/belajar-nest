
if(process.env.NODE_ENV != null) {
    require('dotenv').config({ path: `${process.cwd()}/.env.${process.env.NODE_ENV}`});
}else{
    require('dotenv').config({ path: `${process.cwd()}/.env`});
}


export const URL_API = {
    user_service: process.env.URL_API_USER_SERVICE,
    // marketing_service: process.env.URL_API_MARKETING_SERVICE,
    // registration_service: process.env.URL_API_REGISTRATION_SERVICE,
    // analytics_service: process.env.URL_API_ANALYTICS_SERVICE,
    // notification_service: process
}

console.log('url api', URL_API.user_service);