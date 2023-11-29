/** @format */

export async function getAllBlogs(limit, pageNumber) {
  const obj = {
    limit: limit,
    pageNumber: pageNumber,
  };
  const response = await axios.post(
    "https://alsimatower.ae/int_web_api/blogs/getAllBlogs.php",
    obj
  );
  // console.log( response.data );
  return response;
}

export async function getBlogDetails(id) {
  const obj = {
    id: id,
  };
  const response = await axios.post(
    "https://alsimatower.ae/int_web_api/blogs/getBlogDetails.php",
    obj
  );
  // console.log( response.data );
  return response;
}
