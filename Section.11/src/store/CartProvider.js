import CartContext from "./cart-context";

const CartProvider = props => {
    const CartContext ={};

    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider