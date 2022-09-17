import React, {createContext, useEffect, useState} from 'react'


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [CartItems, setCartItems] = useState(()=>{
        try {
            const ProductosLocalStorage = localStorage.getItem("CartProducts");
            return ProductosLocalStorage ? JSON.parse(ProductosLocalStorage) : [];
        } catch (error) {
            return [];
        }
    })
    
    useEffect(() => {
    localStorage.setItem("CartProducts", JSON.stringify(CartItems));
}, [CartItems])

const Añadir = (product) => {
    const inCart = CartItems.find((ProductInCart) => ProductInCart.id == product.id);
    
    if(inCart){
        setCartItems(
            CartItems.map((ProductInCart) => {
                if((ProductInCart.id == product.id)){
                    if(ProductInCart.amount < 3){
                        return {...inCart, amount: inCart.amount +1} //suma en la cantidad si es que ya estaba en el
                    }else{
                        return ProductInCart
                    }
                }else{
                    return ProductInCart
                }
            })
            )
        }else{
            setCartItems([...CartItems, {...product, amount: 1}])
        }
        
    }
const Eliminar = (product) => {
    const inCart = CartItems.find((ProductInCart) => ProductInCart.id == product.id);

    if(inCart.amount == 1){
        setCartItems(CartItems.filter(ProductInCart => ProductInCart.id != product.id))
    }else{
        setCartItems(
            CartItems.map((ProductInCart) => {
            if(ProductInCart.id == product.id){
                return {...inCart, amount: inCart.amount - 1}
            }else{
                return ProductInCart
            }
        }))
    }
}
const EliminarTodo = () => {
    setCartItems([])
}
return (
    <CartContext.Provider value={{CartItems, Añadir, Eliminar, EliminarTodo}}>
        {children}
    </CartContext.Provider>
)

}
/*
export const Cart = ({children}) => {
    
    const [CartItem, setCartItem] = useState(() => {
        try {
            const Productos = localStorage.getItem("Productos");
            return Productos ? JSON.parse(Productos) : [];
        }
        catch (error) {
            return [];
        }
    })
    
    useEffect(()=>{
        localStorage.setItem("Productos", JSON.stringify(CartItem))
        console.log(CartItem)
    }, [CartItem]);
    
    
    const Añadir = (Producto) =>{

    const inCart = CartItem.find((ProductInCart) => ProductInCart.id === Producto.id)

    if(inCart){
        setCartItem(
            CartItem.map((ProductInCart) => {
                if(ProductInCart.id === Producto.id){
                    return {...inCart, amount: inCart.amount + 1}
                } else{
                    return ProductInCart;
                }
            })
            );
        }else{
            setCartItem([...CartItem, {...Producto, amount: 1}])
        }
        
    };

    const Eliminar = (Producto) =>{
        const inCart = CartItem.find((ProductInCart) => ProductInCart.id === Producto.id)

        if(inCart.amount === 1){
            setCartItem(
                CartItem.filter((ProductInCart) => ProductInCart.id !== Producto.id)
                );
            }
            else{
                setCartItem((ProductInCart) => {
                    if(ProductInCart.id === Producto.id){
                        return {...inCart, amount: inCart.amount - 1};
                    }
                    else{
                        return ProductInCart;
                    }
            })
        }
    };

    return (
        <Context.provider value={{CartItem, Añadir, Eliminar }} >
            {children}
        </Context.provider>
    );

};
*/