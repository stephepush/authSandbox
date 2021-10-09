module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: "you are not authorized to view this resource" })
    }
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && Boolean(req.user.admin)) {
        next();
    } else {
        res.status(401).json({ msg: "you are not authorized to view this resource because you are not an admin" })
    }
}