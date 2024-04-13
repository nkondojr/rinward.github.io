const authorize = (req, res, next) => {
    const { user } = req.query
    if(user === 'Rinward'){
        req.user = {name: 'Rinward', id: 3}
    }
    else{
        res.status(401).send('Unauthorized')
    }
    next()
}

module.exports = authorize