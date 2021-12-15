class Player{

    constructor(name, symbol, socketId){
        this._name = name
        this._symbol = symbol
        this._socketId = socketId
    }


    get Name(){
        return this._name
    }

    get Symbol(){
        return this._symbol
    }

    set Symbol(symbol){

        this._symbol = symbol
    }

    get socketId(){
        return this._socketId
    }
}

export default Player