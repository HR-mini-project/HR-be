
function addTrackingTime(form){
    form.createdAt = new Date()
    form.updatedAt = new Date()
}

module.exports = addTrackingTime
