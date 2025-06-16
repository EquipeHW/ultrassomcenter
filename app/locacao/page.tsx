import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Equipment {
  name: string;
  image: string;
  features: string[];
}

export default function LocacaoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-100 via-red-400 to-red-800 py-16">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Locação de
                <br />
                Ultrassom
              </h1>

              <Badge className="mb-6 bg-red-500 text-white hover:bg-red-400">
                Atendemos ultrassom hospitalar e veterinário
              </Badge>

              <div className="space-y-4 mb-8 text-red-100">
                <p className="text-lg">
                  Nós alugamos equipamentos com rapidez e sem burocracia, com contratos de curto, médio e longo prazo, de
                  acordo com seu funcionamento ou necessidade. Equipamentos de última geração! Possibilidade de locação
                  por hora, por exame ou contrato fixo.
                </p>
              </div>

              <Link 
                href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl"
                >
                  Solicite seu Orçamento
                </Button>
              </Link>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-[400px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/locacao1.png"
                  alt="Médico utilizando equipamento de ultrassom"
                  fill
                  className="object-cover opacity-70"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Selection */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Escolha seu equipamento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de equipamentos de ultrassom das melhores marcas do mercado
            </p>
          </div>

          <Tabs defaultValue="toshiba" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              <TabsTrigger value="toshiba" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Toshiba
              </TabsTrigger>
              <TabsTrigger value="ge" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                GE
              </TabsTrigger>
              <TabsTrigger value="philips" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Philips
              </TabsTrigger>
              <TabsTrigger value="medison" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Medison
              </TabsTrigger>
              <TabsTrigger value="samsung" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Samsung
              </TabsTrigger>
            </TabsList>

            {/* Toshiba Equipment */}
            <TabsContent value="toshiba">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Toshiba Aplio MX",
                    image: "/equipamentos/toshibaapliomx.png",
                    features: ["Alta resolução de imagem", "Doppler colorido", "Ideal para exames gerais"],
                  },
                  {
                    name: "Toshiba Xario XG",
                    image: "/equipamentos/toshibaxarioxg.png",
                    features: ["Excelente qualidade de imagem", "Interface intuitiva", "Versatilidade clínica"],
                  },
                  {
                    name: "Toshiba Nemio MX",
                    image: "/equipamentos/toshibanemiomx.png",
                    features: ["Compacto e portátil", "Fácil operação", "Ótimo custo-benefício"],
                  },
                ].map((equipment, index) => (
                  <EquipmentCard key={index} equipment={equipment} />
                ))}
              </div>
            </TabsContent>

            {/* GE Equipment */}
            <TabsContent value="ge">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "GE Logiq E",
                    image: "/equipamentos/gelogiqe.png",
                    features: ["Portátil e compacto", "Alta qualidade de imagem", "Ideal para point-of-care"],
                  },
                  {
                    name: "GE Logiq C5",
                    image: "/equipamentos/gelogiqc5.png",
                    features: ["Excelente custo-benefício", "Imagens nítidas", "Fácil operação"],
                  },
                  {
                    name: "GE Logiq P5",
                    image: "/equipamentos/gelogiqp5.png",
                    features: ["Versatilidade clínica", "Doppler avançado", "Excelente resolução"],
                  },
                  {
                    name: "GE Logiq P6",
                    image: "/equipamentos/gelogiqp6.png",
                    features: ["Alta performance", "Tecnologia avançada", "Múltiplas aplicações"],
                  },
                  {
                    name: "GE Logiq F6",
                    image: "/equipamentos/gelogiqf6.png",
                    features: ["Excelente qualidade de imagem", "Interface intuitiva", "Ampla gama de transdutores"],
                  },
                  {
                    name: "GE Logiq P3",
                    image: "/equipamentos/logiqp3.png",
                    features: ["Compacto", "Fácil operação", "Ótimo para clínicas menores"],
                  },
                  {
                    name: "GE Voluson E6",
                    image: "/equipamentos/gevolusone6.png",
                    features: ["Especializado em obstetrícia", "Imagens 3D/4D", "Alta tecnologia"],
                  },
                ].map((equipment, index) => (
                  <EquipmentCard key={index} equipment={equipment} />
                ))}
              </div>
            </TabsContent>

            {/* Philips Equipment */}
            <TabsContent value="philips">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Philips HD7",
                    image: "/equipamentos/philipshd7.png",
                    features: ["Excelente qualidade de imagem", "Fácil operação", "Versatilidade clínica"],
                  },
                  {
                    name: "Philips Affiniti 30",
                    image: "/equipamentos/philipsaffiniti30.png",
                    features: ["Alta performance", "Tecnologia avançada", "Excelente ergonomia"],
                  },
                  {
                    name: "Philips HD11",
                    image: "/equipamentos/philipshd11.png",
                    features: ["Imagens de alta definição", "Ampla gama de aplicações", "Confiabilidade"],
                  },
                ].map((equipment, index) => (
                  <EquipmentCard key={index} equipment={equipment} />
                ))}
              </div>
            </TabsContent>

            {/* Medison Equipment */}
            <TabsContent value="medison">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Medison Sonoace X8",
                    image: "/equipamentos/medisonsonoacex8.png",
                    features: ["Alta resolução de imagem", "Doppler colorido avançado", "Interface intuitiva"],
                  },
                  {
                    name: "Medison Accuvix V10",
                    image: "/equipamentos/medisonaccuvixv10.png",
                    features: ["Tecnologia 3D/4D", "Excelente qualidade de imagem", "Múltiplas aplicações"],
                  },
                ].map((equipment, index) => (
                  <EquipmentCard key={index} equipment={equipment} />
                ))}
              </div>
            </TabsContent>

            {/* Samsung Equipment */}
            <TabsContent value="samsung">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Samsung H60",
                    image: "/equipamentos/samsungh60.png",
                    features: ["Alta tecnologia", "Excelente qualidade de imagem", "Interface moderna"],
                  },
                  {
                    name: "Samsung Accuvix XG",
                    image: "/equipamentos/samsungaccuvixxg.png",
                    features: ["Imagens de alta definição", "Doppler avançado", "Ergonomia superior"],
                  },
                  {
                    name: "Samsung R7",
                    image: "/equipamentos/samsungr7.png",
                    features: ["Tecnologia de ponta", "Imagens cristalinas", "Múltiplas aplicações clínicas"],
                  },
                ].map((equipment, index) => (
                  <EquipmentCard key={index} equipment={equipment} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantagens da Locação</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Descubra por que alugar um equipamento de ultrassom pode ser a melhor opção para sua clínica ou hospital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sem Investimento Inicial",
                description: "Evite grandes desembolsos iniciais e preserve seu capital de giro.",
                icon: "💰",
              },
              {
                title: "Manutenção Inclusa",
                description: "Assistência técnica e manutenção preventiva incluídas no contrato.",
                icon: "🔧",
              },
              {
                title: "Equipamentos Modernos",
                description: "Acesso às tecnologias mais recentes sem necessidade de compra.",
                icon: "🔄",
              },
              {
                title: "Flexibilidade de Contrato",
                description: "Opções de curto, médio e longo prazo adaptadas às suas necessidades.",
                icon: "📝",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-none backdrop-blur-sm text-center text-white">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-red-100">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre a locação de equipamentos de ultrassom
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Qual o período mínimo de locação?",
                answer:
                  "Oferecemos opções flexíveis, desde locações diárias até contratos anuais. O período mínimo pode variar de acordo com o equipamento e a disponibilidade.",
              },
              {
                question: "A manutenção está inclusa no valor da locação?",
                answer:
                  "Sim, todos os nossos contratos de locação incluem manutenção preventiva e corretiva, garantindo o perfeito funcionamento do equipamento durante todo o período de locação.",
              },
              {
                question: "É possível trocar de equipamento durante o contrato?",
                answer:
                  "Sim, oferecemos a possibilidade de upgrade ou troca de equipamento durante o contrato, sujeito a disponibilidade e ajustes contratuais.",
              },
              {
                question: "Vocês oferecem treinamento para utilização dos equipamentos?",
                answer:
                  "Sim, fornecemos treinamento básico para operação do equipamento no momento da entrega, garantindo que sua equipe esteja apta a utilizar todas as funcionalidades.",
              },
              {
                question: "Qual o prazo de entrega após a contratação?",
                answer:
                  "O prazo de entrega varia de acordo com a disponibilidade do equipamento e sua localização, mas geralmente conseguimos entregar em até 3 dias úteis após a assinatura do contrato.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b  from-red-100 via-red-400 via-red-500 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para alugar seu equipamento?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua clínica ou hospital com as melhores soluções em
            ultrassom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Equipment Card Component
function EquipmentCard({ equipment }: { equipment: Equipment }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 w-full">
        <Image
          src={equipment.image || "/placeholder.svg"}
          alt={equipment.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">{equipment.name}</h3>
        <ul className="space-y-2 mb-6">
          {equipment.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-600 font-bold">•</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Solicite seu orçamento</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
