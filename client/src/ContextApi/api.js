import Cookies from 'universal-cookie'
import axios from 'axios'

const cookies = new Cookies();


export async function login(email, password) {
    await axios
        .post("http://localhost:5000/api/users/login", { email, password })
        .then(res => {
            const cookies = new Cookies();
            cookies.set("myToken", res.data.token, { path: "*" })
            cookies.set("myId", res.data._id, { path: "*" })
            console.log(res.data)
            return res.data
        });
}





export async function fetchUsers() {
    const token = cookies.get("myToken");
    const userId = cookies.get("myId");
    await axios
        .get(`http://localhost:5000/api/users/all`, { headers: { token, userId } })
        .then(resp => resp.data)
}