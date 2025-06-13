import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-red-600 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Endereço */}
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-white mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">Endereço</h3>
              <p className="text-white/90">Santo André - SP</p>
              <p className="text-white/90">Av. Martim Francisco, 518 - Alto de Santo André</p>
              <p className="text-white/90">CEP 09.230-700</p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-white mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-white/90">(11) 91743-3834</p>
              <p className="text-white/90">(11) 91031-4010</p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-white mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">E-mail</h3>
              <p className="text-white/90">ultrassomcenter@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">© {new Date().getFullYear()} UltrassomCenter. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
