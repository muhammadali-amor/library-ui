import { toast } from "react-toastify"
import { BASE_CONFIG_AUTH } from "../config/BaseConfig";
import { APP_API } from "../config/AppApi";
import { ADMIN_URLS } from "../../utils/Urls";



export const LoginHandler=async(data,navigate)=>{
    if(!data.email.trim()){
        toast.error("emailni kiriting")
    }
    if(!data.password.trim()){
        toast.error("parolni kiriting")
    }
    try{
        const res = await BASE_CONFIG_AUTH.doPost(APP_API.login, data);
        sessionStorage.setItem("token",res.data.resToken)
        console.log(res.data.resToken);
        
        navigate(`${ADMIN_URLS.dashboard}`)
        window.location.reload()
    }catch(err){
        toast.error("Parol yoki email hato")
        console.log(err);
        
    }
}