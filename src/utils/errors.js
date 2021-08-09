const ERROR_CODES = {
    EMAIL_EXISTS:'The email address is already in use by another account.',
    EMAIL_NOT_FOUND:'Email not found',
    INVALID_PASSWORD:'Invalid password',
    USER_DISABLED:'User disabled',
    'auth':'Please log in'
}

export function errorCode(code){
 return ERROR_CODES[code] || 'Error undefined!'
}