const ERROR_CODES = {
    EMAIL_NOT_FOUND:'Email not found',
    INVALID_PASSWORD:'Invalid password',
    USER_DISABLED:'User disabled',
    'auth':'Only authorization user'
}

export function errorCode(code){
 return ERROR_CODES[code] || 'Error undefined!'
}