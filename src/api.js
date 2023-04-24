import axios from "axios";
import SearchBar from "./components/SearchBar";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
    {
        headers: {
            Authorization: 'Client-ID -P9Q4M1qrvvNAo4IRZdmGutkjcD3bUth2quf4ds2GHY',
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;