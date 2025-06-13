import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ManutencaoTransdutorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400/30 rounded-full blur-2xl translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm px-4 py-2 text-sm">
                Serviço Especializado
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                MANUTENÇÃO
                <br />
                <span className="text-red-200">DE TRANSDUTOR</span>
              </h1>

              <p className="text-xl text-red-100 max-w-lg">
                Garantia de desempenho e precisão: cuide do seu transdutor com serviços especializados em manutenção e
                locação de equipamentos de ultrassom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#solicitar-orcamento">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
                  >
                    SOLICITE SEU ORÇAMENTO
                  </Button>
                </a>
                <a href="https://wa.me/5511917433834" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-xl backdrop-blur-sm text-lg"
                  >
                    <span className="mr-2">FALE NO WHATSAPP</span>
                    <span className="text-xl">📱</span>
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center text-white text-xs border-2 border-white">
                    GE
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white">
                    PH
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs border-2 border-white">
                    MD
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white text-xs border-2 border-white">
                    TS
                  </div>
                </div>
                <span className="text-red-100 text-sm">Atendemos todas as principais marcas</span>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-red-100 to-red-200 opacity-30"></div>
                <Image
                  src="/transdutor-hero.png"
                  alt="Transdutor de ultrassom"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-red-600 px-6 py-3 rounded-xl shadow-xl font-bold flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Atendimento Rápido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">Por que escolher nosso serviço?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Manutenção Especializada para seu Transdutor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos serviços completos de manutenção para garantir o melhor desempenho do seu equipamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnósticos Precisos",
                description:
                  "Transdutores bem mantidos garantem imagens nítidas e diagnósticos confiáveis para seus pacientes.",
                icon: "🔍",
              },
              {
                title: "Maior Vida Útil",
                description:
                  "Nossa manutenção especializada prolonga significativamente a vida útil do seu equipamento.",
                icon: "⏱️",
              },
              {
                title: "Economia de Custos",
                description: "Evite substituições caras e paradas prolongadas com nossa manutenção preventiva regular.",
                icon: "💰",
              },
              {
                title: "Equipe Especializada",
                description: "Técnicos altamente treinados com experiência em todas as principais marcas do mercado.",
                icon: "👨‍🔧",
              },
              {
                title: "Laboratório Próprio",
                description: "Contamos com laboratório completo para reparos complexos e testes de qualidade.",
                icon: "🔬",
              },
              {
                title: "Garantia de Serviço",
                description: "Todos os nossos serviços possuem garantia e seguem rigorosos padrões de qualidade.",
                icon: "✅",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/maintenance-contract.png"
                  alt="Técnico realizando manutenção em transdutor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Componentes Fundamentais</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Por que a manutenção do transdutor é essencial?
              </h2>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Os transdutores são componentes fundamentais nos equipamentos de ultrassonografia, responsáveis por
                  garantir imagens precisas e diagnósticos confiáveis.
                </p>

                <p className="text-lg leading-relaxed">
                  Para preservar sua funcionalidade e prolongar sua vida útil, oferecemos serviços especializados de
                  manutenção corretiva e preventiva.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Contratos de manutenção periódica</span> garantindo que seus
                    transdutores estejam sempre em condições ideais
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Evite custos elevados</span> com substituições e paradas inesperadas
                    para manutenção
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Equipe técnica especializada</span> em nosso laboratório para cuidar
                    dos seus transdutores e montar a excelência no atendimento
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a href="#solicitar-orcamento">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl text-lg flex items-center gap-2">
                    Solicite seu orçamento <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              CONHEÇA AS MARCAS QUE FAZEMOS MANUTENÇÃO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com as principais marcas do mercado, garantindo qualidade e excelência em todos os serviços
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all w-40 h-40 flex items-center justify-center">
              <Image src="/brands/ge.png" alt="GE" width={100} height={100} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all w-40 h-40 flex items-center justify-center">
              <Image src="/brands/philips.png" alt="Philips" width={100} height={100} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all w-40 h-40 flex items-center justify-center">
              <Image src="/brands/medison.png" alt="Medison" width={100} height={100} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all w-40 h-40 flex items-center justify-center">
              <Image src="/brands/toshiba.png" alt="Toshiba" width={100} height={100} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Transesophageal Section */}
      <section className="py-16 bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30">Serviço Especializado</Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                MANUTENÇÃO TRANSDUTOR
                <br />
                TRANSESOFÁGICO
              </h2>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-red-100">
                  A manutenção de um transdutor transesofágico (TEE) é fundamental para garantir a precisão diagnóstica,
                  prolongar a vida útil do equipamento e prevenir falhas.
                </p>

                <p className="text-lg leading-relaxed text-red-100">
                  Este processo envolve cuidados especiais devido à delicadeza do instrumento, que inclui uma sonda
                  flexível com componentes sensíveis e complexos.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                  <p className="text-red-100">Manutenção preventiva e corretiva especializada</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                  <p className="text-red-100">Testes de qualidade e segurança</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                  <p className="text-red-100">Calibração e ajustes precisos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-200 mt-1 flex-shrink-0" />
                  <p className="text-red-100">Garantia de serviço</p>
                </div>
              </div>

              <div className="pt-6">
                <a href="#solicitar-orcamento">
                  <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-xl text-lg">
                    SOLICITE SEU ORÇAMENTO
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/transesophageal.png" alt="Transdutor Transesofágico" fill className="object-contain p-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">Quem Somos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">SOBRE NÓS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos uma empresa de Ultrassom multimarcas para todas as especialidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Assistência técnica com engenheiros altamente capacitados para executar reparos de assistência técnica
                preventivas e testes de controle de qualidade e de segurança elétrica nos equipamentos médicos, com
                ferramentas e equipamentos adequados para tais serviços.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-600 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">MISSÃO</h3>
                    <p className="text-red-100">
                      Atendimento personalizado conforme a necessidade de cada cliente, oferecendo produtos e serviços
                      de qualidade.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-red-700 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">VISÃO</h3>
                    <p className="text-red-100">
                      Empresa referência no comércio e serviços de ultrassom em todo mercado nacional.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                <Image
                  src="/about-1.jpg"
                  alt="Equipe técnica"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                <Image
                  src="/about-2.jpg"
                  alt="Laboratório"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                <Image
                  src="/about-3.jpg"
                  alt="Equipamentos"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                <Image
                  src="/about-4.jpg"
                  alt="Atendimento"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote Form */}
      <section id="solicitar-orcamento" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content - Form */}
            <div>
              <div className="mb-8">
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">Orçamento</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Solicite seu Orçamento</h2>
                <p className="text-lg text-gray-600">
                  Preencha o formulário abaixo e nossa equipe entrará em contato para fornecer um orçamento
                  personalizado.
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          id="nome"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="modelo" className="text-sm font-medium text-gray-700">
                          Modelo do Transdutor
                        </label>
                        <input
                          type="text"
                          id="modelo"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="Ex: GE 4C-RS"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="servico" className="text-sm font-medium text-gray-700">
                        Tipo de Serviço
                      </label>
                      <select
                        id="servico"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="manutencao-preventiva">Manutenção Preventiva</option>
                        <option value="manutencao-corretiva">Manutenção Corretiva</option>
                        <option value="transdutor-transesofagico">Manutenção de Transdutor Transesofágico</option>
                        <option value="contrato-manutencao">Contrato de Manutenção Periódica</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        placeholder="Descreva o problema ou necessidade em detalhes"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg">
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Contact Info */}
            <div>
              <div className="mb-8">
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">Contato</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">COMO CHEGAR?</h2>
                <p className="text-lg text-gray-600">
                  Entre em contato conosco ou visite nossa sede para conhecer nossos serviços
                </p>
              </div>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Endereço</h3>
                        <p className="text-gray-700">Av. Martim Francisco, 518</p>
                        <p className="text-gray-700">Alto de Santo André - CEP 09.230-700</p>
                        <p className="text-gray-700">Santo André - SP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Telefone</h3>
                        <p className="text-gray-700">(11) 91743-3834</p>
                        <p className="text-gray-700">(11) 91031-4010</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">E-mail</h3>
                        <p className="text-gray-700">ultrassomcenter@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                        <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-700">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <a href="https://wa.me/5511917433834" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg flex items-center justify-center gap-2">
                    <span>Fale Conosco pelo WhatsApp</span>
                    <span className="text-xl">📱</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seu Transdutor Merece o Melhor Cuidado</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e garanta a qualidade e precisão do seu equipamento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#solicitar-orcamento">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
                Solicitar Orçamento
              </Button>
            </a>
            <a href="tel:1191743-3834">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                (11) 91743-3834
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511917433834"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  )
}
