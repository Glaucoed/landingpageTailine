import Image from 'next/image'

export default function ImageHeader() {
  return (
    <div>
          <Image
            src="/taiAtendimento.jpg"

            alt="Tai atendimento ao cliente"
            width={280}
            height={280}
            className="lg:max-h-[280px] lg:max-w-[280px] max-h-[200px] max-w-[200px] rounded-full "
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
              objectFit: "cover",
            }}
          />
        </div>
  )
}
