const router = require("express").Router();
const { SignInHandler, SignUpHandler } = require("../controller/users");

router.post("/signin", SignInHandler);
router.post("/signup", SignUpHandler);

module.exports = router;
