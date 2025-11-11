import Input from "../components/Input"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import imagem from "../assets/imagem-cadastro.jpg"
import Select from "../components/Select"
import { cadastro } from "../services/auth"

const Cadastro = () => {

  const { register, handleSubmit, reset, resetField } = useForm()

  async function onSubmit(data) {

    if (data.senha === data.confirmar_senha) {

      try {

        const response = await cadastro(data)

        if (response.status === 201) {
          alert(response.data.message);
          reset();
        }

        if (response.status === 400) {
          alert(response.data.message);
          reset();
        }

      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Senha incorreta.")
      resetField("senha")
      resetField("confirmar_senha")
    }
  }

  return (
    <div className='flex w-full min-h-screen bg-slate-900'>

      <div className="w-full px-5 md:w-1/2 flex flex-col justify-center gap-2">

        <h1 className="text-4xl text-white uppercase font-bold text-center">Cadastro</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center w-full"
        >

          <div className="flex flex-col w-full md:flex-row md:gap-2">
            <Input
              label={"Nome"}
              type={"text"}
              placeholder={"Digite seu nome"}
              width="w-full"
              register={register}
              name={"nome"}
            />

            <Select
              label={"Empresa"}
              width="w-full"
              options={[
                {
                  label: "Fiap",
                  value: "Fiap"
                },
                {
                  label: "Google",
                  value: "Google"
                },
                {
                  label: "Mercado livre",
                  value: "Mercado livre"
                }
              ]}
              placeholder={"Selecione a empresa"}
              register={register}
              name={"empresa"}
            />

          </div>

          <Select
            label={"Área de atuação"}
            width="w-full"
            options={[
              {
                label: "TI",
                value: "TI"
              },
              {
                label: "Vendas",
                value: "Vendas"
              },
              {
                label: "Marketing",
                value: "Marketing"
              },
              {
                label: "RH",
                value: "RH"
              },
              {
                label: "Financeiro",
                value: "Financeiro"
              },
              {
                label: "Liderança",
                value: "Lideranca"
              }
            ]}
            placeholder={"Selecione a área de atuação"}
            register={register}
            name={"atuacao"}
          />

          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email"}
            width="w-full"
            register={register}
            name={"email"}
          />

          <div className="flex flex-col w-full md:flex-row md:gap-2">
            <Input
              label={"Senha"}
              type={"password"}
              placeholder={"Digite sua senha"}
              width="w-full"
              register={register}
              name={"senha"}
            />

            <Input
              label={"Confirmar senha"}
              type={"password"}
              placeholder={"Confirme sua senha"}
              width="w-full"
              register={register}
              name={"confirmar_senha"}
            />
          </div>



          <div className="w-full mt-5">
            <Button
              label={"Cadastre-se"}
              type={"submit"}
            />
          </div>

          <Link
            className="text-white text-center mt-2 cursor-pointer hover:text-blue-300 transition-all duration-300"
            to="/login"
          >
            Já possui uma conta?
          </Link>

        </form>



      </div>

      <div className="hidden md:block md:w-1/2">
        <img
          className="w-full h-full object-cover object-left"
          src={imagem}
          alt="imagem"
        />
      </div>

    </div>
  )
}

export default Cadastro