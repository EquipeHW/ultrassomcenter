import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ultrassomvideo.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-lg font-medium tracking-wide">ULTRASSOMCENTER</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  ESCOLHA A<br />
                  <span className="text-red-500">SOLUÇÃO</span> QUE
                  <br />
                  VOCÊ DESEJA
                </h1>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-red-500/30 backdrop-blur-sm px-4 py-2 rounded-full border border-red-400/30">
                  <div className="w-2 h-2 bg-red-200 rounded-full animate-pulse"></div>
                  <span className="text-red-100 font-medium">Não Prestamos Assistência a Ultrassom Estético</span>
                </div>

                <p className="text-xl text-red-100 max-w-lg leading-relaxed">
                  Soluções completas em equipamentos de ultrassom com mais de 15 anos de experiência no mercado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#servicos">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Ver Nossos Serviços
                  </Button>
                </Link>
                <Link 
                  href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-medium px-8">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Enhanced Service Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg ">
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden opacity-90">
                  <CardContent className="p-0">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white text-center">
                      <h3 className="text-xl font-bold mb-2">Nossos Serviços</h3>
                      <p className="text-red-100 text-sm">Escolha a solução ideal para você</p>
                    </div>

                    {/* Service Links */}
                    <div className="p-6 space-y-3">
                      <Link href="/locacao" className="block group">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">LOCAÇÃO</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <span className="text-sm">🏥</span>
                            </div>
                          </div>
                          <p className="text-red-100 text-xs mt-1">A partir de R$1200</p>
                        </div>
                      </Link>

                      <Link href="/assistencia-tecnica" className="block group">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">ASSISTÊNCIA TÉCNICA</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <span className="text-sm">🔧</span>
                            </div>
                          </div>
                          <p className="text-red-100 text-xs mt-1">Manutenção especializada</p>
                        </div>
                      </Link>

                      <Link href="/manutencao-de-transdutor" className="block group">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">MANUTENÇÃO DE TRANSDUTOR</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <span className="text-sm">⚡</span>
                            </div>
                          </div>
                          <p className="text-red-100 text-xs mt-1">Reparo especializado</p>
                        </div>
                      </Link>

                      <Link href="/assistencia-tecnica#qualidade" className="block group">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">TESTE DE CONTROLE DE QUALIDADE</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <span className="text-sm">✅</span>
                            </div>
                          </div>
                          <p className="text-red-100 text-xs mt-1">Conforme RDC 611</p>
                        </div>
                      </Link>

                      <Link href="/assistencia-tecnica#seguranca" className="block group">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">TESTE DE SEGURANÇA ELÉTRICA</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <span className="text-sm">⚡</span>
                            </div>
                          </div>
                          <p className="text-red-100 text-xs mt-1">Normas ABNT</p>
                        </div>
                      </Link>

                      <Link href="/assistencia-tecnica#preventiva" className="block group">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">PREVENTIVA</span>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <span className="text-sm">🛡️</span>
                            </div>
                          </div>
                          <p className="text-red-100 text-xs mt-1">Manutenção programada</p>
                        </div>
                      </Link>
                    </div>

                    {/* CTA Footer */}
                    <div className="p-6 pt-0">
                      <div className="border-t border-gray-200 pt-4">
                        <Link 
                          href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                            <span className="flex items-center justify-center gap-2">
                              <span>💬</span>
                              Fale Conosco
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200 rounded-full opacity-30 translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Soluções Completas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para equipamentos de ultrassom, desde locação até manutenção especializada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Locação de Equipamentos",
                description: "Equipamentos de ultrassom para locação a partir de R$1200, com manutenção inclusa.",
                icon: "🏥",
                link: "/locacao",
                color: "from-red-500 to-red-600",
              },
              {
                title: "Assistência Técnica",
                description: "Manutenção especializada e reparo de equipamentos de ultrassom de todas as marcas.",
                icon: "🔧",
                link: "/assistencia-tecnica",
                color: "from-red-600 to-red-700",
              },
              {
                title: "Teste de Qualidade",
                description: "Testes completos de controle de qualidade para garantir o funcionamento perfeito.",
                icon: "✅",
                link: "/teste-controle-qualidade",
                color: "from-red-500 to-red-600",
              },
              {
                title: "Segurança Elétrica",
                description: "Testes de segurança elétrica conforme normas técnicas e regulamentações.",
                icon: "⚡",
                link: "/teste-seguranca-eletrica",
                color: "from-red-600 to-red-700",
              },
              {
                title: "Manutenção Preventiva",
                description: "Programas de manutenção preventiva para evitar problemas e prolongar a vida útil.",
                icon: "🛡️",
                link: "/preventiva",
                color: "from-red-500 to-red-600",
              },
              {
                title: "Consultoria Técnica",
                description: "Consultoria especializada para otimização e melhor uso dos equipamentos.",
                icon: "💡",
                link: "/contato",
                color: "from-red-600 to-red-700",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardContent className="p-0 text-center">
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={service.link}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:bg-red-700 transition-colors">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b  from-red-100 via-red-400 via-red-500 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de Equipamentos de Ultrassom?</h2>
          <p className="text-xl mb-8 text-red-100">
            Entre em contato conosco e encontre a solução ideal para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-medium px-8">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
