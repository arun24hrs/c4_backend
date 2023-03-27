const checker = (req, res, next) => {
    if(req.headers.authorization){
        console.log(req.headers.authorization);
        next();
    }
    else {
        res.status(400).send({message: "Authorization failed, login first!"})
    }
}

module.exports=checker;