const logger = require('../lib/logger')
const mongoUtils = require ("../../db/connection")
logger.info('Starting server...')

mongoUtils.connectToDatabase(function(){
   require('../../server/main').listen(3000, () => {
    logger.success('Server is running at http://localhost:3000')
  })
})
 
