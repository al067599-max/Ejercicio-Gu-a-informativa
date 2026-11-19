// Función generadora de arte visual/emblema SVG exclusivo para cada banda
// (Garantiza que cada banda tenga su propia identidad gráfica y logo sin depender de enlaces externos rotos)
function generateBandArtSVG(title, subtitle, styleType) {
  if (styleType === "blade") {
    return `
      <svg viewBox="0 0 600 260" class="w-full h-full object-cover bg-[#09090b]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g-blade" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stop-color="#27272a"/>
            <stop offset="100%" stop-color="#09090b"/>
          </radialGradient>
        </defs>
        <rect width="600" height="260" fill="url(#g-blade)"/>
        <line x1="60" y1="130" x2="540" y2="130" stroke="#3f3f46" stroke-width="1"/>
        <line x1="300" y1="25" x2="300" y2="235" stroke="#27272a" stroke-width="1"/>
        <polygon points="300,32 308,130 300,228 292,130" fill="#52525b" opacity="0.35"/>
        <text x="300" y="138" text-anchor="middle" fill="#f4f4f5" font-family="'UnifrakturMaguntia', serif" font-size="48" letter-spacing="2">${title}</text>
        <text x="300" y="172" text-anchor="middle" fill="#a1a1aa" font-family="'IBM Plex Mono', monospace" font-size="11" letter-spacing="4">${subtitle}</text>
      </svg>
    `;
  }

  if (styleType === "decalius") {
    return `
      <svg viewBox="0 0 600 260" class="w-full h-full object-cover bg-[#0c0c0e]" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="260" fill="#0c0c0e"/>
        <rect x="24" y="24" width="552" height="212" fill="none" stroke="#27272a" stroke-width="1"/>
        <text x="300" y="135" text-anchor="middle" fill="#f4f4f5" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="46" letter-spacing="14">${title.toUpperCase()}</text>
        <line x1="170" y1="154" x2="430" y2="154" stroke="#52525b" stroke-width="1"/>
        <text x="300" y="178" text-anchor="middle" fill="#a1a1aa" font-family="'IBM Plex Mono', monospace" font-size="11" letter-spacing="3">${subtitle}</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 600 260" class="w-full h-full object-cover bg-[#08080a]" xmlns="http://www.w3.org/2000/svg">
      <circle cx="300" cy="130" r="88" fill="none" stroke="#27272a" stroke-width="1.5"/>
      <circle cx="300" cy="130" r="68" fill="none" stroke="#3f3f46" stroke-width="0.8" stroke-dasharray="4 4"/>
      <text x="300" y="140" text-anchor="middle" fill="#f4f4f5" font-family="'UnifrakturMaguntia', serif" font-size="52" letter-spacing="3">${title}</text>
      <text x="300" y="175" text-anchor="middle" fill="#a1a1aa" font-family="'IBM Plex Mono', monospace" font-size="11" letter-spacing="4">${subtitle}</text>
    </svg>
  `;
}

// Datos de los 3 Pilares Principales
const bands = {
  blade: {
    name: "Blade and Bath",
    fontClass: "font-gothic text-4xl sm:text-5xl",
    origin: "Ucrania / Europa del Este",
    members: "Proyecto solista (One-man band)",
    style: "Melodic DSBM / Atmospheric",
    artType: "blade",
    artSubtitle: "EUPHORIA OF SELF-DESTRUCTION",
    summary: "Uno de los proyectos clave de la nueva generación europea. Equilibra la frialdad del Black Metal del este con arpegios limpios muy cuidados que construyen tensión progresivamente.",
    soundNotes: "Introducciones limpias bañadas en reverb y chorus, seguidas de trémolos melódicos sobre una batería pausada de medio tiempo.",
    curiosity: "Sus temas suelen estructurarse como piezas instrumentales extendidas donde la melodía principal de guitarra lleva todo el peso narrativo.",
    tracks: [
      { name: "Euphoria of Self-Destruction", note: "Álbum esencial para entrar en su sonido." },
      { name: "Rotten", note: "Contraste marcado entre pasajes limpios y distorsión." },
      { name: "Cold Concrete & Fade", note: "Corte minimalista de corte nocturno." }
    ],
    metrics: [
      { k: "Atmósfera", v: "95%" },
      { k: "Melodía", v: "94%" },
      { k: "Accesibilidad", v: "90%" },
      { k: "Crudeza Lo-Fi", v: "65%" }
    ]
  },
  decalius: {
    name: "Decalius",
    fontClass: "font-serif text-3xl sm:text-5xl font-bold tracking-widest uppercase",
    origin: "Brasil",
    members: "Proyecto solista (One-man band)",
    style: "Grunge-Infused DSBM / Post-Rock",
    artType: "decalius",
    artSubtitle: "DEHUMANIZING LONELINESS",
    summary: "Proyecto unipersonal brasileño que conectó el DSBM con el grunge y el rock alternativo de los 90. Es la puerta de entrada más natural para oyentes nuevos.",
    soundNotes: "Acordes abiertos, rasgueos limpios estilo grunge, solos de guitarra muy expresivos con bends largos y una voz cruda puesta al frente de la mezcla.",
    curiosity: "Fue uno de los primeros proyectos en popularizar solos de guitarra melódicos estilo rock alternativo dentro del DSBM contemporáneo.",
    tracks: [
      { name: "Dehumanizing Loneliness", note: "Referencia indispensable del DSBM actual." },
      { name: "Hated by Life Itself", note: "Destaca por sus solos de guitarra emotivos." },
      { name: "Excluded from Humanity", note: "Faceta más cruda y lo-fi del proyecto." }
    ],
    metrics: [
      { k: "Atmósfera", v: "84%" },
      { k: "Melodía", v: "98%" },
      { k: "Accesibilidad", v: "96%" },
      { k: "Crudeza Lo-Fi", v: "78%" }
    ]
  },
  sukkubys: {
    name: "Sukkubys",
    fontClass: "font-gothic text-4xl sm:text-5xl",
    origin: "Escena Underground Internacional",
    members: "Proyecto independiente",
    style: "Nocturnal / Atmospheric DSBM",
    artType: "sukkubys",
    artSubtitle: "ETERNAL SOLITUDE",
    summary: "Representa el lado más nocturno e hipnótico de esta tríada. Su propuesta gira en torno a muros de sonido envolventes y una estética gótica minimalista.",
    soundNotes: "Voces sumergidas dentro de la mezcla con reverberación larga y progresiones circulares pensadas para escucha nocturna continua.",
    curiosity: "Su mezcla prioriza el ambiente general sobre los instrumentos individuales, logrando un efecto inmersivo cercano al shoegaze oscuro.",
    tracks: [
      { name: "Eternal Solitude", note: "Define su firma sonora y ambiental." },
      { name: "Fading Memories", note: "Equilibrio entre melancolía ambiental y riffing." },
      { name: "Nocturnal Reflections", note: "Enfoque inmersivo sin cortes bruscos." }
    ],
    metrics: [
      { k: "Atmósfera", v: "97%" },
      { k: "Melodía", v: "88%" },
      { k: "Accesibilidad", v: "82%" },
      { k: "Crudeza Lo-Fi", v: "80%" }
    ]
  }
};

// Catálogo ampliado de 9 bandas (incluyendo los 3 pilares + clásicas + post-dsbm)
const directoryBands = [
  {
    name: "Blade and Bath",
    country: "Ucrania",
    category: "nueva-ola",
    tag: "Nueva Ola",
    album: "Euphoria of Self-Destruction",
    desc: "Melancolía invernal con arpegios limpios y producción atmosférica."
  },
  {
    name: "Decalius",
    country: "Brasil",
    category: "nueva-ola",
    tag: "Nueva Ola",
    album: "Dehumanizing Loneliness",
    desc: "Fusión de DSBM con acordes grunge de los 90 y solos expresivos."
  },
  {
    name: "Sukkubys",
    country: "Internacional",
    category: "nueva-ola",
    tag: "Nueva Ola",
    album: "Eternal Solitude",
    desc: "Sonido nocturno sumergido en reverb y estética gótica."
  },
  {
    name: "Lifelover",
    country: "Suecia",
    category: "post-dsbm",
    tag: "Post-DSBM",
    album: "Pulver (2006)",
    desc: "Pioneros en mezclar post-punk sueco, piano y melancolía urbana."
  },
  {
    name: "Psychonaut 4",
    country: "Georgia",
    category: "post-dsbm",
    tag: "Post-DSBM",
    album: "Dipsomania (2015)",
    desc: "Dinámicas intensas, líneas de bajo marcadas y gran carga emocional."
  },
  {
    name: "Apati",
    country: "Suecia",
    category: "post-dsbm",
    tag: "Post-DSBM",
    album: "Eufori (2009)",
    desc: "Enfoque minimalista y nostálgico con influencia de rock depresivo."
  },
  {
    name: "Xasthur",
    country: "Estados Unidos",
    category: "clasico",
    tag: "Clásico",
    album: "Telepathic with the Deceased",
    desc: "Proyecto solista de Scott Conner; referente absoluto del DSBM ambiental."
  },
  {
    name: "Thy Light",
    country: "Brasil",
    category: "clasico",
    tag: "Clásico",
    album: "Suici.De.pression (2007)",
    desc: "Combina piano clásico melancólico con guitarras atmosféricas extensas."
  },
  {
    name: "Austere",
    country: "Australia",
    category: "clasico",
    tag: "Clásico",
    album: "To Lay Like Old Ashes (2009)",
    desc: "DSBM atmosférico de gran escala con voces agudas y pasajes épicos."
  }
];

// Cargar las miniaturas SVG en las 3 tarjetas superiores
function initCardArts() {
  document.getElementById("card-art-blade").innerHTML = generateBandArtSVG("Blade and Bath", "UCRANIA // MELODIC DSBM", "blade");
  document.getElementById("card-art-decalius").innerHTML = generateBandArtSVG("DECALIUS", "BRASIL // GRUNGE-DSBM", "decalius");
  document.getElementById("card-art-sukkubys").innerHTML = generateBandArtSVG("Sukkubys", "NOCTURNAL ATMOSPHERIC", "sukkubys");
}

// Mostrar ficha de la banda seleccionada
function setBand(key) {
  ["blade", "decalius", "sukkubys"].forEach((id) => {
    const el = document.getElementById(`tab-${id}`);
    if (id === key) {
      el.className = "photo-box text-left border border-zinc-300 bg-zinc-900/80 p-4 transition cursor-pointer";
    } else {
      el.className = "photo-box text-left border border-zinc-800 bg-zinc-950 hover:border-zinc-600 p-4 transition cursor-pointer";
    }
  });

  const b = bands[key];
  const panel = document.getElementById("band-panel");
  const artSvg = generateBandArtSVG(b.name, b.artSubtitle, b.artType);

  panel.innerHTML = `
    <div class="grid lg:grid-cols-12">
      <div class="lg:col-span-5 relative min-h-[250px] border-b lg:border-b-0 lg:border-r border-zinc-800 bg-black flex flex-col justify-between">
        <div class="h-56 lg:h-full w-full overflow-hidden">
          ${artSvg}
        </div>
        <div class="p-4 border-t border-zinc-800 bg-zinc-950 font-mono text-[11px] text-zinc-400 flex justify-between">
          <span>${b.origin}</span>
          <span>${b.members}</span>
        </div>
      </div>

      <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-6 mb-6 border-b border-zinc-800 font-mono text-xs">
            ${b.metrics.map((m) => `
              <div>
                <span class="text-zinc-500 block text-[11px]">${m.k}</span>
                <span class="text-zinc-100 font-semibold">${m.v}</span>
              </div>
            `).join("")}
          </div>

          <p class="text-sm text-zinc-300 leading-relaxed">${b.summary}</p>
          <p class="text-sm text-zinc-400 leading-relaxed mt-3">
            <strong class="text-zinc-200 font-medium">Firma sonora:</strong> ${b.soundNotes}
          </p>
          <p class="text-xs font-mono text-zinc-400 mt-4 p-3 border border-zinc-800 bg-zinc-950">
            Dato clave: ${b.curiosity}
          </p>

          <div class="mt-6 pt-5 border-t border-zinc-800">
            <div class="font-mono text-xs text-zinc-500 mb-3">OBRAS RECOMENDADAS</div>
            <div class="space-y-2">
              ${b.tracks.map((t) => `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-zinc-900">
                  <span class="font-mono text-zinc-100 font-medium">${t.name}</span>
                  <span class="text-zinc-500">${t.note}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Renderizar directorio ampliado con filtros
function filterDirectory(category) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    if (btn.dataset.filter === category) {
      btn.className = "filter-btn px-3 py-1.5 bg-zinc-100 text-black font-medium cursor-pointer";
    } else {
      btn.className = "filter-btn px-3 py-1.5 border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer";
    }
  });

  const filtered = category === "all"
    ? directoryBands
    : directoryBands.filter((item) => item.category === category);

  const grid = document.getElementById("directory-grid");
  grid.innerHTML = filtered.map((band) => `
    <div class="border border-zinc-800 bg-zinc-950/70 p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-2">
          <span>${band.country}</span>
          <span class="border border-zinc-800 px-2 py-0.5 text-zinc-300">${band.tag}</span>
        </div>
        <h3 class="font-serif text-2xl font-bold text-zinc-100">${band.name}</h3>
        <p class="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">${band.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-zinc-800/80 font-mono text-xs text-zinc-300">
        Disco: <span class="text-zinc-400">${band.album}</span>
      </div>
    </div>
  `).join("");
}

// Probador tipográfico interactivo
function updateFonts(val) {
  const txt = val.trim() || "dsbm";
  document.getElementById("f-1").textContent = txt;
  document.getElementById("f-2").textContent = txt;
  document.getElementById("f-3").textContent = txt;
  document.getElementById("f-4").textContent = txt.toLowerCase();
}

// Menú móvil
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-nav").classList.toggle("hidden");
});

// Inicializar componentes al cargar
initCardArts();
setBand("blade");
filterDirectory("all");