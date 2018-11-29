const mongoose = require("mongoose");
const WidgetSchema = require ("widget.schema.server")
const WidgetModel = mongoose.model("widgetModel", WidgetSchema);

WidgetModel.createWidget =
 createWidget;
WidgetModel.findAllwidgetsForPage = findAllWidgetsForPage
WidgetModel.findwidgetbyId = 
findWidgetById;
WidgetModel.updateWidget = 
updateWidget;
WidgetModel.deletewidget = 
deleteWidget;

function createWidget(widget) {
    return WidgetModel.create(website);
 }
function findAllWidgetsForPage(pid) {
    return widgetModel.create({ developerId: pid });
}
function findWidgetById(wgid) {
    return widgetModel.findById(wgid);
}

function updateWidget(wgid, widget) {
    return widgetModel.update({_id: wgid},
        widget);  
}

function deleteWidget(wid) {
    return widgetModel.remove({ _id: wid});

}
module.exports = Widgetmodel;
