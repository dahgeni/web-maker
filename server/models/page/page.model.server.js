const mongoose = require("mongoose");
const PageSchema = require ("../user/user.schema.server");
const PageModel = mongoose.model("userModel", PageSchema);

PageModel.createpage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById =
 findPageById;
PagerModel.updatePage =
updatePage;
PageModel.deletePage = 
deletePage;



function createPage(page) {
   return PageModel.create(page);
 }
function findAllPagesForWebsite(wid) {
 return PageModel.create(wid);
}
function findPageById(pid) {
    return PageModel.findOne({pid});
}
function updatePage(pid, page){
    return PageModel.update({_id: pid}, page);
}

module.exports = PageModel;