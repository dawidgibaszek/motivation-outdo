// src/config/site.ts
export const siteConfig = {
  name: "OUTDO.PL",
  tagline: "Inżynieria Twojego Sukcesu.",
  description: "Nie śledzimy tylko Twoich zadań. Projektujemy Twoją drogę na szczyt.",
  
  hero: {
    badge: "EDYCJA 2026",
    title: "PRZESTAŃ TYLKO\nISTNIEĆ. ZACZNIJ\nDOMINOWAĆ.",
    subtitle: "Aplikacja nowej generacji do samodoskonalenia z jednym, k*rwa, celem. Zwycięstwo. Walczymy z Twoim zwierzęcym mózgiem, żebyś Ty mógł wygrywać.",
    cta: { text: "DOŁĄCZ DO ELITY", href: "#join" },
    secondaryCta: { text: "ZOBACZ SYSTEM", href: "#system" },
  },
  
  system: {
    title: "SYSTEM WALKI Z LENISTWEM",
    features: [
      {
        id: "01",
        title: "Progresywne Przeciążenie",
        desc: "Wiemy, że jesteś leniwy. Zaprojektowaliśmy system, który wymusza postęp przy minimalnym wkładzie własnym na starcie."
      },
      {
        id: "02",
        title: "Produktywne Przekierowanie",
        desc: "Nie pracujesz 16 godzin dziennie. Robisz to, co musi zostać zrobione. Algorytmy AI mówią Ci dokładnie, co masz robić teraz."
      },
      {
        id: "03",
        title: "Manipulacyjny Design",
        desc: "OUTDO zmusza Cię do kończenia zadań, ponieważ jest zaprojektowane tak, aby stale walczyć z Twoimi instynktami."
      }
    ]
  },
  
  stats: [
    { value: "95%", label: "Skuteczności osób w pełni odpowiedzialnych" },
    { value: "40%", label: "Pracy marnuje się przez brak jasności" },
    { value: "76%", label: "Większa szansa na sukces przy goal-trackingu" }
  ],

  planner: {
    title: "DZISIEJSZY PROTOKÓŁ",
    placeholder: "Wpisz zadanie, którego się boisz...",
    motivation: [
      "Zrób to teraz, albo przestań marzyć.",
      "Twój rywal właśnie pracuje.",
      "Wygrywanie nie jest dla każdego. Jesteś każdym?",
      "Poczuj dyskomfort. To tam jest wzrost."
    ]
  },

  footer: {
    copyright: "© 2026 OUTDO.PL - PRACUJ ALBO WYPIERDALAJ.",
    links: [
      { text: "PRYWATNOŚĆ", href: "/privacy" },
      { text: "REGULAMIN", href: "/terms" },
      { text: "KONTAKT", href: "/contact" },
    ]
  }
}
