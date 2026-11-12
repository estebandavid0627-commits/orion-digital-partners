import React, { useState } from 'react';

export default function App() {
  const [servicios] = useState([
    {
      id: 1,
      titulo: "Desarrollo Web & Software a Medida (React)",
      categoria: "Desarrollo",
      cotizadorKey: "Desarrollo Web",
      descripcion: "Aplicaciones web de alto rendimiento construidas con React, arquitectura modular y optimización SEO técnico.",
      imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      precioBase: 1200,
      stack: ["React 18", "Vite", "Tailwind / CSS Modular", "REST API"],
      entregables: ["Diseño UI/UX Responsivo", "Arquitectura SPA ultrarrápida", "Optimización Core Web Vitals", "Despliegue en nube CI/CD"]
    },
    {
      id: 2,
      titulo: "Desarrollo Backend con Node.js & Express",
      categoria: "Desarrollo",
      cotizadorKey: "Backend",
      descripcion: "APIs RESTful seguras, integración con bases de datos MongoDB y microservicios escalables para alta demanda.",
      imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      precioBase: 950,
      stack: ["Node.js", "Express", "MongoDB Atlas", "JWT Auth"],
      entregables: ["Documentación Swagger / Postman", "Autenticación encriptada por roles", "Modelado de datos NoSQL", "Pruebas de carga y estrés"]
    },
    {
      id: 3,
      titulo: "Optimización de Procesos & Robots RPA",
      categoria: "Automatización",
      cotizadorKey: "RPA",
      descripcion: "Bots inteligentes para automatizar tareas repetitivas, extracción masiva de datos y reducción de costos operativos.",
      imagen: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
      precioBase: 800,
      stack: ["Python / Node Bots", "OCR Inteligente", "Web Scraping", "Webhooks"],
      entregables: ["Mapeo de procesos operativos", "Bot desatendido 24/7", "Reportes automáticos en Excel/PDF", "Panel de monitoreo y alertas"]
    },
    {
      id: 4,
      titulo: "Ciberseguridad Zero-Trust & Auditoría",
      categoria: "Seguridad",
      cotizadorKey: "Backend",
      descripcion: "Implementación de políticas de acceso estricto, encriptación avanzada y análisis preventivo de vulnerabilidades.",
      imagen: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      precioBase: 1100,
      stack: ["Zero-Trust", "OAuth 2.0", "TLS 1.3", "OWASP Top 10"],
      entregables: ["Informe ejecutivo de vulnerabilidades", "Hardening de servidores y APIs", "Políticas de control de acceso", "Plan de respuesta a incidentes"]
    }
  ]);

  const empresasAliadas = [
    { nombre: "Grupo Éxito", logo: "🛒" },
    { nombre: "Bancolombia", logo: "🏦" },
    { nombre: "Ecopetrol", logo: "⚡" },
    { nombre: "Procafecol (Juan Valdez)", logo: "☕" },
    { nombre: "Grupo Nutresa", logo: "🍲" },
    { nombre: "Avianca", logo: "✈️" },
    { nombre: "Grupo Argos", logo: "🏗️" },
    { nombre: "Sura", logo: "🛡️" },
    { nombre: "Rappi", logo: "🛵" },
    { nombre: "Mercado Libre", logo: "🤝" },
    { nombre: "Bavaria", logo: "🍺" },
    { nombre: "Cementos Argos", logo: "🏢" },
    { nombre: "Tigo", logo: "📱" },
    { nombre: "Claro Colombia", logo: "🌐" },
    { nombre: "Davivienda", logo: "🏠" },
    { nombre: "ISA Intercolombia", logo: "🔌" },
    { nombre: "Alquería", logo: "🥛" },
    { nombre: "Postobón", logo: "🥤" }
  ];

  const metricas = [
    { valor: "+120", etiqueta: "Proyectos Desplegados" },
    { valor: "99.9%", etiqueta: "Uptime Garantizado (SLA)" },
    { valor: "-45%", etiqueta: "Reducción Tiempos RPA" },
    { valor: "+40", etiqueta: "Aliados Corporativos" }
  ];

  const testimonios = [
    {
      nombre: "Carlos Mendoza",
      cargo: "Director de Transformación Digital • Retail",
      texto: "La arquitectura en React y Node.js desarrollada por Orion Digital redujo nuestros tiempos de carga en un 60% y soportó sin caídas los picos de demanda comercial."
    },
    {
      nombre: "Valeria Restrepo",
      cargo: "Gerente de Operaciones • Logística Portuaria",
      texto: "Con los robots RPA implementados automatizamos la conciliación diaria de manifiestos y facturas, liberando más de 120 horas mensuales de trabajo operativo."
    },
    {
      nombre: "Andrés Felipe Gómez",
      cargo: "CISO • Sector Financiero",
      texto: "Su auditoría Zero-Trust nos permitió cerrar brechas críticas en nuestras APIs y alinear nuestra infraestructura a los estándares más exigentes del mercado."
    }
  ];

  const [busqueda, setBusqueda] = useState("");
  const [categoriaActual, setCategoriaActual] = useState("Todos");
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const [servicioCotizar, setServicioCotizar] = useState("Desarrollo Web");
  const [alcance, setAlcance] = useState("Básico");

  const [formEnviado, setFormEnviado] = useState(false);
  const [nombreForm, setNombreForm] = useState("");

  const [faqAbierta, setFaqAbierta] = useState(null);

  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([
    { remitente: "bot", texto: "¡Hola! 👋 Qué gusto saludarte. Soy Orion AI, tu asesor virtual. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [inputChat, setInputChat] = useState("");

  const procesarRespuestaIA = (mensajeTexto) => {
    const text = mensajeTexto.toLowerCase();

    if (text.includes("hola") || text.includes("buenas") || text.includes("saludos")) {
      return "¡Hola de nuevo! 😊 ¿Cómo va tu día? Estoy aquí para orientarte sobre desarrollo web en React, APIs en Node.js, automatización RPA o seguridad. ¿Qué te gustaría consultar?";
    }
    if (text.includes("gracias") || text.includes("muy amable")) {
      return "¡Con muchísimo gusto! 🌟 Es un placer para mí ayudarte. Si tienes alguna otra duda sobre nuestras soluciones o necesitas preparar algo más para tu proyecto, aquí estaré a tu entera disposición. ¡Mucho éxito!";
    }
    if (text.includes("precio") || text.includes("costo") || text.includes("cuanto") || text.includes("cotiz")) {
      return "¡Claro que sí! 💰 Nuestros precios base aproximados son: Desarrollo Web en React desde $1,200 USD, Backend en Node.js desde $950 USD y Bots RPA desde $800 USD. Usa nuestro Cotizador interactivo para personalizarlo.";
    }
    if (text.includes("react") || text.includes("web") || text.includes("frontend")) {
      return "¡Excelente elección! 🚀 Diseñamos interfaces web ultrarrápidas y responsivas usando React 18, Vite y componentes modulares optimizados.";
    }
    if (text.includes("node") || text.includes("backend") || text.includes("api")) {
      return "Construimos backends robustos y APIs RESTful seguras con Node.js, Express y MongoDB, garantizando alta disponibilidad.";
    }
    if (text.includes("rpa") || text.includes("bot") || text.includes("automatiz")) {
      return "¡Nuestros robots RPA automatizan tareas repetitivas 24/7 (como lectura de facturas y cruces en Excel), ahorrando hasta un 45% en costos operativos!";
    }
    if (text.includes("contacto") || text.includes("reunion") || text.includes("correo")) {
      return "¡Nos encantaría conversar contigo! 🤝 Escríbenos a contacto@oriondigitalpartners.com o usa el formulario al final de la página.";
    }
    if (text.includes("si") || text.includes("claro") || text.includes("ok") || text.includes("por favor") || text.includes("dale")) {
      return "¡Excelente! 🌟 Por favor, baja hasta nuestra sección de Contacto Directo y llena el formulario con tus datos, o utiliza nuestro Cotizador Interactivo para calcular el presupuesto exacto de tu solución. ¡Un consultor senior te contactará de inmediato!";
    }

    return "¡Entendido perfectamente! 💡 Para avanzar con este requerimiento de forma personalizada, te sugiero revisar nuestras fichas técnicas en el catálogo de soluciones o enviarnos un mensaje directo a través del formulario de contacto.";
  };

  const enviarMensajeChat = (e) => {
    e.preventDefault();
    if (!inputChat.trim()) return;
    const textoUsuario = inputChat;
    setMensajes(prev => [...prev, { remitente: "user", texto: textoUsuario }]);
    setInputChat("");
    setTimeout(() => {
      const respuestaIA = procesarRespuestaIA(textoUsuario);
      setMensajes(prev => [...prev, { remitente: "bot", texto: respuestaIA }]);
    }, 500);
  };

  const calcularEstimado = () => {
    let base = servicioCotizar === "Desarrollo Web" ? 1200 : servicioCotizar === "Backend" ? 950 : 800;
    let multAlcance = alcance === "Básico" ? 1 : alcance === "Intermedio" ? 1.4 : 1.8;
    return Math.round(base * multAlcance);
  };

  const serviciosFiltrados = servicios.filter(s => {
    const coincideCat = categoriaActual === "Todos" || s.categoria === categoriaActual;
    const coincideQuery = s.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          s.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCat && coincideQuery;
  });

  const faqs = [
    {
      q: "¿En cuánto tiempo entregan un proyecto de desarrollo web o software?",
      a: "Un MVP básico se entrega típicamente en 2 a 3 semanas. Proyectos corporativos o arquitecturas complejas MERN toman de 4 a 8 semanas según el alcance."
    },
    {
      q: "¿Brindan soporte y mantenimiento técnico tras el lanzamiento?",
      a: "Sí, todos nuestros desarrollos incluyen 30 días de garantía post-entrega y planes opcionales de soporte 24/7 y mantenimiento continuo."
    },
    {
      q: "¿Cómo garantizan la seguridad de los datos de nuestra empresa?",
      a: "Aplicamos protocolos de Ciberseguridad Zero-Trust, cifrado de extremo a extremo y buenas prácticas alineadas a estándares ISO 27001."
    }
  ];

  const cotizarDesdeModal = (servicio) => {
    setServicioCotizar(servicio.cotizadorKey);
    setServicioSeleccionado(null);
    const el = document.getElementById("cotizador");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#0b0f19', color: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      
      <style>{`
        @keyframes deslizarEmpresas {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carrusel-track {
          display: flex;
          width: max-content;
          animation: deslizarEmpresas 35s linear infinite;
        }
        .carrusel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 8%', backgroundColor: '#111827', borderBottom: '1px solid #1f2937', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🛰️</span>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.5px' }}>
            Orion <span style={{ color: '#38bdf8' }}>Digital Partners</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '1.6rem', fontSize: '0.95rem', fontWeight: '600', flexWrap: 'wrap' }}>
          <a href="#soluciones" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Soluciones</a>
          <a href="#nosotros" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Nosotros</a>
          <a href="#cotizador" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cotizador</a>
          <a href="#testimonios" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Clientes</a>
          <a href="#faq" style={{ color: '#cbd5e1', textDecoration: 'none' }}>FAQ</a>
          <a href="#contacto" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contacto</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', padding: '5rem 1rem 3rem 1rem', maxWidth: '950px', margin: '0 auto' }}>
        <span style={{ backgroundColor: '#1e293b', color: '#38bdf8', padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', border: '1px solid #0284c7' }}>
          🚀 CONSULTORÍA Y DESARROLLO FULLSTACK MERN
        </span>
        <h1 style={{ fontSize: '3.2rem', fontWeight: '900', marginTop: '1.5rem', lineHeight: '1.2', color: '#ffffff' }}>
          Soluciones Tecnológicas e Inteligencia Digital a Medida
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.15rem', marginTop: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '1.2rem auto 0 auto' }}>
          Impulsamos la transformación digital corporativa mediante arquitecturas web escalables en React, automatización robótica de procesos (RPA) y ciberseguridad avanzada.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.2rem', marginTop: '3rem' }}>
          {metricas.map((m, idx) => (
            <div key={idx} style={{ backgroundColor: '#111827', padding: '1.3rem 1rem', borderRadius: '10px', border: '1px solid #1f2937' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: '#38bdf8' }}>{m.valor}</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: '600', marginTop: '0.3rem' }}>{m.etiqueta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BARRA DE TECNOLOGÍAS */}
      <div style={{ backgroundColor: '#1e293b', padding: '1.2rem', borderTop: '1px solid #334155', borderBottom: '1px solid #334155' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', color: '#38bdf8', fontWeight: '800', fontSize: '0.95rem', letterSpacing: '1px' }}>
          <span>REACT 18</span> • <span>NODE.JS</span> • <span>EXPRESS</span> • <span>MONGODB</span> • <span>ROBOTS RPA</span> • <span>ZERO-TRUST</span>
        </div>
      </div>

      {/* CARRUSEL INFINITO */}
      <section style={{ backgroundColor: '#0f172a', padding: '2.5rem 0', borderBottom: '1px solid #1f2937', marginBottom: '4rem', overflow: 'hidden' }}>
        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
          Empresas líderes que confían en nuestras soluciones
        </p>
        
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          <div className="carrusel-track">
            {[...empresasAliadas, ...empresasAliadas].map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '0.75rem 1.5rem', 
                  margin: '0 0.8rem', 
                  backgroundColor: '#1e293b', 
                  borderRadius: '10px', 
                  border: '1px solid #334155', 
                  color: '#e2e8f0', 
                  fontWeight: '700', 
                  fontSize: '0.95rem',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{item.logo}</span>
                <span>{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE SERVICIOS */}
      <section id="soluciones" style={{ maxWidth: '1150px', margin: '0 auto', padding: '0 1.5rem 4rem 1.5rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#ffffff', marginBottom: '1.8rem' }}>Catálogo de Soluciones</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <input 
            type="text" 
            placeholder="🔍 Buscar tecnología o servicio (ej. React, Node, RPA, Seguridad)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ padding: '0.9rem 1.2rem', borderRadius: '8px', border: '2px solid #334155', backgroundColor: '#1e293b', color: '#ffffff', fontSize: '1rem', outline: 'none' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {["Todos", "Desarrollo", "Automatización", "Seguridad"].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaActual(cat)}
                style={{
                  padding: '0.6rem 1.3rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: categoriaActual === cat ? '#0284c7' : '#1e293b',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  boxShadow: categoriaActual === cat ? '0 0 12px rgba(2, 132, 199, 0.5)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
          {serviciosFiltrados.map(s => (
            <div key={s.id} style={{ backgroundColor: '#111827', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1f2937', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column' }}>
              <img src={s.imagen} alt={s.titulo} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', backgroundColor: '#0284c7', color: '#ffffff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: '800', textTransform: 'uppercase' }}>
                    {s.categoria}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', margin: '0.8rem 0 0.5rem 0', color: '#ffffff', fontWeight: '700' }}>{s.titulo}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5' }}>{s.descripcion}</p>
                </div>
                <button
                  onClick={() => setServicioSeleccionado(s)}
                  style={{ marginTop: '1.2rem', width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid #0284c7', backgroundColor: '#0f172a', color: '#38bdf8', fontWeight: '700', fontSize: '0.88rem', cursor: 'pointer' }}
                >
                  Ver ficha técnica →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DE FICHA TÉCNICA */}
      {servicioSeleccionado && (
        <div
          onClick={() => setServicioSeleccionado(null)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.78)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#111827', borderRadius: '14px', border: '1px solid #334155', maxWidth: '540px', width: '100%', padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#0284c7', color: '#ffffff', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: '800', textTransform: 'uppercase' }}>
                  {servicioSeleccionado.categoria}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.4rem', margin: '0.7rem 0 0 0' }}>{servicioSeleccionado.titulo}</h3>
              </div>
              <button onClick={() => setServicioSeleccionado(null)} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.4rem', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '1rem' }}>{servicioSeleccionado.descripcion}</p>

            <div style={{ marginTop: '1.2rem' }}>
              <strong style={{ color: '#38bdf8', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>Stack Tecnológico:</strong>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {servicioSeleccionado.stack.map((tech, idx) => (
                  <span key={idx} style={{ backgroundColor: '#1e293b', color: '#e2e8f0', padding: '0.3rem 0.7rem', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #334155', fontWeight: '600' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.3rem' }}>
              <strong style={{ color: '#38bdf8', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>Entregables Incluidos:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.7' }}>
                {servicioSeleccionado.entregables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.8rem', paddingTop: '1.2rem', borderTop: '1px solid #1f2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Inversión desde</span>
                <strong style={{ fontSize: '1.4rem', color: '#38bdf8' }}>${servicioSeleccionado.precioBase} USD</strong>
              </div>
              <button
                onClick={() => cotizarDesdeModal(servicioSeleccionado)}
                style={{ padding: '0.75rem 1.4rem', borderRadius: '8px', border: 'none', backgroundColor: '#0284c7', color: '#ffffff', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer' }}
              >
                Cotizar este servicio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POR QUÉ ELEGIRNOS */}
      <section id="nosotros" style={{ backgroundColor: '#111827', padding: '4rem 1.5rem', borderTop: '1px solid #1f2937', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '1rem' }}>¿Por qué Orion Digital Partners?</h2>
          <p style={{ color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            Combinamos excelencia técnica en el stack MERN con metodologías ágiles de consultoría orientadas a resultados de negocio.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.8rem' }}>⚡</span>
              <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginTop: 0 }}>Desarrollo Ágil & Escalable</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Entregas continuas mediante entregables funcionales en sprints quincenales, manteniendo el control total del proyecto.</p>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.8rem' }}>🛡️</span>
              <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginTop: 0 }}>Garantía & SLAs 99.9%</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Infraestructura en la nube con alta disponibilidad, redundancia de bases de datos y monitoreo proactivo en tiempo real.</p>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.8rem' }}>💼</span>
              <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginTop: 0 }}>Consultoría de Impacto</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>No solo escribimos código; analizamos el ROI y la eficiencia operativa de cada módulo antes de su implementación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section id="cotizador" style={{ padding: '4rem 1.5rem', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#ffffff' }}>Cotizador Interactivo de Proyectos</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1rem' }}>Selecciona los parámetros de tu requerimiento para calcular una estimación inmediata en USD.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', textAlign: 'left', backgroundColor: '#1e293b', padding: '1.8rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff', fontWeight: '700', marginBottom: '0.5rem' }}>Servicio Requerido</label>
              <select value={servicioCotizar} onChange={(e) => setServicioCotizar(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', backgroundColor: '#0f172a', color: '#ffffff', border: '1px solid #334155', fontSize: '0.95rem', outline: 'none' }}>
                <option value="Desarrollo Web">Desarrollo Web / React</option>
                <option value="Backend">Backend / APIs Node.js</option>
                <option value="RPA">Automatización RPA</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff', fontWeight: '700', marginBottom: '0.5rem' }}>Alcance del Proyecto</label>
              <select value={alcance} onChange={(e) => setAlcance(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', backgroundColor: '#0f172a', color: '#ffffff', border: '1px solid #334155', fontSize: '0.95rem', outline: 'none' }}>
                <option value="Básico">Básico (MVP / Funcional)</option>
                <option value="Intermedio">Intermedio (Corporativo)</option>
                <option value="Avanzado">Avanzado (Enterprise)</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.2rem', backgroundColor: '#0f172a', borderRadius: '10px', border: '2px solid #0284c7' }}>
            <span style={{ fontSize: '1rem', color: '#cbd5e1', fontWeight: '600' }}>Inversión Estimada: </span>
            <strong style={{ fontSize: '2.2rem', color: '#38bdf8', marginLeft: '0.8rem' }}>${calcularEstimado()} USD</strong>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" style={{ backgroundColor: '#0f172a', padding: '4rem 1.5rem', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#ffffff', marginBottom: '0.8rem' }}>Casos de Éxito y Testimonios</h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', maxWidth: '650px', margin: '0 auto 2.8rem auto' }}>
            Lo que dicen los líderes tecnológicos sobre nuestras implementaciones de software y automatización.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
            {testimonios.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: '#111827', padding: '2rem', borderRadius: '12px', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', margin: '0 0 1.5rem 0' }}>
                  "{t.texto}"
                </p>
                <div style={{ borderTop: '1px solid #1f2937', paddingTop: '1rem' }}>
                  <strong style={{ color: '#38bdf8', display: 'block', fontSize: '1rem' }}>{t.nombre}</strong>
                  <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{t.cargo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" style={{ backgroundColor: '#111827', padding: '4rem 1.5rem', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#ffffff', marginBottom: '2rem' }}>Preguntas Frecuentes</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', overflow: 'hidden' }}>
                <button 
                  onClick={() => setFaqAbierta(faqAbierta === index ? null : index)}
                  style={{ width: '100%', padding: '1.2rem', backgroundColor: 'transparent', border: 'none', color: '#ffffff', textAlign: 'left', fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: '#38bdf8', fontSize: '1.2rem' }}>{faqAbierta === index ? '▲' : '▼'}</span>
                </button>
                {faqAbierta === index && (
                  <div style={{ padding: '0 1.2rem 1.2rem 1.2rem', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', borderTop: '1px solid #334155', paddingTop: '0.8rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ maxWidth: '1000px', margin: '4rem auto 4rem auto', padding: '0 1.5rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#ffffff', marginBottom: '2.5rem' }}>Contacto Directo</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          
          <div style={{ backgroundColor: '#111827', padding: '2rem', borderRadius: '12px', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h3 style={{ color: '#38bdf8', fontSize: '1.3rem', margin: 0 }}>Información Corporativa</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Estamos listos para evaluar tus necesidades tecnológicas y diseñar la mejor arquitectura para tu negocio.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📍</span>
              <span><strong>Ubicación:</strong> Cartagena, Bolívar, Colombia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <span style={{ fontSize: '1.2rem' }}>✉️</span>
              <span><strong>Correo:</strong> contacto@oriondigitalpartners.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📞</span>
              <span><strong>Teléfono / WhatsApp:</strong> +57 (300) 123-4567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🕒</span>
              <span><strong>Atención:</strong> Lunes a Viernes (8:00 AM - 6:00 PM EST)</span>
            </div>
          </div>

          <div>
            {formEnviado ? (
              <div style={{ textAlign: 'center', backgroundColor: '#1e293b', padding: '2.5rem', borderRadius: '12px', border: '1px solid #0284c7', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '0.5rem' }}>¡Gracias, {nombreForm}!</h3>
                <p style={{ color: '#cbd5e1' }}>Tu solicitud ha sido registrada con éxito. Un consultor senior de Orion Digital se comunicará contigo en breve.</p>
                <button onClick={() => setFormEnviado(false)} style={{ marginTop: '1.2rem', padding: '0.6rem 1.2rem', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={(e) => { 
                e.preventDefault(); 
                if(!nombreForm) setNombreForm("Estimado cliente");
                setFormEnviado(true); 
              }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <input 
                  type="text" 
                  placeholder="Tu Nombre Completo" 
                  required 
                  onChange={(e) => setNombreForm(e.target.value)}
                  style={{ padding: '0.9rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }} 
                />
                <input type="email" placeholder="Tu Correo Electrónico" required style={{ padding: '0.9rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }} />
                <textarea rows="4" placeholder="Describe brevemente las necesidades de tu proyecto tecnológico..." required style={{ padding: '0.9rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}></textarea>
                <button type="submit" style={{ padding: '0.9rem', borderRadius: '6px', border: 'none', backgroundColor: '#0284c7', color: '#ffffff', fontWeight: '800', cursor: 'pointer', fontSize: '1rem' }}>Enviar Solicitud Corporativa</button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#111827', borderTop: '1px solid #1f2937', padding: '3.5rem 1.5rem 2rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.6rem' }}>🛰️</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#ffffff' }}>Orion <span style={{ color: '#38bdf8' }}>Digital Partners</span></h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ingeniería de Software & Transformación Digital</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1e293b', padding: '0.5rem 0.9rem', borderRadius: '8px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #334155' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#38bdf8"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                <span>@oriondigital</span>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1e293b', padding: '0.5rem 0.9rem', borderRadius: '8px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #334155' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                <span>/orion-digital-dev</span>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1e293b', padding: '0.5rem 0.9rem', borderRadius: '8px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #334155' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#38bdf8"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@OrionDigital</span>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1e293b', padding: '0.5rem 0.9rem', borderRadius: '8px', color: '#ffffff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #334155' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#e1306c"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>@orion.digital.partners</span>
              </a>

            </div>

          </div>

          <div style={{ borderTop: '1px solid #1f2937', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#6b7280', fontSize: '0.85rem' }}>
            <span>© 2026 Orion Digital Partners. Todos los derechos reservados.</span>
            <span>Desarrollado con React 18 & Vite</span>
          </div>

        </div>
      </footer>

      {/* CHATBOT INTELIGENTE FLOTANTE */}
      <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
        {!chatAbierto ? (
          <button 
            onClick={() => setChatAbierto(true)}
            style={{ width: '65px', height: '65px', borderRadius: '50%', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', fontSize: '1.8rem', cursor: 'pointer', boxShadow: '0 4px 20px rgba(2, 132, 199, 0.6)' }}
          >
            💬
          </button>
        ) : (
          <div style={{ width: '350px', height: '460px', backgroundColor: '#111827', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0,0,0,0.7)' }}>
            
            <div style={{ padding: '1rem', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '0.95rem', color: '#ffffff', display: 'block' }}>Orion AI Assistant</strong>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8' }}>● En línea | Asesoría Digital</span>
              </div>
              <button onClick={() => setChatAbierto(false)} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>✕</button>
            </div>
            
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: '#0b0f19' }}>
              {mensajes.map((m, index) => (
                <div 
                  key={index} 
                  style={{ 
                    alignSelf: m.remitente === 'user' ? 'flex-end' : 'flex-start', 
                    backgroundColor: m.remitente === 'user' ? '#0284c7' : '#1e293b', 
                    color: '#ffffff', 
                    padding: '0.7rem 1rem', 
                    borderRadius: '10px', 
                    maxWidth: '82%', 
                    fontSize: '0.88rem',
                    lineHeight: '1.4'
                  }}
                >
                  {m.texto}
                </div>
              ))}
            </div>

            <div style={{ padding: '0.4rem 0.6rem', backgroundColor: '#1e293b', borderTop: '1px solid #334155', display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
              {["Precios", "React", "Node.js", "RPA"].map(sug => (
                <button 
                  key={sug}
                  onClick={() => setInputChat(sug)}
                  style={{ padding: '0.3rem 0.6rem', backgroundColor: '#0f172a', border: '1px solid #334155', color: '#38bdf8', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  {sug}
                </button>
              ))}
            </div>

            <form onSubmit={enviarMensajeChat} style={{ display: 'flex', borderTop: '1px solid #334155' }}>
              <input 
                type="text" 
                placeholder="Pregunta sobre precios, React, RPA..."
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                style={{ flex: 1, padding: '0.8rem', border: 'none', backgroundColor: '#111827', color: '#ffffff', fontSize: '0.88rem', outline: 'none' }}
              />
              <button type="submit" style={{ padding: '0.8rem 1.2rem', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>➔</button>
            </form>
          </div>
        )}
      </div>

    </div>
  );
}