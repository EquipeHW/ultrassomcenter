import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target } from "lucide-react"

export default function EmpresaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br  from-red-100 via-red-400 to-red-800 py-16">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <Badge className="mb-6 bg-red-500 text-white hover:bg-red-400">
                Não Prestamos Assistência a Ultrassom Estético
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Locação e<br />
                Assistência
                <br />
                Técnica
                <br />
                Especializada
              </h1>

              <div className="space-y-4 mb-8 text-red-100">
                <p className="text-lg">
                  Somos uma empresa especializada em locação de equipamentos médicos - Ultrassom multimarcas para todas
                  as especialidades.
                </p>
                <p className="text-lg">
                  Assistência técnica com engenheiros altamente capacitados para executar reparos de assistência técnica
                  preventivas e testes de controle de qualidade e de segurança elétrica nos equipamentos médicos, com
                  ferramentas e equipamentos adequados para tais serviços.
                </p>
              </div>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl"
                >
                  Fale Conosco
                </Button>
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/sobre.png"
                  alt="Profissional utilizando equipamento de ultrassom"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/sobre2.png"
                  alt="Equipamentos e profissionais de ultrassom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content - Text */}
            <div>
              <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-200">Nossa História</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sobre Nós</h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  A ULTRASSOMCENTER está estabelecida em São Paulo, possui sede própria, com instalações adequadas para
                  o atendimento de nossos clientes e fornecedores. Possuímos também laboratório e ferramental próprios
                  para realização de reparos de diferentes modelos de equipamentos de ultrassom e acessórios.
                </p>

                <p className="text-lg leading-relaxed">
                  Atuamos na área da Saúde oferecendo não somente serviços de assistência técnica, mas também nas áreas
                  industrial e comercial de equipamentos e produtos médico-hospitalares.
                </p>

                <p className="text-lg leading-relaxed">
                  Com o foco na satisfação do cliente, a ULTRASSOMCENTER tem como seu principal objetivo a busca da
                  excelência no atendimento, executando-o sempre de maneira personalizada e profissional, adequando-o à
                  necessidade de cada cliente.
                </p>

                <p className="text-lg leading-relaxed">
                  Em todas as manutenções realizadas nos equipamentos, a ULTRASSOMCENTER visa sempre manter suas
                  características originais, as quais proporcionam maior durabilidade e confiabilidade no funcionamento.
                </p>

                <p className="text-lg leading-relaxed font-medium text-red-700">
                  Agradecemos muito sua visita em nosso Site.
                  <br />
                  Esperamos tê-lo como nosso cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Princípios que norteiam nossa atuação no mercado de equipamentos médicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            {[
              {
                icon: <Target className="h-12 w-12" />,
                title: "Excelência",
                description:
                  "Buscamos sempre a excelência no atendimento, executando serviços de forma personalizada e profissional.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Satisfação do Cliente",
                description:
                  "Nosso principal objetivo é a satisfação do cliente, adequando nossos serviços às suas necessidades específicas.",
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Qualidade",
                description:
                  "Mantemos as características originais dos equipamentos, proporcionando maior durabilidade e confiabilidade.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white/10 border-none backdrop-blur-sm text-center">
                <CardContent className="p-8 text-white ">
                  <div className="flex justify-center mb-6 text-white">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-red-100">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Áreas de Atuação</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Onde Atuamos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa expertise abrange diferentes setores, sempre com foco na qualidade e satisfação do cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Área da Saúde",
                description: "Assistência técnica especializada para equipamentos médicos",
                icon: "🏥",
              },
              {
                title: "Área Industrial",
                description: "Soluções para equipamentos industriais de ultrassom",
                icon: "🏭",
              },
              {
                title: "Área Comercial",
                description: "Produtos e equipamentos médico-hospitalares",
                icon: "🏢",
              },
              {
                title: "Multimarcas",
                description: "Atendemos todas as marcas e especialidades",
                icon: "⚙️",
              },
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b  from-red-100 via-red-400 via-red-500 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para ser nosso cliente?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar com suas necessidades de equipamentos de ultrassom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
