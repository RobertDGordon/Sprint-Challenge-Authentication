module.exports = (req, res, next) => {
    // console.log(req.session, req.session.username )
    if(req.session && req.session.username) {
        next();
    } else {
        res.status(401).json( {message: 'Unauthorized access!' });
    };
  };