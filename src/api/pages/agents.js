import axios from "axios";

export async function getAllAgents ( limit, pageNumber )
{
    const obj = {
        limit: limit,
        pageNumber: pageNumber
    }
    const response = await axios.post( "https://indusmanagement.ae/api/blogs/getAllBlogs.php", obj );
    // console.log( response.data );
    return response;
}