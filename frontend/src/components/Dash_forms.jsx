import CardForms from "../components/CardForms"

const Dash_forms = () => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:justify-between w-screen md:w-full text-white">

      <section className="flex flex-col md:ml-30 md:mt-25 w-1/2">
        <p className="text-xl font-bold border-b w-fit pb-4">
          Estes são seus formulários que ainda não foram respondidos
        </p>

         <div className="flex flex-wrap gap-10">
          <CardForms
            titulo={"Formulário de desempenho"}
            descricao={"Este formulário tem o objetivo de avaliar o desempenho individual dos funcionários"}
            data={"19/11"}
            form={"/formulario"}
            realizado={false}
          />

          <CardForms
            titulo={"Health form"}
            descricao={"Este formulário tem o objetivo de ajudar a empresa a melhorar o bem estar dos funcionários"}
            data={"23/11"}
            form={"/HealthForm"}
            realizado={false}
          />
        </div>
      </section>

      <div className="bg-white h-1 w-1/2 md:w-1 md:h-screen my-15 md:m-15"></div>

      <section className="flex flex-col mr-5 md:mt-25 w-1/2">
        <p className="text-xl font-bold border-b w-fit pb-4">
          Estes são seus formulários que já foram respondidos
        </p>

        <div className="flex flex-wrap gap-10">
          <CardForms
            titulo={"Formulário de desempenho"}
            descricao={"Este formulário tem o objetivo de avaliar o desempenho individual dos funcionários"}
            data={"19/11"}
            realizado={true}
          />

          <CardForms
            titulo={"Health form"}
            descricao={"Este formulário tem o objetivo de ajudar a empresa a melhorar o bem estar dos funcionários"}
            data={"23/11"}
            realizado={true}
          />
        </div>

      </section>
    </div>
  )
}

export default Dash_forms