/*-------Components------*/
import ProdutosGrid from "../../components/ProdutosGrid";
import ProdutosList from "../../components/ProdutosList";
/*-------Imagens------*/
import Banner from "../../assets/Banner.png";

const Home = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      {/*Falta colocar SLIDER/CAROUSEL aqui */}
      <div className="flex justify-center">
        <div className="rounded-md shadow-md">
          <img
            src={Banner}
            alt="Imagem da Categoria"
            className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <a className="text-3xl font-semibold">
                Categoria A
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md">
          <img
            src={Banner}
            alt="Imagem da Categoria"
            className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <a className="text-3xl font-semibold">
                Categoria B
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md">
          <img
            src={Banner}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <a className="text-3xl font-semibold tracking-wide">
                Categoria C
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md">
          <img
            src={Banner}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <a className="text-3xl font-semibold tracking-wide">
                Categoria D
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md">
          <img
            src={Banner}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <a className="text-3xl font-semibold tracking-wide">
                Categoria E
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md">
          <img
            src={Banner}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-20 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <a className="text-3xl font-semibold tracking-wide">
                Categoria F
              </a>
          </div>
        </div>
      </div>
      <div className="mt-10 font-bold text-4xl flex justify-center">
        <span>Os Produtos Destacados</span>
      </div>
      <ProdutosGrid />
      <div className="mt-10 font-bold text-4xl flex justify-center">
        <span>Os Produtos Destacados</span>
      </div>
      <ProdutosGrid />
      <div className="mt-10 font-bold text-4xl flex justify-center">
        <span>Baseado nas suas recomendações</span>
      </div>
      <ProdutosList/>
    </section>
  );
};

export default Home;
