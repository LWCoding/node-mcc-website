const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "/templates/views"))
hbs.registerPartials(path.join(__dirname, "/templates/partials"))
app.use(express.static(path.join(__dirname, "/public")))

const navRouter = require("./routers/nav")
const emailRouter = require("./routers/emails")
app.use(navRouter)
app.use(emailRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})