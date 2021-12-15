class Player{

    constructor(name, symbol, socketId){
        this._name = name
        this._symbol = symbol
        this._socketId = socketId
    }


    getName(){
        return this._name
    }

    getSymbol(){
        return this._symbol
    }

    setSymbol(symbol){

        this._symbol = symbol
    }
    
    get socketId(){
        return this._socketId
    }
}

export default Player