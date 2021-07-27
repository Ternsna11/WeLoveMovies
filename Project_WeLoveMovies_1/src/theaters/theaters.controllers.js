const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(){
res.json({ data: await service.list() })
    // const data = await service.list()
    // res.json({ data })
}

module.exports = {
    list, 
} 