
class CursoService{
    constructor(CursoModel){
        this.curso = CursoModel
    }

     async get(){
        const cursos = await this.curso.findAll()
        return cursos

    }

    async adicioar(cursoDTO){
        const curso = await this.curso.findOne({
            where:{
                nome: cursoDTO.nome
            }
        })
        if(curso != null){
            throw new Error('Ja existe um curso cadastrado com esse nome')
        }
        try {
            await this.curso.create({cursoDTO})
            
        } catch (error) {
            console.log(erro.message)
            throw error
        }
    }
}

module.exports = CursoService