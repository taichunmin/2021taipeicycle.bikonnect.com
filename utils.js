const _ = require('lodash')

exports.getenv = (key, defaultval) => _.get(process, ['env', key], defaultval)

exports.getBaseUrl = () => _.trimEnd(exports.getenv('BASEURL', 'https://2021taipeicycle.bikonnect.com/'), '/') + '/'
