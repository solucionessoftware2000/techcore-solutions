import { ExternalLink, Eye, Lock, Mail, ArrowRight, Smartphone, QrCode } from 'lucide-react';

const tags = ['Next.js', 'NestJS', 'APIs', 'Cloudflare R2', 'Redis', 'PostgreSQL', 'Prisma'];

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

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-surface-200 bg-white overflow-hidden shadow-lg shadow-surface-900/5 hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-surface-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/20">
                    <span className="text-white font-bold text-lg">IT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-surface-900">Itapp LLC</h3>
                    <p className="text-sm text-surface-400">itapp.llc</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://itapp.llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-50 text-surface-600 text-sm font-medium hover:bg-surface-100 transition-colors duration-300 border border-surface-200"
                  >
                    <Eye className="w-4 h-4" />
                    Ver sitio
                  </a>
                  <a
                    href="https://itapp.llc/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-50 text-brand-700 text-sm font-medium hover:bg-brand-100 transition-colors duration-300 border border-brand-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Login
                  </a>
                </div>
              </div>

              <p className="text-surface-500 text-sm leading-relaxed mb-4">
                Perfiles digitales, tarjetas NFC y herramientas para impulsar tu negocio.
                ITAPP ayuda a profesionales y empresas a compartir su información, captar leads
                y presentar su marca con una presencia digital más clara y profesional.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <FeaturePill icon={Smartphone} label="Tarjetas NFC" />
                <FeaturePill icon={QrCode} label="QR Personalizable" />
                <FeaturePill icon={Lock} label="Encriptación E2E" />
              </div>
            </div>

            {/* ITAPP Login Preview - realistic mock */}
            <div className="bg-surface-100/50 p-6 sm:p-8 border-b border-surface-100">
              <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-4">
                Vista previa — itapp.llc/login
              </p>

              <div className="rounded-xl border border-surface-200 bg-surface-50 overflow-hidden shadow-sm">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-100 border-b border-surface-200">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-surface-400 border border-surface-200 max-w-xs mx-auto flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-green-500" />
                      itapp.llc/login
                    </div>
                  </div>
                </div>

                {/* Login form area */}
                <div className="flex flex-col sm:flex-row min-h-[340px]">
                  {/* Left branding panel */}
                  <div className="sm:w-2/5 bg-gradient-to-br from-brand-600 to-brand-800 p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
                    <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full" />
                    <div className="relative">
                      <div className="flex items-center gap-2.5 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center border border-white/20">
                          <span className="text-white font-bold text-sm">IT</span>
                        </div>
                        <span className="text-xl font-bold">ITAPP</span>
                      </div>
                      <h4 className="text-2xl font-bold leading-snug mb-3">
                        Conecta, comparte y escala tu negocio
                      </h4>
                      <p className="text-sm text-brand-200 leading-relaxed">
                        Perfiles digitales, tarjetas NFC y herramientas para impulsar tu presencia profesional.
                      </p>
                    </div>
                    <div className="relative flex items-center gap-3 mt-6">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-brand-400 border-2 border-brand-600" />
                        <div className="w-7 h-7 rounded-full bg-brand-300 border-2 border-brand-600" />
                        <div className="w-7 h-7 rounded-full bg-brand-500 border-2 border-brand-600" />
                      </div>
                      <p className="text-xs text-brand-200">+2,500 profesionales ya conectados</p>
                    </div>
                  </div>

                  {/* Right login form */}
                  <div className="sm:w-3/5 p-6 sm:p-8 bg-white flex flex-col justify-center">
                    <div className="max-w-sm mx-auto w-full">
                      <h4 className="text-xl font-bold text-surface-900 mb-1">Iniciar sesión</h4>
                      <p className="text-sm text-surface-400 mb-6">Accede a tu perfil digital ITAPP</p>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-medium text-surface-600 mb-1.5">Correo electrónico</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                            <div className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-surface-200 bg-surface-50 text-sm text-surface-400">
                              tu@correo.com
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-surface-600 mb-1.5">Contraseña</label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                            <div className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-surface-200 bg-surface-50 text-sm text-surface-400">
                              ••••••••
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <label className="flex items-center gap-1.5 text-surface-500">
                            <div className="w-4 h-4 rounded border border-surface-300 bg-white" />
                            Recordarme
                          </label>
                          <span className="text-brand-600 font-medium">¿Olvidaste tu contraseña?</span>
                        </div>

                        <div className="w-full py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold text-center flex items-center justify-center gap-2">
                          Iniciar sesión
                          <ArrowRight className="w-4 h-4" />
                        </div>

                        <p className="text-xs text-surface-400 text-center">
                          ¿No tienes cuenta? <span className="text-brand-600 font-medium">Regístrate</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech tags */}
            <div className="px-6 sm:px-8 py-5 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-surface-50 text-surface-600 text-xs font-medium border border-surface-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium border border-brand-100">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}
