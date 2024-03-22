
function validatePaginationParams(req,res,next){
    const limit = isNaN( req.query.limit )  
    if(limit) req.query.limit = 10

    const page = isNaN( req.query.page ) 
    if(page) req.query.page = 1
    
    next()
} 

module.exports = validatePaginationParams
