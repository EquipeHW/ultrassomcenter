import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react"

export default function AssistenciaTecnicaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-100 via-red-400 to-red-800 py-16">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Assistência
                <br />
                Técnica para Ultrassom
              </h1>

              <div className="space-y-4 mb-8 text-red-100">
                <p className="text-lg">
                  Serviços de manutenção corretiva e preventiva em equipamentos de ultrassonografia, vídeo printers,
                  transdutores e acessórios.
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
                  Solicite seu orçamento
                </Button>
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assistencia.png"
                  alt="Manutenção de equipamentos de ultrassom"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">Configuração de equipamentos e conectividade.</span> Nossos técnicos
                  são especializados em configurar seu equipamento para máxima eficiência.
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">
                    Emissão de laudos de funcionamento dos equipamentos, conforme exigências dos órgãos de saúde.
                  </span>{" "}
                  Garantimos que seus equipamentos estejam em conformidade com todas as regulamentações.
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">
                    Contratos de revisões periódicas, visando manter seu equipamento sempre em condições ideais de
                    funcionamento, evitando custos maiores ocasionados por defeitos e paradas prolongadas para
                    manutenção.
                  </span>{" "}
                  Economize com manutenção preventiva regular.
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">
                    Temos em nossa sede, laboratório adequado ao reparo de equipamentos médicos de alta tecnologia.
                  </span>{" "}
                  Infraestrutura completa para atender suas necessidades.
                </p>

                <p className="text-lg font-bold text-red-600">Responsável Técnico CREA 5069602394</p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assistencia2.png"
                  alt="Laboratório de manutenção de equipamentos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Maintenance */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manutenção Certificada</h2>
          <p className="text-xl mb-12 text-red-100">Conforme as exigências da Lei RDC 611</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck className="h-16 w-16" />,
                title: "Teste de Controle de Qualidade com Fanthoma",
                description:
                  "Realizamos teste de controle de qualidade assim garantindo a conformidade dentro dos padrões estabelecido pela ANVISA RDC 611.",
                link: "#qualidade",
              },
              {
                icon: <Zap className="h-16 w-16" />,
                title: "Teste de Segurança Elétrica",
                description:
                  "Testes de segurança elétrica são realizados para avaliar os riscos potenciais de choques elétricos para os clientes durante o uso de seus produtos.",
                link: "#seguranca",
              },
              {
                icon: <Shield className="h-16 w-16" />,
                title: "Preventiva Especializada",
                description:
                  "Realizamos a manutenção preventiva nos equipamentos de ultrassom, usando procedimento de checklist de todo o equipamento.",
                link: "#preventiva",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white text-gray-800 hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-red-600">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Solicite seu orçamento</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Test */}
      <section id="qualidade" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/fantoma.jpeg" alt="Teste de Controle de Qualidade" fill className="object-cover" />
              </div>
            </div>

            {/* Right Content - Text */}
            <div>
              <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-200">Controle de Qualidade</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Teste de Controle de Qualidade com Fanthoma
              </h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <p className="text-lg leading-relaxed">
                  Realizamos testes de controle de qualidade em equipamentos de ultrassom utilizando phantoms
                  especializados, garantindo a conformidade dentro dos padrões estabelecidos pela ANVISA RDC 611.
                </p>

                <p className="text-lg leading-relaxed">
                  Nossos testes verificam a precisão, resolução e qualidade de imagem do seu equipamento, assegurando
                  diagnósticos confiáveis e precisos para seus pacientes.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Avaliação da resolução axial e lateral</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Verificação da precisão de medidas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Teste de uniformidade de imagem</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Emissão de laudo técnico detalhado</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Solicite seu orçamento</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Safety Test */}
      <section id="seguranca" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <div>
              <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-200">Segurança Elétrica</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Teste de Segurança Elétrica</h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <p className="text-lg leading-relaxed">
                  Testes de segurança elétrica são realizados para avaliar os riscos potenciais de choques elétricos
                  para os clientes durante o uso de seus produtos.
                </p>

                <p className="text-lg leading-relaxed">
                  Nossos técnicos certificados utilizam equipamentos de última geração para verificar a conformidade com
                  as normas de segurança elétrica, garantindo a proteção de pacientes e operadores.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Medição de correntes de fuga</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Verificação da resistência de aterramento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Teste de isolamento elétrico</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Certificação conforme normas ABNT</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Solicite seu orçamento</Button>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/testedesegurancaeletrica.jpg" alt="Teste de Segurança Elétrica" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Maintenance */}
      <section id="preventiva" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/limpezaultrassom.jpg"
                  alt="Manutenção Preventiva Especializada"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content - Text */}
            <div>
              <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-200">Manutenção Preventiva</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Preventiva Especializada</h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <p className="text-lg leading-relaxed">
                  Realizamos a manutenção preventiva nos equipamentos de ultrassom, usando procedimento de checklist
                  completo para garantir o funcionamento ideal de todo o equipamento.
                </p>

                <p className="text-lg leading-relaxed">
                  A manutenção preventiva regular prolonga a vida útil do seu equipamento, reduz custos com reparos
                  emergenciais e minimiza o tempo de inatividade, garantindo maior produtividade para sua clínica ou
                  hospital.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Limpeza interna e externa do equipamento</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Verificação de componentes eletrônicos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Calibração de transdutores</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p>Atualização de software quando necessário</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Solicite seu orçamento</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote Form */}
      <section id="solicitar-orcamento" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Orçamento</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Solicite seu Orçamento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para fornecer um orçamento personalizado
              para suas necessidades.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b  from-red-100 via-red-400 via-red-500 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manutenção de Qualidade para seu Equipamento</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Conte com nossa equipe especializada para manter seus equipamentos de ultrassom funcionando perfeitamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
                Entre em Contato
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
