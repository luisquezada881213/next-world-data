import { fetchCountryData } from '../../clients/api/client.api.countries'

const helmet = require('helmet')
const ipfilter = require('express-ipfilter').IpFilter
const rateLimit = require("express-rate-limit");

// Whitelist the following IPs
const ips = ['::ffff:127.0.0.1', '::1']

// rate limit
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message:
      "Too many accounts created from this IP, please try again after an hour"
  });
 
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, result => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async (req, res) => {

    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    console.log('welcome')

    await runMiddleware(req, res, helmet())
    // await runMiddleware(req, res, ipfilter(ips, { mode: 'allow' }))
    await runMiddleware(req, res, limiter)

    let data

    try {
        data = await fetchCountryData()
        data = {
            data: data.data.countries,
            status: 'success',
        }
    } catch (error) {
        data = {
            data: null,
            status: 'error',
        }
    }

    res.send(data)
};
