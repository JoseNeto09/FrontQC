/*-------bibliotecas------*/
import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

/*-------Components------*/
import ProdutosGrid from "../../components/ProdutosGrid";
import ProdutosList from "../../components/ProdutosList";
/*------- Imagens-------*/
import Banner from "../../assets/Banner.png";

const Home = () => {

  const [slidesPerView, setSlidePerView] = useState(2)

  const data =[
    { id: '1', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '2', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '3', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '4', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '5', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '6', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    { id: '7', Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  ]

  useEffect(() => {
    function handleResize(){
      if(window.innerHeight < 720 ){
        setSlidePerView(1);
      }else{
        setSlidePerView(2);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize)

    return() =>{
      window.removeEventListener("resize", handleResize)
    }

  },[])

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      <Swiper
        slidesPerView={4}
        pagination={{clickable:true}}
        navigation
      >
        {data.map((item) =>(
                <SwiperSlide key={item.id} className="mb-8 p-6 rounded-md shadow-md">
                  <img src={item.Image} alt="Slider" className="rounded-md"/>
                </SwiperSlide>
        ))}
      </Swiper>
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
