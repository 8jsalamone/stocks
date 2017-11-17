function Portfolio(){

    //instance variable
    this.stocks=[];


    //helper function
    function findStock(trk,list){
        //i represents the index of the trk you are looking for in this.stocks
        let i;
        for(let s=0; s< this.stocks.length; s++){
            if(tkr==this.stocks[s].ticker){
                return s;
            }
        }
        return i;
    }

    //instance functions
    this.add = function(stock){
        this.stocks.push(stk)
    };
    this.update = function(tkr,val){
        if(findstock(tkr) >=0){

        }
    };
    this.buy = function(tkr,qnt){
        if(findStock(tkr >=0))
        this.stocks(findStock(tkr)).quantity=this.stocks(findStock(tkr)).quantity+qnt
    };
    this.sell = function(tkr,qnt){
        if(findStock(tkr)>=0){
            return this.stocks(findStock(tkr)).sell(qnt);
        }
    };
    this.totalValue = function(){
        for(let s=0;s<this.stock.length;s++){
            total=total+this.stocks[s].totalValue)
        }
    };
}

module.exports = Portfolio;
