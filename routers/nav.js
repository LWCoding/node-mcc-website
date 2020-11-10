const express = require("express")

const navRouter = express.Router()

navRouter.get("/", (req, res) => {
    res.render("home")
})

navRouter.get("/malaysia", (req, res) => {
    res.render("about")
})

navRouter.get("/objectives", (req, res) => {
    res.render("objectives")
})

navRouter.get("/achievements", (req, res) => {
    res.render("achievements")
})

navRouter.get("/jobs", (req, res) => {
    res.render("jobs")
})

navRouter.get("/board-members", (req, res) => {
    res.render("board")
})

navRouter.get("/contact", (req, res) => {
    res.render("contact")
})

navRouter.get("/local", (req, res) => {
    res.render("local")
})

navRouter.get("/join", (req, res) => {
    res.render("join")
})


navRouter.get("/newspaper", (req, res) => {
    res.render("newspaper")
})

navRouter.get("/embassy", (req, res) => {
    res.render("embassy")
})

navRouter.get("/mida", (req, res) => {
    res.render("mida")
})

navRouter.get("/past-events", (req, res) => {
    res.render("past-events")
})

module.exports = navRouter