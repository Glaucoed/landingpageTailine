
"use client"
import Image from "next/image";
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImagemLoader from "../components/ImageLazyLoading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full pt-20 gap-10">
      <div className="flex flex-col justify-center items-center gap-4">
        < ImagemLoader />
        <p className="text-4xl font-bold text-white text-center">Tailine Nails Designer</p>
        <h1 className="text-azul-medio px-10"> Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés</h1>
        <h2 className="text-lg px-10 lg:px-0 text-white">
          Unhas que brilham tanto quanto sua personalidade ✨
        </h2>
      </div>

      <div className="flex flex-col lg:w-1/2 w-full lg:px-0 px-10 mx-auto gap-2">
        <a title="WhatsApp" target="_blank" href="https://api.whatsapp.com/send/?phone=5511913512961&text=Tenho+interesse+em+agendar+um+horario&type=phone_number&app_absent=0" className="bg-[#022B3A] hover:bg-[#1F7A8C] text-[#BFDBF7] font-bold py-3 px-4 border-b-4 border-[#BFDBF7] hover:border-[#BFDBF7] rounded text-center">
          WhatsApp
        </a>
        <a title="Localização" target="_blank" href="https://g.co/kgs/3qe1Cde" className="bg-[#022B3A] hover:bg-[#1F7A8C] text-[#BFDBF7] font-bold py-3 px-4 border-b-4 border-[#BFDBF7] hover:border-[#BFDBF7] rounded text-center">
          Localização
        </a>
        <a title="Instragram" target="_blank" href="https://www.instagram.com/taiesverzuthenails_/" className="bg-[#022B3A] hover:bg-[#1F7A8C] text-[#BFDBF7] font-bold py-3 px-4 border-b-4 border-[#BFDBF7] hover:border-[#BFDBF7] rounded text-center">
          Instagram
        </a>
      </div>
      <div>
        <div className="font-bold text-2xl text-center text-white pt-10 pb-5 uppercase">
          Tabela de Preço
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-2 lg:w-[870px] mx-auto lg:px-0 px-10">
          <div className="mx-auto bg-white p-4 rounded">
            <Image
              className="rounded  bg-cover"
              src="/alongamento.jpg"
              alt="manicure"
              width={400}
              height={400}
            />
            <h3 className="text-lg font-bold max-w-[370px] mt-2 lg:min-h-[56px] text-azul-escuro">
              Alongamento de Fibra de Vidro método naturalidade
            </h3>
            <div className="flex gap-3 mt-2 items-center ">
              <span className="font-bold text-lg text-azul-escuro">
                R$ 140,00
              </span>
            </div>
          </div>
          <div className="mx-auto bg-white p-4 rounded">
            <Image
              className="rounded  object-cover object-center"
              src="/image2.jpg"
              alt="manicure"
              width={400}
              height={400}
            />
            <h3 className="text-lg font-bold max-w-[370px] mt-2 lg:min-h-[56px] text-azul-escuro">
              Esmaltação em Gel
            </h3>
            <div className="flex gap-3 mt-2 items-center ">
              <span className="font-bold text-lg text-azul-escuro">
                R$ 80,00
              </span>
            </div>
          </div>
          <div className="mx-auto bg-white p-4 rounded">
            <Image
              className="rounded  bg-cover "
              src="/image4.jpg"
              alt="manicure"
              width={400}
              height={400}
            />
            <h3 className="text-lg font-bold max-w-[370px] mt-2 lg:min-h-[56px] text-azul-escuro">
              Manicure Comum
            </h3>
            <div className="flex gap-3 mt-2 items-center ">
              <span className="font-bold text-lg text-azul-escuro">
                R$ 30,00
              </span>
            </div>
          </div>
          <div className="mx-auto bg-white p-4 rounded">
            <Image
              className="rounded  object-cover object-center"
              src="/image5.jpg"
              alt="manicure"
              width={400}
              height={400}
            />
            <h3 className="text-lg font-bold max-w-[370px] mt-2 lg:min-h-[56px] text-azul-escuro">
              Pedicure Comum
            </h3>
            <div className="flex gap-3 mt-2 items-center">

              <span className="font-bold text-lg text-azul-escuro">
                R$ 40,00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[600px] w-full mx-auto">
      <h3 className="font-bold text-2xl text-center text-azul-escuro pt-10 pb-5 uppercase">
          Meus Trabalhos
        </h3>
      <Swiper
        effect={'flip'}
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={true}

        modules={[EffectFlip, Pagination, Navigation]}
        className="!bg-white !rounded !p-10 !mx-10"
      >
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img1.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img2.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img4.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide >
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img5.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide >
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img6.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide >
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img7.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img8.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img9.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img10.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img11.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>
        <SwiperSlide className="lg:max-w-[600px]">
          <Image src="/img12.jpg" alt="manicure" width={600} height={600} />
        </SwiperSlide>

      </Swiper>
      </div>
      <div>

      <div className="bg-azul-escuro flex justify-center items-center py-2 gap-2 text-azul-claro lg:px-0 px-5 text-justify">
        Rua Barra Mansa, 18 - Sala 04 - Vila Bela Vista - Santo André - SP - Próximo ao comercio da Rua Carijós
      </div>
      <div className="bg-azul-escuro flex justify-center items-center py-2 gap-2 text-azul-claro">
        Desenvolvido por <a className="font-bold text-white" target="_blank" href="http://www.glaucoed.com ">Glauco</a>
      </div>
      </div>
    </main>
  );
}
