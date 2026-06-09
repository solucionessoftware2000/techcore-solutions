import { ExternalLink, Eye, Lock, Mail, Smartphone, QrCode } from 'lucide-react';

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
    preview: <ItappPreview />,
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
              {/* Compact preview area */}
              <div className="h-44 bg-surface-100 overflow-hidden relative border-b border-surface-100">
                {/* Mini browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-200/80 border-b border-surface-200">
                  <span className="w-2 h-2 rounded-full bg-red-400/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  <div className="flex-1 mx-2">
                    <div className="bg-white rounded px-2 py-0.5 text-[10px] text-surface-400 border border-surface-200 max-w-[120px] mx-auto flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5 text-green-500 shrink-0" />
                      {project.domain}/login
                    </div>
                  </div>
                </div>
                {/* Site preview content */}
                <div className="h-full overflow-hidden">
                  {project.preview}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Header */}
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

                {/* Feature pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.pills.map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium border border-brand-100">
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-surface-50 text-surface-500 text-[11px] font-medium border border-surface-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
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

function ItappPreview() {
  return (
    <div className="flex h-full scale-[0.72] origin-top-left w-[139%]">
      {/* Left branding */}
      <div className="w-2/5 bg-gradient-to-br from-brand-600 to-brand-800 p-4 flex flex-col justify-between text-white shrink-0">
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-[9px]">IT</span>
            </div>
            <span className="text-sm font-bold">ITAPP</span>
          </div>
          <p className="text-[10px] text-brand-200 leading-snug">
            Perfiles digitales y tarjetas NFC para profesionales.
          </p>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <div className="flex -space-x-1">
            <div className="w-4 h-4 rounded-full bg-brand-400 border border-brand-600" />
            <div className="w-4 h-4 rounded-full bg-brand-300 border border-brand-600" />
            <div className="w-4 h-4 rounded-full bg-brand-500 border border-brand-600" />
          </div>
          <p className="text-[9px] text-brand-200">+2,500 conectados</p>
        </div>
      </div>
      {/* Right login form */}
      <div className="flex-1 bg-white p-4 flex flex-col justify-center">
        <p className="text-xs font-bold text-surface-900 mb-0.5">Iniciar sesión</p>
        <p className="text-[9px] text-surface-400 mb-3">Accede a tu perfil ITAPP</p>
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded border border-surface-200 bg-surface-50">
            <Mail className="w-3 h-3 text-surface-400 shrink-0" />
            <span className="text-[9px] text-surface-400">tu@correo.com</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded border border-surface-200 bg-surface-50">
            <Lock className="w-3 h-3 text-surface-400 shrink-0" />
            <span className="text-[9px] text-surface-400">••••••••</span>
          </div>
          <div className="w-full py-1.5 rounded bg-brand-600 text-white text-[9px] font-semibold text-center">
            Iniciar sesión
          </div>
        </div>
      </div>
    </div>
  );
}
