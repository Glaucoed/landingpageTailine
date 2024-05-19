import dynamic from 'next/dynamic'
 
const DynamicHeader = dynamic(() => import('../components/ImageHeader'), {
  loading: () => <p>Carregando Imagem...</p>,
})
 
export default function Home() {
  return <DynamicHeader />
}