const Yup = require('yup');

const Card = require('../schema/Card');

module.exports = {
    async register(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required()
        });

        //verificação dos campos preenchidos
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Compos invalidos' });
        }

        const { nome } = req.body;

        await Card.create({ nome, empresa: req.params.id })

        return res.status(201).json({ message: 'Card cadastrado com sucesso!' })
    },
    async index(req, res) {
        const empresas = await Card.find({ empresa: req.params.id });

        return res.json(empresas)
    }
}