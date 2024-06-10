/*-------Imagens------*/
import Banner from "../assets/Banner.png";

const ProdutosGrid = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/3 flex-wrap bg-white shadow-lg">
          <div class="w-96 p-1 md:p-2">
            <img
              alt="Imagem do Produto"
              class="block lg:ml-5 h-full w-96 rounded-lg object-cover object-center"
              src={Banner}
            />
          </div>
          <div className="flex flex-col justify-center">
            <a href="" className="font-bold text-2xl lg:ml-2">Produto A</a>
            <a href="" className="text-lg lg:ml-2">R$ 00,00</a>
            <a href="" className="font-bold text-xl lg:ml-2">R$ 00,00</a>
            <a href="" className="text-green-600 lg:ml-2">em 12x R$ 000,00 sem juros</a>
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap bg-white shadow-lg">
          <div class="w-96 p-1 md:p-2">
            <img
              alt="Imagem do Produto"
              class="block lg:ml-5 h-full w-96 rounded-lg object-cover object-center"
              src={Banner}
            />
          </div>
          <div className="flex flex-col justify-center">
            <a href="" className="font-bold text-2xl lg:ml-2">Produto B</a>
            <a href="" className="text-lg lg:ml-2">R$ 00,00</a>
            <a href="" className="font-bold text-xl lg:ml-2">R$ 00,00</a>
            <a href="" className="text-green-600 lg:ml-2">em 12x R$ 000,00 sem juros</a>
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap bg-white shadow-lg">
          <div class="w-96 p-1 md:p-2">
            <img
              alt="Imagem do Produto"
              class="block lg:ml-5 h-full w-96 rounded-lg object-cover object-center"
              src={Banner}
            />
          </div>
          <div className="flex flex-col justify-center">
            <a href="" className="font-bold text-2xl lg:ml-2">Produto C</a>
            <a href="" className="text-lg lg:ml-2">R$ 00,00</a>
            <a href="" className="font-bold text-xl lg:ml-2">R$ 00,00</a>
            <a href="" className="text-green-600 lg:ml-2">em 12x R$ 000,00 sem juros</a>
          </div>
        </div>

        <div class="flex w-1/3 flex-wrap bg-white shadow-lg">
          <div class="w-96 p-1 md:p-2">
            <img
              alt="Imagem do Produto"
              class="block lg:ml-5 h-full w-96 rounded-lg object-cover object-center"
              src={Banner}
            />
          </div>
          <div className="flex flex-col justify-center">
            <a href="" className="font-bold text-2xl lg:ml-2">Produto D</a>
            <a href="" className="text-lg lg:ml-2">R$ 00,00</a>
            <a href="" className="font-bold text-xl lg:ml-2">R$ 00,00</a>
            <a href="" className="text-green-600 lg:ml-2">em 12x R$ 000,00 sem juros</a>
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap bg-white shadow-lg">
          <div class="w-96 p-1 md:p-2">
            <img
              alt="Imagem do Produto"
              class="block lg:ml-5 h-full w-96 rounded-lg object-cover object-center"
              src={Banner}
            />
          </div>
          <div className="flex flex-col justify-center">
            <a href="" className="font-bold text-2xl lg:ml-2">Produto E</a>
            <a href="" className="text-lg lg:ml-2">R$ 00,00</a>
            <a href="" className="font-bold text-xl lg:ml-2">R$ 00,00</a>
            <a href="" className="text-green-600 lg:ml-2">em 12x R$ 000,00 sem juros</a>
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap bg-white shadow-lg">
          <div class="w-96 p-1 md:p-2">
            <img
              alt="Imagem do Produto"
              class="block lg:ml-5 h-full w-96 rounded-lg object-cover object-center"
              src={Banner}
            />
          </div>
          <div className="flex flex-col justify-center">
            <a href="" className="font-bold text-2xl lg:ml-2">Produto F</a>
            <a href="" className="text-lg lg:ml-2">R$ 00,00</a>
            <a href="" className="font-bold text-xl lg:ml-2">R$ 00,00</a>
            <a href="" className="text-green-600 lg:ml-2">em 12x R$ 000,00 sem juros</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutosGrid;
