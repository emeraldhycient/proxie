import axiosClient from "../../helpers/apiClient";


class User{
     getMe =async () => {
         return await axiosClient.get("/auth/users/me/")
    }
}


const userService = new User

export default userService