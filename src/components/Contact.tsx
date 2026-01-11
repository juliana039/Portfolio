'use client';

export default function Contact() {
  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-xl text-gray-400">
            Disponível para novos projetos e oportunidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estou sempre aberta a discutir novos projetos, ideias criativas ou 
                oportunidades para fazer parte da sua equipe.
              </p>
            </div>

            {/* Contatos */}
            <div className="space-y-5">
              <a 
                href="mailto:julianapm.dev@gmail.com"
                className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-semibold group-hover:gradient-text break-all">julianapm.dev@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+5592996131480"
                className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-purple to-primary-teal flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Telefone</div>
                  <div className="font-semibold group-hover:gradient-text">(092) 99613-1480</div>
                </div>
              </a>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-teal to-primary-yellow flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Localização</div>
                  <div className="font-semibold">Manaus, Amazonas, Brasil</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/julianapm" 
                  target="_blank"
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all text-gray-400 hover:text-primary-blue"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/julianapm" 
                  target="_blank"
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all text-gray-400 hover:text-primary-blue"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-blue transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
