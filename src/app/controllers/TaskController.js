const Yup = require('yup');

const Task = require('../schema/Task');

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

        await Task.create({ nome, empresa: req.params.id })

        return res.status(201).json({ message: 'Tarefa cadastrada com sucesso!' })
    },
    async index(req, res) {
        const empresas = await Task.find({ empresa: req.params.id });

        return res.json(empresas)
    }
}