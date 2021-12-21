const curso = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        nome: {
            type: DataTypes.STRING,
            unique: true
        },
        ch: {
            type: DataTypes.INTEGER
        }  
    },{
        tableName: 'curso'
    })

    return Curso
}

module.exports = curso