const signup = (req, res, next) => {
    res.json({
        status: 'success',
        message: 'Signip route are working'
    })
}

module.exports = {
    signup
}