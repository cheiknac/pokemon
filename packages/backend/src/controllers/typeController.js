import { Type, Pokemon } from '../models/IndexJoin.js';

const typeController = {
    async typesList(req, res) {
        const types = await Type.findAll();

        return res.json(types);
    },

    async oneType(req, res, next) {
        const { id } = req.params;

        const type = await Type.findByPk(id);

        if (!type) {
            return next();
        }
        return res.json(type);
    }


};

export { typeController };