const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("news");
});

router.get("/register", (req, res) => {
	res.render("register");

});
router.get("/news", (req, res) => {
	res.render("news");

});
router.get("/login", (req, res) => {
	res.render("login");

});
router.get("/forums", (req, res) => {
	res.render("forums");

});

module.exports = router;