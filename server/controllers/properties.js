module.exports = {  
    get: async (req, res) => {
        const db = req.app.get('db');
        let listings = await db.getListings()
        res.status(200).send(listings)
    },
    post: async (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip} = req.body
        let listings = await db.addProperty(name, address, city, state, zip)
        res.status(200).send(listings)
    },
    delete: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        let listings = await db.deleteListing(id)
        res.status(200).send(listings)
    }
}