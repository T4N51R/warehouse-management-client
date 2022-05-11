import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useCart = () => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getCart = async () => {
            const email = user.email;
            const url = `https://pure-lake-46186.herokuapp.com/userAedded?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authoraizetion: `Barer ${localStorage.getItem('acessToken')}`
                }
            });
            setCart(data);
        }
        getCart();
    }, [user])
    return [cart, setCart]
}
export default useCart;