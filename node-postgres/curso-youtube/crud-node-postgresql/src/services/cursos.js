class CursoService{
    constructor(CursoModel){
        this.curso = CursoModel
    }

     async get(){
        const cursos = await this.curso.findAll()
        return cursos

    }

    async adicioar(cursoDTO){
        try {
            await this.curso.create({cursoDTO})
            
        } catch (error) {
            console.log(erro.message)
            throw error
        }
    }
}

module.exports = CursoService