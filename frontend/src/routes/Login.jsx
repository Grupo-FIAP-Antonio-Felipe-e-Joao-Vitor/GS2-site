import imagem from "../assets/imagem-login.jpg"
import Input from "../components/Input"

const Login = () => {
  return (
    
    <div className='flex w-full min-h-screen bg-slate-900'>
        
        <div className="hidden md:block md:w-1/2">
            <img
                className="w-full h-full object-cover object-left" 
                src={imagem} 
                alt="imagem" 
            />
        </div>
        
        <form
            className="w-full px-5 md:w-1/2 flex flex-col gap-2"
        >

            <Input 
                label={"Email"}
                type={"email"}
                placeholder={"Digite seu email"}
            />

            <Input 
                label={"Senha"}
                type={"password"}
                placeholder={"Digite sua senha"}
            />

            
        </form>
    </div>
  )
}

export default Login