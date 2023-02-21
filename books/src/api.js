import axios from 'axios'

const searchImages = async (searchParams) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: "Client-ID Y4gRzurhcV_Y-XNolgr5H4-8Lwy6JQidW9MPJ246HtE"
    },
    params: {
      query: searchParams
    }
  })
  return response.data.results;
}

 
export default searchImages; 