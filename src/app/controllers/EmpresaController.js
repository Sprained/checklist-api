const Yup = require('yup');

const Empresa = require('../schema/Empresa');

module.exports = {
    async register(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required()
        });

        //verificação dos campos preenchidos
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Compos invalidos' });
        }

        await Empresa.create(req.body)

        return res.status(201).json({ message: 'Empresa cadastrada com sucesso!' })
    },
    async index(req, res) {
        const empresas = await Empresa.find();

        return res.json(empresas)
    }
}