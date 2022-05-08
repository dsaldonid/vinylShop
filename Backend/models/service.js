class Service{
    static async calculator(items,tax){
        let result ={
            "total_before_tax":0,
            "total_after_tax":0}
        
        console.log(items)
        for(let i=0;i<items.length;i++){
            result[items[i].name] = items[i].price
            result.total_before_tax += items[i].price
        }
        if (tax > 0){
            result.total_after_tax = Math.ceil((result.total_before_tax + result.total_before_tax*(tax/100))*100)/100
        }
        return result
    }
}

module.exports = Service