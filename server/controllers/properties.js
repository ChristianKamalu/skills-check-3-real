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
        console.log(listings)
        res.status(200).send("Property Listed")
    }
}