const UserModel = require("./User.model")


const index = async (req, res) => {
    try {
        const list = await UserModel.find()

        res.json(list)

    } catch (error) {
        console.log(error);

    }
}

const store = async (req, res) => {

    try {
        const {
            fullname,
            email,
            address,
            number,
            status,
        } = req.body

        const save = await UserModel.create({
            fullname,
            email,
            image: req.file.filename,
            address,
            number,
            status,
        })

        res.json({
            message: "Data Create Successfully!!",
            data: save
        })

    } catch (error) {
        console.log("error", error);

    }
}

const show = async (req, res) => {

    try {
        const { id } = req.params

        const list = await UserModel.findById(id)

        res.json({
            message: "List Fetched",
            list
        })
    } catch (error) {
        console.log("error", error);
    }
}

const updated = async (req, res) => {

    const {
        fullname,
        email,
        address,
        number,
        status,
        _id,
    } = req.body

    const update = await UserModel.findById(_id)

    update.fullname = fullname,
        update.email = email,
        update.image = req.file.filename,
        update.address = address,
        update.number = number,
        update.status = status,
        update.save();

    res.json({
        message: "Updated Successfully!!",
        data: update
    })
}

const deleted = async (req, res) => {

    try {

        const { id } = req.params

        const data = await UserModel.deleteOne({ _id: id })

        res.json({
            message: "deleted Successfully!!",
            data
        })

    } catch (error) {
        console.log(error);

    }

}

module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}
