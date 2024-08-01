import axios from "axios";

export async function getPosts(url: string) {

    const formData = new FormData();
    formData.append("url", url);

    try {
        
        const {data} = await axios.post("https://cleanuri.com/api/v1/shorten", formData);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
