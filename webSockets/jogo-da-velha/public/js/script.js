const app = new Vue({
    el:"#app",
    data:{
        socket: null,
        game:null,
        myTurn:null,
        symbol:null,
        playerName: null,
        message:"",
        blockRegister:false,
    },
    methods:{
        startGame(){
            this.message = "Aguardando adversário...";
            this.blockRegister = true;
            this.socket.emmit("game.begin", {
                playerName:this.playerName,
            });
        },
        renderTurnMessage(){
            this.message = this.myTurn ? "Sua vez de jogar" : "Aguarde a vez do adversário"
        }
    },
    mounted(){
         this.socket = io(window.location.origin)
         const self = this

         this.socket.on("game.begin", (data) => {
             this.game = data
             const myPlayer = 
                data._player1._socketId = self.socket.id
                ? data._player1 
                : data._player2
                
                self.symbol = myPlayer._symbol
                self.myTurn = data._turnOf == self.symbol
                self.renderTurnMessage()
         } )
    }
})