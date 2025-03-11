export async function getData(endpoint) {
    try {
        const baseUrl = "http://localhost:3000"
        // byDefault nextjs is always caching so if we get the fetch the updated data we use cache
        const response = await fetch(`${baseUrl}/api/${endpoint}`,
            {
                // cache:"no-store"
                next: { revalidate: 60 }, // Cache for 60 seconds
            }
        );
        // console.log(response);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}