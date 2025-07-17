const message = {
    'anyName':'help',
    'anyAge':20,
    'anyGender':'male',
    arrowFun: ()=>{
        return message.anyName + " " + message.anyAge + " " + message.anyGender // arrow function, no use of this keyword
    },
    simpleFun: function(){
        return this.anyName + " " + this.anyAge + " " + this.anyGender //  use of this keyword
    }

}
export default message;