class AppointmentFactory {
    Buid(simpleAppointment) {

        var day = simpleAppointment.date.getDay() + 1
        var month = simpleAppointment.date.getMonth()
        var year = simpleAppointment.date.getFullYear()

        var hour = Number.parseInt(simpleAppointment.time.split(":")[0])
        var minuts = Number.parseInt(simpleAppointment.time.split(":")[1])

        var appo = {
            id: simpleAppointment._id,
            title: simpleAppointment.name + " - " + simpleAppointment.description,
            start: undefined,
            end: undefined
        }
    }
}

module.exports = new AppointmentFactory()