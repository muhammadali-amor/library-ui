import { toast } from "react-toastify"
import { BASE_CONFIG_AUTH } from "../config/BaseConfig";
import { APP_API } from "../config/AppApi";
import { ADMIN_URLS, USER_URLS } from "../../utils/Urls";



export const LoginHandler=async(data,navigate)=>{
    if(!data.email.trim()){
        toast.error("emailni kiriting")
    }
    if(!data.password.trim()){
        toast.error("parolni kiriting")
    }
    try{
        const res = await BASE_CONFIG_AUTH.doPost(APP_API.login, data);
        localStorage.setItem("token",res.data.resToken)
        console.log(res.data.resToken);
        if(res.data.role==="ADMIN"){
            navigate(`${ADMIN_URLS.dashboard}`)
        }else{
            navigate(`${USER_URLS.userDashboard}`)
        }
        window.location.reload()
    }catch(err){
        toast.error("Parol yoki email hato")
        console.log(err);
        
    }
}
export const RegisterHandler = async (data, navigate) => {
    const validations = [
        {check: data.name.trim().length === 0, message: "Ismni kiriting"},
        {check: data.surname.trim().length === 0, message: "Familyani kiriting"},
        {check: data.email.trim().length === 0, message: "Email bo'sh bo'lmasligi shart"},
        {check: !data.email.trim().endsWith("@gmail.com"), message: "Email xato ❌"},
        {check: data.password.trim().length < 8, message: "Parol 8ta belgidan iborat bo'lishi shart"}
    ];

    // Validatsiya tekshiruvlari
    for (const validation of validations) {
        if (validation.check) {
            return toast.error(validation.message);
        }
    }

    try {
        const res = await BASE_CONFIG_AUTH.doPost(APP_API.register, data);
        if (res.data && res.data.resToken) {
            // Token va foydalanuvchi ma'lumotlarini saqlash
            localStorage.setItem("token", res.data.resToken);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("surname", res.data.surname);
            localStorage.setItem("email", res.data.email);

            toast.success(`Xush kelibsiz!`);
            navigate("/");

            // Login qilish uchun LoginHandler'ni chaqirish
            const loginData = {email: data.email, password: data.password};
            await LoginHandler(loginData, navigate);
            window.location.reload()
        } else {
            toast.error("Ro'yxatdan o'tishda xatolik yuz berdi");
        }
    } catch (err) {
        console.error("RegisterHandler xatosi:", err);
        toast.error("Ro'yxatdan o'tishda xatolik yuz berdi");
    }
};
