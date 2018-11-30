const mongoose = require("mongoose");
const PageSchema = require ("../user/user.schema.server");
const userModel = mongoose.model("userModel", PageSchema);

pageModel.createpage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById =
 findPageById;
pagerModel.updatePage =
updatePage;
pageModel.deletePage = 
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

module.exports = UserModel;