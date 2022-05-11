import axios from "axios";
import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const url = `https://pure-lake-46186.herokuapp.com/review`;
            const { data } = await axios.get(url);
            setReviews(data)
        }
        loadData();
    }, [])
    return [reviews, setReviews];
}
export default useReviews;