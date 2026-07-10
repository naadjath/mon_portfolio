import { useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'

interface ContactProps {
  darkMode?: boolean
}

const Contact = ({ darkMode }: ContactProps) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Branche ici un vrai service (EmailJS, Formspree, une API...) pour envoyer le message
    const subject = encodeURIComponent(`Message de ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:naadjaths@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputStyle = {
    background: darkMode ? 'rgba(255,255,255,0.04)' : '#ffffff',
    borderColor: darkMode ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.12)',
    color: darkMode ? '#ffffff' : '#111111',
  }

  const infos = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'naadjaths@gmail.com' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Localisation', value: 'France' },
  ]

  return (
    <section
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 transition-colors duration-500"
      style={{ background: darkMode ? '#0a0a0a' : '#ffffff' }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full blur-[140px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.05)' : 'rgba(236,72,153,0.06)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Restons en contact
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: darkMode ? '#ffffff' : '#111111' }}
          >
            Me{' '}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
              Contacter
            </span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base"
            style={{ color: darkMode ? '#9ca3af' : '#374151' }}
          >
            Une opportunité d'alternance, une question ou juste envie d'échanger ?
            Écris-moi, je réponds rapidement.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Colonne infos */}
          <div className="md:col-span-2 space-y-4" data-aos="fade-right">
            {infos.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 rounded-2xl p-5 border"
                style={{
                  background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-pink-500 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/15">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
                    {info.label}
                  </p>
                  <p className="font-semibold text-sm" style={{ color: darkMode ? '#e5e7eb' : '#111111' }}>
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Réseaux */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/naadjath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-pink-500 border hover:scale-110 transition-transform"
                style={{
                  background: darkMode ? 'rgba(255,255,255,0.04)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/naadjath-seibou"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-pink-500 border hover:scale-110 transition-transform"
                style={{
                  background: darkMode ? 'rgba(255,255,255,0.04)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 rounded-2xl p-7 border space-y-5"
            data-aos="fade-left"
            style={{
              background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#e5e7eb' : '#374151' }}>
                Nom
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ton nom"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:border-pink-500 transition-colors"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#e5e7eb' : '#374151' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="ton@email.com"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:border-pink-500 transition-colors"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: darkMode ? '#e5e7eb' : '#374151' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Ton message..."
                className="w-full px-4 py-3 rounded-xl border outline-none focus:border-pink-500 transition-colors resize-none"
                style={inputStyle}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white
                         bg-gradient-to-r from-pink-500 to-fuchsia-500
                         shadow-[0_0_28px_rgba(236,72,153,0.4)]
                         hover:shadow-[0_0_42px_rgba(236,72,153,0.6)]
                         hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Send className="w-5 h-5" />
              {sent ? 'Message prêt à envoyer !' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
