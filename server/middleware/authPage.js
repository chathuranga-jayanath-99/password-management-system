const authPage = (permissons) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (permissons.includes(userRole)) {
            next();
        }
        else {
            return res.status(403).send("Access Denied");
        }
    }
}

module.exports = authPage;