import { useState } from 'react'

// ─── SVG Illustrations ──────────────────────────────────────────────────────

function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 3-11 1z" />
    </svg>
  )
}

function SensorIllustration() {
  return (
    <svg viewBox="0 0 200 240" className="w-full max-w-[200px] mx-auto" fill="none">
      {/* Pot */}
      <ellipse cx="100" cy="195" rx="55" ry="12" fill="#8D6E63" opacity="0.4" />
      <path d="M55 145 Q48 195 65 195 H135 Q152 195 145 145Z" fill="#A1887F" />
      <path d="M50 145 H150 Q148 138 100 138 Q52 138 50 145Z" fill="#795548" />
      {/* Soil */}
      <ellipse cx="100" cy="145" rx="48" ry="8" fill="#5D4037" />
      <ellipse cx="100" cy="143" rx="45" ry="6" fill="#6D4C41" />
      {/* Plant stem */}
      <path d="M100 143 L100 80" stroke="#388E3C" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 120 Q80 100 70 85 Q90 82 100 100" fill="#4CAF50" />
      <path d="M100 105 Q120 85 130 70 Q110 68 100 90" fill="#66BB6A" />
      <path d="M100 90 Q78 75 72 60 Q92 58 100 78" fill="#81C784" />
      <path d="M100 80 Q122 65 128 50 Q108 49 100 68" fill="#A5D6A7" />
      {/* Sensor probe */}
      <rect x="90" y="100" width="6" height="55" rx="3" fill="#1565C0" opacity="0.9" />
      <rect x="104" y="108" width="6" height="47" rx="3" fill="#1976D2" opacity="0.9" />
      {/* Sensor body */}
      <rect x="84" y="88" width="32" height="16" rx="4" fill="#0D47A1" />
      <rect x="87" y="91" width="8" height="4" rx="1" fill="#42A5F5" opacity="0.8" />
      {/* LED green */}
      <circle cx="108" cy="93" r="3" fill="#00E676" className="animate-pulse-green" />
      <circle cx="108" cy="93" r="5" fill="#00E676" opacity="0.3" className="animate-pulse-green" />
      {/* Wire */}
      <path d="M116 96 Q130 96 130 80 Q130 65 150 65" stroke="#FF9800" strokeWidth="2" strokeDasharray="3,2" fill="none" strokeLinecap="round" />
      {/* Mini board */}
      <rect x="148" y="55" width="32" height="22" rx="3" fill="#1A237E" />
      <rect x="151" y="58" width="6" height="4" rx="1" fill="#42A5F5" opacity="0.7" />
      <rect x="160" y="58" width="6" height="4" rx="1" fill="#42A5F5" opacity="0.5" />
      <circle cx="170" cy="68" r="2.5" fill="#00E676" opacity="0.8" />
      <circle cx="162" cy="68" r="2" fill="#FF5252" opacity="0.6" />
    </svg>
  )
}

function MicrocontrollerIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-full max-w-[180px] mx-auto" fill="none">
      <rect x="40" y="30" width="120" height="100" rx="6" fill="#1A237E" />
      <rect x="46" y="36" width="108" height="88" rx="4" fill="#0D47A1" />
      {/* Chip */}
      <rect x="70" y="55" width="60" height="50" rx="4" fill="#1565C0" />
      <rect x="74" y="59" width="52" height="42" rx="2" fill="#1976D2" />
      <text x="100" y="84" textAnchor="middle" fill="#42A5F5" fontSize="8" fontFamily="monospace">NANO</text>
      <text x="100" y="94" textAnchor="middle" fill="#64B5F6" fontSize="6" fontFamily="monospace">v3.0</text>
      {/* Pins left */}
      {[45, 55, 65, 75, 85, 95].map((y, i) => (
        <rect key={i} x="46" y={y} width="22" height="5" rx="1" fill="#FFD54F" opacity="0.8" />
      ))}
      {/* Pins right */}
      {[45, 55, 65, 75, 85, 95].map((y, i) => (
        <rect key={i} x="132" y={y} width="22" height="5" rx="1" fill="#FFD54F" opacity="0.8" />
      ))}
      {/* LEDs */}
      <circle cx="55" cy="36" r="4" fill="#00E676" opacity="0.9" />
      <circle cx="68" cy="36" r="4" fill="#FF5252" opacity="0.6" />
      {/* USB port */}
      <rect x="86" y="118" width="28" height="14" rx="2" fill="#424242" />
      <rect x="88" y="120" width="24" height="10" rx="1" fill="#616161" />
    </svg>
  )
}

function LEDIndicatorIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full max-w-[180px] mx-auto" fill="none">
      {/* Board */}
      <rect x="30" y="40" width="140" height="70" rx="8" fill="#1B5E20" />
      <rect x="34" y="44" width="132" height="62" rx="6" fill="#2E7D32" />
      {/* Traces */}
      <path d="M60 75 H90" stroke="#A5D6A7" strokeWidth="2" opacity="0.5" />
      <path d="M110 75 H140" stroke="#A5D6A7" strokeWidth="2" opacity="0.5" />
      {/* Green LED */}
      <circle cx="60" cy="75" r="14" fill="#00E676" opacity="0.15" className="animate-pulse-green" />
      <circle cx="60" cy="75" r="10" fill="#00E676" opacity="0.3" className="animate-pulse-green" />
      <circle cx="60" cy="75" r="7" fill="#00E676" className="animate-pulse-green" />
      <text x="60" y="100" textAnchor="middle" fill="#A5D6A7" fontSize="7" fontFamily="sans-serif">OK</text>
      {/* Red LED */}
      <circle cx="140" cy="75" r="14" fill="#FF5252" opacity="0.1" />
      <circle cx="140" cy="75" r="10" fill="#FF5252" opacity="0.2" />
      <circle cx="140" cy="75" r="7" fill="#FF5252" opacity="0.5" />
      <text x="140" y="100" textAnchor="middle" fill="#EF9A9A" fontSize="7" fontFamily="sans-serif">H2O</text>
      {/* Center label */}
      <text x="100" y="72" textAnchor="middle" fill="#C8E6C9" fontSize="8" fontWeight="bold" fontFamily="sans-serif">GreenTech</text>
      <text x="100" y="82" textAnchor="middle" fill="#81C784" fontSize="6" fontFamily="sans-serif">STATUS</text>
    </svg>
  )
}

function PlantInPotSVG() {
  return (
    <svg viewBox="0 0 160 200" className="w-20 h-24 mx-auto" fill="none">
      <path d="M40 120 Q33 175 52 175 H108 Q127 175 120 120Z" fill="#CE9B6E" />
      <path d="M35 120 H125 Q123 112 80 112 Q37 112 35 120Z" fill="#A0522D" />
      <ellipse cx="80" cy="120" rx="42" ry="7" fill="#5D4037" />
      <path d="M80 118 L80 60" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 100 Q62 84 56 70 Q74 67 80 85" fill="#4CAF50" />
      <path d="M80 85 Q98 69 104 55 Q86 53 80 72" fill="#66BB6A" />
      <path d="M80 72 Q61 58 57 44 Q75 42 80 60" fill="#81C784" />
    </svg>
  )
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Producto', href: '#about' },
    { label: 'Cómo funciona', href: '#how' },
    { label: 'Beneficios', href: '#benefits' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#2E7D32] rounded-lg flex items-center justify-center group-hover:bg-[#1B5E20] transition-colors">
            <LeafIcon className="w-5 h-5 text-white" />
          </div>
          <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xl font-700 text-[#1C2B1E]">
            <span className="text-[#2E7D32]">Green</span>Tech
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#4A5568] hover:text-[#2E7D32] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#2E7D32]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#4A5568] hover:text-[#2E7D32] py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="hero-gradient pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#1565C0]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-1/3 w-48 h-48 rounded-full bg-[#81C784]/10 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#81C784] rounded-full animate-pulse-green" />
            <span className="text-xs font-medium text-green-200 tracking-widest uppercase">Proyecto Escolar · STEM</span>
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-900 leading-tight mb-6">
            Cuida tus plantas
            <span className="block text-[#81C784]">con tecnología</span>
            <span className="block">inteligente</span>
          </h1>

          <p className="text-lg text-green-100 leading-relaxed mb-8 max-w-md">
            GreenTech combina naturaleza, artesanía y robótica para crear una nueva forma de cultivar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#about"
              className="bg-[#81C784] hover:bg-[#66BB6A] text-[#1B5E20] font-700 px-8 py-3.5 rounded-xl text-center transition-all hover:scale-105 hover:shadow-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Conoce el proyecto
            </a>
            <a
              href="#how"
              className="border border-white/40 hover:bg-white/10 text-white font-600 px-8 py-3.5 rounded-xl text-center transition-all"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ver cómo funciona →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8">
            {[
              { num: '100%', label: 'Artesanal' },
              { num: '3x', label: 'Menos agua' },
              { num: 'STEM', label: 'Educativo' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-800 text-[#81C784]">{s.num}</div>
                <div className="text-xs text-green-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex justify-center animate-float">
          <div className="relative w-full max-w-sm">
            {/* Main product card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 tech-glow">
              <div className="bg-[#F3E9D2]/15 rounded-2xl p-4 mb-4 flex justify-center">
                <SensorIllustration />
              </div>

              {/* Status indicators */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-[#00E676]/15 border border-[#00E676]/30 rounded-xl p-3 text-center">
                  <div className="w-3 h-3 bg-[#00E676] rounded-full mx-auto mb-1 animate-pulse-green" />
                  <div className="text-xs text-green-200">Humedad OK</div>
                </div>
                <div className="flex-1 bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                  <div className="text-lg">🌡️</div>
                  <div className="text-xs text-green-200">22°C</div>
                </div>
                <div className="flex-1 bg-[#1565C0]/20 border border-[#42A5F5]/30 rounded-xl p-3 text-center">
                  <div className="text-lg">💧</div>
                  <div className="text-xs text-green-200">68%</div>
                </div>
              </div>

              <div className="text-center">
                <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white/90 text-sm font-semibold">
                  Kit GreenTech — Sensor Activo
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#81C784] text-[#1B5E20] text-xs font-700 px-3 py-1.5 rounded-full shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              🏆 Feria Escolar 2026
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
        <span className="text-xs">Descubre más</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const items = [
    {
      emoji: '🌱',
      title: 'Maceta artesanal',
      desc: 'Decorada a mano con diseños únicos e irrepetibles',
      color: 'bg-[#E8F5E9] border-[#A5D6A7]',
      iconBg: 'bg-[#2E7D32]',
    },
    {
      emoji: '🌿',
      title: 'Semillas y tierra',
      desc: 'Todo lo necesario para iniciar el cultivo desde cero',
      color: 'bg-[#F3E9D2] border-[#E8D5B0]',
      iconBg: 'bg-[#558B2F]',
    },
    {
      emoji: '🤖',
      title: 'Sensor inteligente',
      desc: 'Mide la humedad del suelo con precisión en tiempo real',
      color: 'bg-[#E3F2FD] border-[#90CAF9]',
      iconBg: 'bg-[#1565C0]',
    },
    {
      emoji: '📱',
      title: 'Sistema tecnológico',
      desc: 'Indica cuándo regar la planta mediante señales LED',
      color: 'bg-[#FFF3E0] border-[#FFCC80]',
      iconBg: 'bg-[#E65100]',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[#2E7D32] text-sm font-600 tracking-widest uppercase">El producto</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl sm:text-4xl font-800 text-[#1C2B1E] mt-2 mb-4">
            ¿Qué es GreenTech?
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto text-lg leading-relaxed">
            Un kit de cultivo inteligente diseñado para ayudarte a cuidar plantas utilizando robótica simple.
            Combina la calidez de lo artesanal con la precisión de la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div
              key={item.title}
              className={`card-hover rounded-2xl border p-6 ${item.color}`}
            >
              <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {item.emoji}
              </div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-700 text-[#1C2B1E] mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl overflow-hidden h-64 bg-[#C8E6C9]">
            <img
              src="https://images.unsplash.com/photo-1553275991-b6ba99f234e1?w=800&h=400&fit=crop&auto=format"
              alt="Plantas en macetas artesanales"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-64 bg-[#E3F2FD]">
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop&auto=format"
              alt="Planta en maceta artesanal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'El sensor analiza la humedad',
      desc: 'La sonda insertada en el suelo mide constantemente el nivel de humedad y envía los datos al sistema.',
      Illustration: SensorIllustration,
      color: 'bg-[#E8F5E9]',
      accent: 'text-[#2E7D32]',
    },
    {
      number: '02',
      title: 'El sistema procesa la información',
      desc: 'El microcontrolador recibe la señal y determina si la planta necesita agua o está bien hidratada.',
      Illustration: MicrocontrollerIllustration,
      color: 'bg-[#E3F2FD]',
      accent: 'text-[#1565C0]',
    },
    {
      number: '03',
      title: 'La planta indica cuándo necesita agua',
      desc: 'LED verde = humedad adecuada. LED rojo = necesita agua. Simple y visual para cualquier usuario.',
      Illustration: LEDIndicatorIllustration,
      color: 'bg-[#F3E9D2]',
      accent: 'text-[#558B2F]',
    },
  ]

  return (
    <section id="how" className="py-20 sm:py-28 bg-[#F8FBF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[#2E7D32] text-sm font-600 tracking-widest uppercase">Proceso</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl sm:text-4xl font-800 text-[#1C2B1E] mt-2 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-[#4A5568] max-w-xl mx-auto text-lg">
            Robótica hecha simple. Tres pasos para que tu planta nunca más sufra de sed.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-28 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#81C784] via-[#42A5F5] to-[#A5D6A7] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Number badge */}
                <div className="w-16 h-16 bg-[#2E7D32] rounded-2xl flex items-center justify-center z-10 mb-6 shadow-lg">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white font-800 text-xl">{step.number}</span>
                </div>

                <div className={`w-full rounded-2xl ${step.color} p-6 card-hover`}>
                  <step.Illustration />
                  <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className={`text-lg font-700 ${step.accent} mt-4 mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LED legend */}
        <div className="mt-12 bg-[#1C2B1E] rounded-2xl p-6 grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00E676]/20 border border-[#00E676]/40 rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-[#00E676] rounded-full animate-pulse-green" />
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white font-600">LED Verde encendido</div>
              <div className="text-[#81C784] text-sm">Humedad adecuada — ¡tu planta está feliz!</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF5252]/20 border border-[#FF5252]/40 rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-[#FF5252] rounded-full animate-pulse-red" />
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white font-600">LED Rojo encendido</div>
              <div className="text-[#EF9A9A] text-sm">Necesita agua — hora de regar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Robotics ─────────────────────────────────────────────────────────────────

function Robotics() {
  const features = [
    {
      icon: '🤖',
      title: 'Sensor de humedad',
      desc: 'Detecta el nivel exacto de agua en el suelo y transmite la señal al sistema de control.',
      stat: '±2%',
      statLabel: 'Precisión',
    },
    {
      icon: '💡',
      title: 'Indicadores LED',
      desc: 'Señales visuales claras e intuitivas para que cualquier persona sepa cuándo regar.',
      stat: '2',
      statLabel: 'Colores',
    },
    {
      icon: '⚡',
      title: 'Automatización inteligente',
      desc: 'El sistema procesa datos automáticamente sin necesidad de apps ni conexión a internet.',
      stat: '24/7',
      statLabel: 'Monitoreo',
    },
    {
      icon: '🌎',
      title: 'Tecnología sostenible',
      desc: 'Diseño de bajo consumo energético que reduce el desperdicio de agua hasta un 40%.',
      stat: '40%',
      statLabel: 'Menos agua',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#1C2B1E] relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1565C0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2E7D32]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[#81C784] text-sm font-600 tracking-widest uppercase">Tecnología</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl sm:text-4xl font-800 text-white mt-2 mb-4">
            Robótica al servicio
            <span className="text-[#81C784] block">del medio ambiente</span>
          </h2>
          <p className="text-[#A5D6A7] max-w-xl mx-auto text-lg">
            Electrónica accesible y sostenible que pone la tecnología al alcance de todos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div
              key={f.title}
              className="card-hover bg-white/5 border border-white/10 hover:border-[#81C784]/40 rounded-2xl p-6"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white font-700 text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-[#A5D6A7] text-sm leading-relaxed mb-4">{f.desc}</p>
              <div className="border-t border-white/10 pt-4">
                <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-800 text-[#81C784]">{f.stat}</span>
                <span className="text-[#A5D6A7] text-xs ml-2">{f.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Electronics image */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl overflow-hidden h-52 bg-[#0D47A1]/20">
            <img
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=700&h=350&fit=crop&auto=format"
              alt="Placa de circuito electrónico del kit GreenTech"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-sm">
              <div className="text-[#81C784] mb-3 font-sans font-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Código del sensor
              </div>
              <div className="space-y-1 text-[#A5D6A7] text-xs">
                <div><span className="text-[#42A5F5]">int</span> <span className="text-white">sensorPin</span> = <span className="text-[#FFD54F]">A0</span>;</div>
                <div><span className="text-[#42A5F5]">int</span> <span className="text-white">ledVerde</span> = <span className="text-[#FFD54F]">9</span>;</div>
                <div><span className="text-[#42A5F5]">int</span> <span className="text-white">ledRojo</span> = <span className="text-[#FFD54F]">10</span>;</div>
                <div className="mt-2"><span className="text-[#CE93D8]">void</span> <span className="text-[#81C784]">loop</span>() {'{'}</div>
                <div className="pl-4 text-[#64B5F6]">// Lectura del sensor</div>
                <div className="pl-4"><span className="text-[#42A5F5]">int</span> humedad = <span className="text-white">analogRead</span>(sensorPin);</div>
                <div className="pl-4"><span className="text-[#CE93D8]">if</span> (humedad {'>'} <span className="text-[#FFD54F]">500</span>) {'{'}</div>
                <div className="pl-8"><span className="text-white">digitalWrite</span>(ledVerde, <span className="text-[#81C784]">HIGH</span>);</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Benefits ─────────────────────────────────────────────────────────────────

function Benefits() {
  const benefits = [
    { icon: '💧', title: 'Ahorra agua', desc: 'Riega solo cuando la planta realmente lo necesita, evitando el desperdicio.' },
    { icon: '🌱', title: 'Facilita el cuidado', desc: 'No necesitas ser experto. El sistema te guía con señales visuales simples.' },
    { icon: '🛠️', title: 'Artesanía y tecnología', desc: 'Une lo mejor de lo hecho a mano con la precisión de la electrónica.' },
    { icon: '📚', title: 'Proyecto educativo STEM', desc: 'Ideal para aprender robótica, programación y medioambiente de forma práctica.' },
    { icon: '🍃', title: 'Producto ecológico', desc: 'Materiales naturales y diseño sostenible para cuidar nuestro planeta.' },
    { icon: '🏠', title: 'Hogares y colegios', desc: 'Perfecto para el hogar, el aula o cualquier espacio que quieras verdear.' },
  ]

  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2E7D32] text-sm font-600 tracking-widest uppercase">Ventajas</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl sm:text-4xl font-800 text-[#1C2B1E] mt-2 mb-6">
              ¿Por qué elegir
              <span className="text-[#2E7D32]"> GreenTech?</span>
            </h2>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-8">
              No es solo una maceta. Es un sistema inteligente que transforma la manera en que cuidas tus plantas.
            </p>
            <div className="flex items-center gap-4 bg-[#F3E9D2] rounded-2xl p-4">
              <div className="text-4xl">🏆</div>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-700 text-[#1C2B1E]">Proyecto ganador de feria</div>
                <div className="text-[#4A5568] text-sm">Reconocido por su innovación y enfoque sostenible</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(b => (
              <div
                key={b.title}
                className="card-hover flex gap-3 p-4 rounded-xl border border-[#E8F5E9] hover:border-[#81C784] bg-white"
              >
                <div className="text-2xl flex-shrink-0">{b.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif' }} className="font-600 text-[#1C2B1E] mb-0.5">{b.title}</div>
                  <div className="text-[#4A5568] text-xs leading-relaxed">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function Gallery() {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1656740839066-db82019b292b?w=600&h=400&fit=crop&auto=format',
      alt: 'Macetas artesanales con plantas',
      label: 'Macetas artesanales',
      span: 'col-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1535572821898-76498e0a2acb?w=400&h=400&fit=crop&auto=format',
      alt: 'Plantas cactus verdes',
      label: 'Plantas disponibles',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=400&h=300&fit=crop&auto=format',
      alt: 'Placa de circuito electrónico sensor',
      label: 'Prototipo electrónico',
      span: '',
    },
    {
      src: 'https://images.unsplash.com/photo-1602149316616-f88820863748?w=600&h=300&fit=crop&auto=format',
      alt: 'Cactus verde de cerca',
      label: 'Sensor de humedad',
      span: 'col-span-2',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#F8FBF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#2E7D32] text-sm font-600 tracking-widest uppercase">Galería</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl sm:text-4xl font-800 text-[#1C2B1E] mt-2">
            El kit en detalle
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {photos.map(p => (
            <div
              key={p.alt}
              className={`relative rounded-2xl overflow-hidden group ${p.span} h-52 bg-[#C8E6C9]`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B1E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white text-sm font-600">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    {
      q: '¿Cómo funciona el sensor de humedad?',
      a: 'El sensor de humedad es una sonda electrónica que se inserta en el suelo de la maceta. Mide la resistencia eléctrica entre dos electrodos: cuando el suelo está húmedo, conduce mejor la electricidad; cuando está seco, la resistencia aumenta. Esta señal es procesada por el microcontrolador para encender el LED correspondiente.',
    },
    {
      q: '¿Qué plantas puedo cultivar con GreenTech?',
      a: 'GreenTech es compatible con la mayoría de plantas de interior y exterior: hierbas aromáticas (albahaca, menta, romero), flores, cactus, suculentas y vegetales pequeños. El kit incluye semillas seleccionadas para principiantes, pero puedes usar las plantas que prefieras.',
    },
    {
      q: '¿Por qué GreenTech utiliza robótica?',
      a: 'Usamos robótica simple porque hace el cuidado de plantas accesible para todos. En lugar de depender de la memoria o la experiencia del usuario, la electrónica monitorea el suelo de forma continua y da señales claras. Además, es una excelente forma de aprender sobre programación, sensores y electrónica de manera práctica.',
    },
    {
      q: '¿Es fácil de usar?',
      a: '¡Totalmente! GreenTech está diseñado para que cualquier persona —sin importar su edad o conocimiento técnico— pueda usarlo. Inserta el sensor en la tierra, conecta el sistema, y sigue las señales LED. Verde = todo bien, Rojo = hora de regar. Así de simple. El kit incluye una guía ilustrada paso a paso.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#2E7D32] text-sm font-600 tracking-widest uppercase">Preguntas frecuentes</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-3xl sm:text-4xl font-800 text-[#1C2B1E] mt-2">
            Todo lo que necesitas saber
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#E8F5E9] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F8FBF8] transition-colors"
              >
                <span style={{ fontFamily: 'Poppins, sans-serif' }} className="font-600 text-[#1C2B1E] pr-4">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 bg-[#E8F5E9] rounded-full flex-shrink-0 flex items-center justify-center text-[#2E7D32] font-700 transition-transform ${open === i ? 'rotate-45' : ''}`}
                >
                  +
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-5 bg-[#F8FBF8] border-t border-[#E8F5E9]">
                  <p className="text-[#4A5568] text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#1C2B1E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#2E7D32] rounded-lg flex items-center justify-center">
                <LeafIcon className="w-5 h-5 text-white" />
              </div>
              <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xl font-700">
                <span className="text-[#81C784]">Green</span>Tech
              </span>
            </div>
            <p className="text-[#A5D6A7] text-sm leading-relaxed mb-4">
              Tecnología inteligente para cuidar la naturaleza.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#2E7D32]/30 border border-[#2E7D32]/40 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 bg-[#81C784] rounded-full animate-pulse-green" />
              <span className="text-[#81C784] text-xs font-500">Proyecto escolar STEM</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-700 mb-4 text-sm uppercase tracking-widest text-[#81C784]">
              Navegación
            </h4>
            <ul className="space-y-2">
              {['Inicio', 'Producto', 'Cómo funciona', 'Beneficios', 'Preguntas'].map(l => (
                <li key={l}>
                  <a href="#hero" className="text-[#A5D6A7] hover:text-white text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-700 mb-4 text-sm uppercase tracking-widest text-[#81C784]">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-[#A5D6A7]">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>greentech@colegio.edu.pe</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Pabellón de Ciencias, Aula 301</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <span>Feria: Viernes 9am – 1pm</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Instagram', icon: '📸' },
                { label: 'TikTok', icon: '🎵' },
                { label: 'YouTube', icon: '▶️' },
              ].map(s => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2E7D32] rounded-lg flex items-center justify-center transition-colors text-base"
                  title={s.label}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#A5D6A7] text-xs">
            © 2026 GreenTech · Proyecto escolar STEM · Todos los derechos reservados
          </p>
          <p className="text-[#A5D6A7] text-xs">
            Hecho con 💚 por estudiantes innovadores
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <HowItWorks />
      <Robotics />
      <Benefits />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  )
}
