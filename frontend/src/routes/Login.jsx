import imagem from "../assets/imagem-login.jpg"

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
            className="w-full md:w-1/2 flex flex-col justify-center items-center"
        >

            <div className="flex flex-col gap-1">
                <label
                    className="text-lg text-white"
                >
                    E-mail
                </label>
            </div>

        </form>
    </div>
  )
}

export default Login