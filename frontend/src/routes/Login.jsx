import imagem from "../assets/imagem-login.jpg"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { login } from "../services/auth"

const Login = ({ setUser }) => {

  const { register, handleSubmit, reset, resetField } = useForm();
  const navigate = useNavigate()

  async function onSubmit (data) {
    
    try {
      const response = await login(data);

      if (response.status === 200) {
        alert("Logado");
        reset()
        setUser(response.data.user)
        navigate("/")
      };

      if (response.status === 400) {
        alert(response.data.message);
        reset()
      };

      if (response.status === 401) {
        alert(response.data.message);
        resetField("senha")
      };

    } catch (error) {
      console.log(error)
    }
    
  }

  return (

    <div className='flex w-full min-h-screen bg-slate-900'>

      <div className="hidden md:block md:w-1/2">
        <img
          className="w-full h-full object-cover object-left"
          src={imagem}
          alt="imagem"
        />
      </div>

      <div className="w-full px-5 md:w-1/2 flex flex-col justify-center gap-2">

        <h1 className="text-4xl text-white uppercase font-bold text-center">Login</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center w-full"
        >

          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email"}
            width="w-full"
            register={register}
            name={"email"}
          />

          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digite sua senha"}
            width="w-full"
            register={register}
            name={"senha"}
          />

          <div className="w-full mt-5">
            <Button
              label={"Entrar"}
              type={"submit"}
            />
          </div>

          <Link
            className="text-white text-center mt-2 cursor-pointer hover:text-blue-300 transition-all duration-300"
            to="/cadastro"
          >
            Ainda não possui conta? Registre-se
          </Link>

        </form>



      </div>


    </div>
  )
}

export default Login