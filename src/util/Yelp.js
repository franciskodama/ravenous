const apiKey = 'uqOv9CYoFxGUuA917T6eT5wOonkLGbMCqDJa_Yy-hPGk7MnDRQBvjtxK5Ly3vMdg4F-ENAJ3vR6VV48RIsjBHmCpCI8VECx_F2DK6zglGwrDubOh9XIanqO_cyIZYnYx'

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json()
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
               return jsonResponse.businesses.map((business) => { 
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories,
                       rating: business.rating,
                       reviewCount: business.review_count,
                   }
               })
            }
        })
    }
}

export default Yelp









