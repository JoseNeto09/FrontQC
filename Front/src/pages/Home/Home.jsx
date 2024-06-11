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
      { id: '1', 
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    
      { id: '2',
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    
      { id: '3',
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
      
      { id: '4',
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    
      { id: '5',
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    
      { id: '6',
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    
      { id: '7', 
      Image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  
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
    <section className="py-3 sm:py-20 dark:bg-gray-100 dark:text-gray-800">
      <Swiper slidesPerView={3} pagination={{clickable:true}}>
        {data.map((item) =>(
                <SwiperSlide key={item.id} className="mb-8 p-6 rounded-md shadow-md cursor-pointer">
                  <img src={item.Image} alt="Slider" className="rounded-md"/>
                </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex container mx-auto px-5 py-3 lg:px-9 lg:pt-10">
        <div className="rounded-md shadow-md p-2 cursor-pointer">
          <img src={Banner} className="object-cover object-center rounded-xl dark:bg-gray-500"/>
          <div className="flex flex-col justify-between space-y-8">
              <a className="text-3xl text-center font-semibold cursor-pointer">
                Categoria A
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md p-2 cursor-pointer">
          <img src={Banner} className="object-cover object-center rounded-xl dark:bg-gray-500"/>
          <div className="flex flex-col justify-between space-y-8">
              <a className="text-3xl text-center font-semibold cursor-pointer">
                Categoria B
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md p-2 cursor-pointer">
          <img src={Banner} alt="" className="object-cover object-center rounded-xl h-25 dark:bg-gray-500"/>
          <div className="flex flex-col justify-between space-y-8">
              <a className="text-3xl text-center font-semibold">
                Categoria C
              </a>
          </div>
        </div>
        <div className="rounded-md shadow-md p-2 cursor-pointer">
          <img src={Banner} alt=""className="object-cover object-center rounded-xl h-25 dark:bg-gray-500"/>
          <div className="flex flex-col justify-between space-y-8">
              <a className="text-3xl font-semibold text-center ">
                Categoria D
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