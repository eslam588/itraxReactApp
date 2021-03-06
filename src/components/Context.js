import React ,{ Component } from "react";

export const DataContext = React.createContext();

class DataProvider extends Component {
   state = {
       products: [
        {
            "_id": "1",
            "title": "back bag 01",
            "src": "images/img1.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 20,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "back bag 02",
            "src": "images/img2.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 25,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "back bag 03",
            "src": "images/img9.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 40,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "back bag 04",
            "src": "images/img7.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 30,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "back bag 05",
            "src": "images/img5.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 25,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "back bag 06",
            "src": "images/img10.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 35,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
       ],
       cart :[],
       total : 0
   }

   addCart = (id) => {
       const {products , cart} = this.state;

       const check = cart.every(item => {
           return item._id !== id
       })
       if(check)
       {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({cart: [...cart , ...data]});
       }
       else{
           alert("the product has been added to cart")
       }
   }

   reduction = (id) =>{
       const {cart} = this.state;
       cart.forEach(item =>  {
           if(item._id === id)
           {
               item.count === 1 ? item.count = 1 : item.count -=1;
           }
       })
       this.setState({cart : cart});
       this.getTotal();
   };

   increase = (id) =>{
    const {cart} = this.state;
    cart.forEach(item =>  {
        if(item._id === id)
        {
            item.count +=1;
        }
    });
    this.setState({cart : cart}); 
    this.getTotal();     
};

   removeProduct = (id) => {
       if(window.confirm("Do you want delet this product"))
       {
            const {cart} = this.state;
            cart.forEach((item,index) => {
                if(item._id === id)
                {
                    cart.splice(index , 1);
                }
            })
            this.setState({cart : cart}); 
       }
         
   }


   getTotal = () => {
    const {cart} = this.state;
    const res = cart.reduce((prev , item) =>{
        return prev + (item.price * item.count);
    },0)
    this.setState({total : res})
}
   
   componentDidUpdate(){
       localStorage.setItem('dataCart' , JSON.stringify(this.state.cart));
       localStorage.setItem('dataTotal' , JSON.stringify(this.state.total));

   }

   componentDidMount(){
       const dataCart = JSON.parse(localStorage.getItem('dataCart'));
       if(dataCart != null)
       {
           this.setState({cart : dataCart});
       }
       const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
       if(dataTotal != null)
       {
           this.setState({total : dataTotal});
       }
   }

  render(){
      const {products , cart ,total } =this.state;
      const {addCart ,reduction, increase,removeProduct ,getTotal} = this;
  return (
      <DataContext.Provider value ={{products , addCart , cart , reduction , increase , removeProduct , total , getTotal}}>
          {this.props.children}
      </DataContext.Provider>
  );
}
}

export default DataProvider;
