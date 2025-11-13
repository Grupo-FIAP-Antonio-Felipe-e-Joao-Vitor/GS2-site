import CardForms from "../components/CardForms"

const Dash_forms = () => {
  return (
    <div className="flex justify-between w-full h-screen text-white">

      <section className="flex flex-col ml-40 mt-25 w-1/2">
        <p className="text-xl font-bold border-b w-fit pb-4">
          Estes são seus formulários que ainda não foram respondidos
        </p>

        <CardForms
          titulo={"Formulário de desempenho"}
          descricao={"Este formulário tem o objetivo de avaliar o desempenho individual dos funcionários"}
          data={"19/11"}
          form={"/formulario"}
        />
      </section>

      <div className="bg-white w-1 m-15"></div>

      <section className="flex flex-col mt-25 w-1/2">
        <p className="text-xl font-bold border-b w-fit pb-4">
          Estes são seus formulários que ainda não foram respondidos
        </p>

        <CardForms
          titulo={"Health form"}
          descricao={"Este formulário tem o objetivo de ajudar a empresa a melhorar o bem estar dos funcionários"}
          data={"23/11"}
          form={"/HealthForm"}
        />

      </section>
    </div>
  )
}

export default Dash_forms