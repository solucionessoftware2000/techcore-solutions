import { ExternalLink, Eye, Lock, Smartphone, QrCode, Heart, Clock, Shield, MapPin, Star, Phone } from 'lucide-react';

const projects = [
  {
    id: 'itapp',
    logo: 'IT',
    name: 'Itapp LLC',
    domain: 'itapp.llc',
    description:
      'Perfiles digitales, tarjetas NFC y herramientas para impulsar tu negocio. Presencia profesional en segundos.',
    pills: [
      { icon: Smartphone, label: 'Tarjetas NFC' },
      { icon: QrCode, label: 'QR Personalizable' },
      { icon: Lock, label: 'Encriptación E2E' },
    ],
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Prisma'],
    links: [
      { href: 'https://itapp.llc', label: 'Ver sitio', icon: Eye, variant: 'ghost' as const },
      { href: 'https://itapp.llc/login', label: 'Login', icon: ExternalLink, variant: 'brand' as const },
    ],
    preview: <ItappMockPreview />,
  },
  {
    id: 'enfermeras24',
    logo: 'E24',
    name: 'Enfermeras 24 Horas',
    domain: 'enfermeras24horas.com',
    description:
      'Servicios de enfermería a domicilio en Lima Metropolitana con disponibilidad 24/7. +3,000 pacientes atendidos.',
    pills: [
      { icon: Clock, label: 'Disponible 24/7' },
      { icon: Heart, label: 'Cuidado a domicilio' },
      { icon: Shield, label: 'Personal certificado' },
    ],
    tags: ['WordPress', 'WhatsApp API', 'SEO', 'Landing Page'],
    links: [
      { href: 'https://enfermeras24horas.com', label: 'Ver sitio', icon: Eye, variant: 'ghost' as const },
      { href: 'https://wa.me/51926155440', label: 'WhatsApp', icon: ExternalLink, variant: 'brand' as const },
    ],
    preview: <Enfermeras24MockPreview />,
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding relative bg-surface-50">
      <div className="container-landing">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 tracking-wider uppercase mb-3">
            Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
            Resultados que hablan por sí solos
          </h2>
          <p className="mt-4 text-surface-500 max-w-2xl mx-auto">
            Cada proyecto que entregamos es software funcional que resuelve un problema real de negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-surface-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-brand-900/5 hover:border-brand-200 transition-all duration-300 flex flex-col"
            >
              {/* Browser chrome + preview */}
              <div className="border-b border-surface-100">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-100 border-b border-surface-200">
                  <span className="w-2 h-2 rounded-full bg-red-400/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  <div className="flex-1 mx-2">
                    <div className="bg-white rounded px-2 py-0.5 text-[10px] text-surface-400 border border-surface-200 max-w-[140px] mx-auto flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5 text-green-500 shrink-0" />
                      {project.domain}
                    </div>
                  </div>
                </div>
                {project.preview}
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-sm shadow-brand-500/20 shrink-0">
                    <span className="text-white font-bold text-sm">{project.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-surface-900 leading-tight">{project.name}</h3>
                    <p className="text-xs text-surface-400">{project.domain}</p>
                  </div>
                </div>

                <p className="text-sm text-surface-500 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.pills.map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium border border-brand-100">
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex-1" />

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-surface-50 text-surface-500 text-[11px] font-medium border border-surface-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.links.map(({ href, label, icon: Icon, variant }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        variant === 'brand'
                          ? 'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors duration-200'
                          : 'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-50 text-surface-600 text-sm font-medium hover:bg-surface-100 transition-colors duration-200 border border-surface-200'
                      }
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItappMockPreview() {
  return (
    <div className="flex h-[148px] overflow-hidden">
      {/* Left branding */}
      <div className="w-[42%] bg-gradient-to-br from-brand-600 to-brand-800 p-4 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-6 h-6 rounded bg-white/15 border border-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-[9px]">IT</span>
            </div>
            <span className="text-white font-bold text-xs">ITAPP</span>
          </div>
          <p className="text-[10px] text-brand-200 leading-snug font-medium">
            Tu presencia digital, siempre lista.
          </p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="flex -space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-brand-300 border border-brand-600" />
            ))}
          </div>
          <p className="text-[9px] text-brand-300 ml-1">+2,500</p>
        </div>
      </div>
      {/* Right: hero content */}
      <div className="flex-1 bg-white px-4 py-3 flex flex-col justify-center gap-2">
        <div className="space-y-1.5">
          <div className="h-2.5 w-3/4 rounded bg-surface-200" />
          <div className="h-2 w-full rounded bg-surface-100" />
          <div className="h-2 w-2/3 rounded bg-surface-100" />
        </div>
        <div className="flex gap-1.5 mt-1">
          <div className="px-2.5 py-1 rounded bg-brand-600 text-white text-[9px] font-semibold">Comenzar</div>
          <div className="px-2.5 py-1 rounded border border-surface-200 text-surface-500 text-[9px]">Ver demo</div>
        </div>
        <div className="flex gap-1.5 mt-1">
          {['NFC', 'QR', 'Perfil'].map((t) => (
            <span key={t} className="px-1.5 py-0.5 rounded bg-brand-50 text-brand-600 text-[8px] border border-brand-100">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Enfermeras24MockPreview() {
  return (
    <div className="h-[148px] bg-white overflow-hidden flex flex-col">
      {/* Hero band */}
      <div className="bg-teal-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-white" />
          <span className="text-white font-bold text-[11px]">Enfermeras 24h</span>
        </div>
        <div className="flex items-center gap-1 bg-white/20 rounded px-2 py-0.5">
          <Phone className="w-2.5 h-2.5 text-white" />
          <span className="text-white text-[9px]">Llamar</span>
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 px-4 py-3 flex flex-col justify-center gap-2">
          <div className="space-y-1">
            <div className="h-2.5 w-4/5 rounded bg-surface-200" />
            <div className="h-2 w-full rounded bg-surface-100" />
            <div className="h-2 w-3/5 rounded bg-surface-100" />
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-teal-500 shrink-0" />
            <span className="text-[9px] text-surface-400">Lima Metropolitana</span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-[9px] text-surface-400 ml-0.5">5.0</span>
          </div>
          <div className="px-2.5 py-1 rounded bg-teal-600 text-white text-[9px] font-semibold w-fit">
            Solicitar servicio
          </div>
        </div>
        {/* Right stats */}
        <div className="w-[38%] bg-teal-50 px-3 py-3 flex flex-col justify-center gap-2 border-l border-teal-100">
          {[['3,000+', 'Pacientes'], ['30+', 'Enfermeras'], ['24/7', 'Disponible']].map(([val, label]) => (
            <div key={label} className="text-center">
              <p className="text-[11px] font-bold text-teal-700">{val}</p>
              <p className="text-[8px] text-teal-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
