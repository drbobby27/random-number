const app = new Vue({
    el: '#app',
    data: {
        dataYears: [  1950, 1994, 2001, 1997, 1986 ],
        dataUsers: [],
        savesGame: 7,
        clientNumber: "",
        userName:"",
        displayName:"",
        randomNumber: "",
        randomIndex: "",
        diferrenceMessage: "",
        errors: false
    },
    methods: {
       
        generateIndexRandom () {
            return this.randomIndex =  Math.floor(Math.random() * this.dataYears.length )
        },
        currentNumber() {
            this.alertRandom()
            return this.randomNumber = this.dataYears[this.generateIndexRandom()]
        },
        defineMajorMinor(parameter ) {
          this.validateValues(parameter)
          this.alertDifference() 
          this.validateSaves()
        },
        validateValues(param){
            
            if(param < this.randomNumber ) {
                return this.diferrenceMessage = `El numero ingresado es menor. ${this.defineDifference(param)}. El numero de vidas que te queda es: ${this.savesGame -= 1}`
            } else if (param > this.randomNumber){
                return this.diferrenceMessage = `El numero ingresado es mayor. ${this.defineDifference(param)}. El numero de vidas que te queda es: ${this.savesGame -= 1}`
            }else if(param === this.randomNumber){return this.diferrenceMessage = 'El numero es correcto'
            }

        },
        defineDifference(param) { 
            let order = [param, this.randomNumber].sort((a,b) => b - a)
            let defined = order[0] - order[1]

            let res = (defined < 50 ) ?
                 'La diferencia entre los numeros es menor a 50' :
                 'La diferencia entre los numeros es mayor a 49'
                 return res
        },
        validateSaves(){
             this.showError()
             this.addDataUsers()
        },

        addDataUsers(){ 
            if(this.savesGame < 1) {
                 
                 this.dataUsers.push({
                 name: this.userName,
                 lifes: this.savesGame
                })  
                this.userName = '' 
                this.savesGame = 7
            console.log(`[Data Users: ] ${this.dataUsers}`)}
        },
        showError(){
            if(this.savesGame < 1) { 
            this.clientNumber =  '' 
             this.alertError()  
            }
        },
        alertRandom() {
            Swal.fire(
                'Yay!',
                'Random number generated',
                'success'
              )
        },
        alertError() {
            Swal.fire(
                'Oops !',
                'Game Over',
                'warning'
              )
        },
        alertDifference() {
            Swal.fire(
                'Message',
                this.diferrenceMessage,
                'info'
              )
        }
    },
    computed: {
        
    }
  })




 


 

 




