/*Write a class KioskCalc that has the following fruitsPriceList object.
this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
and takes two parameters (fruit, quantity) when initialized i.e. 
var kioskCalc = new KioskCalc(“orange”, 2);
Thereafter, it allows one to calculate the total cost of the fruit by accessing the getTotalCost( ) method. 
kioskCalc.getTotalCost( )  // returns “2 orange for KES 60” */

class KioskCalc{
    constructor (price,quantity) {
            this.fruita="Mangoes";
            this.pricea=15;
            this.quantitya=2;

            this.fruitb="Oranges";
            this.priceb=30;
            this.quantityb=2;
    
            this.fruitc="Avocados";
            this.pricec=40;
            this.quantityc=2;
    
            }
            getTotalCosta(){
                return `${this.quantitya} ${this.fruita} for KES ${this.pricea*this.quantitya}`
            }

            getTotalCostb(){
                return `${this.quantityb} ${this.fruitb} for KES ${this.priceb*this.quantityb}`
            }
            
            getTotalCostc(){
                return `${this.quantityc} ${this.fruitc} for KES ${this.pricec*this.quantityc}` 
            }
        }
        var fruita=new KioskCalc("Mangoes",2)
        console.log(fruita.getTotalCosta())

        var fruitb=new KioskCalc("oranges",2)
        console.log(fruitb.getTotalCostb())
    
        var fruitc=new KioskCalc("Avocados",2)
        console.log(fruitc.getTotalCostc())
