const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const appointmentService = require("./services/AppointmentService")
const AppointmentService = require("./services/AppointmentService")
mongoose.set('strictQuery', true)

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

mongoose.connect("mongodb://127.0.0.1:27017/sistema-agendamento", {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/cadastro", (req, res) => {
    res.render("create")
})

app.post("/create", async (req, res) => {
    var status = await appointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time
    )

    if (status) {
        res.redirect("/")
    } else {
        res.send("Failed")
    }
})

app.get("/getcalendar", async (req, res) => {
    var consultations = await AppointmentService.GetAll(false)

    res.json(consultations)
})

app.get("/event/:id", async (req, res) => {
    var appointment = await AppointmentService.GetById(req.params.id)
    console.log(appointment)
    res.render("event", {appo: appointment})
})

app.listen(8080, () => {})
