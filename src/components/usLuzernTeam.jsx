const people = [
  {
    name: 'Felix Berger',
    role: 'Frontend- und Backend-Entwickler',
    imageUrl:
      'src/assets/man_placeholder.jpg',
    description:
      'Felix betreut sowohl die Entwicklung der Benutzeroberfläche als auch die Serverarchitektur. Er sorgt dafür, dass alles im Hintergrund reibungslos läuft und die Seite ansprechend und funktional bleibt.',
  },
  {
    name: 'Sophia Anderson',
    role: 'UI/UX Designerin',
    imageUrl:
      'src/assets/woman_placeholder.jpg',
    description:
      'Sophia gestaltet das Design und optimiert die Benutzererfahrung, um eine einfache und intuitive Nutzung zu gewährleisten.',
  },
  {
    name: 'Margarete Bauer',
    role: 'Projektleiterin',
    imageUrl:
      'src/assets/woman_placeholder.jpg',
    description:
      'Mit ihrer langjährigen Erfahrung im Projektmanagement stellt Margarete sicher, dass alle Projekte effizient und kundenorientiert umgesetzt werden.',
  },
  {
    name: 'Laura Meier',
    role: 'Qualitätssicherung',
    imageUrl:
      'src/assets/woman_placeholder.jpg',
    description:
      'Laura überwacht die Qualität der Produkte und Prozesse, um sicherzustellen, dass alle Standards eingehalten und die Kundenerwartungen stets übertroffen werden.',
  },
  {
    name: 'Anna Schmidt',
    role: 'Administration',
    imageUrl:
      'src/assets/woman_placeholder.jpg',
    description:
      'Anna kümmert sich um die administrativen Abläufe und sorgt dafür, dass die täglichen Aufgaben reibungslos organisiert sind.',
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="relative bg-cover bg-center h-60 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-4xl font-semibold text-white font-serif">Team und Partner</h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl mt-10">
          <p className="text-lg text-gray-600 font-sans">
            Wir von usLuzern, sind ein engagiertes Team das sich für hochwertige, lokale Produkte einsetzt. Lerne die Menschen kennen, die hinter usLuzern stehen.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img alt="" src={person.imageUrl} className="aspect-[3/2] w-full rounded-2xl object-cover" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-gray-900 font-serif">{person.name}</h3>
              <p className="text-base text-gray-600 font-sans">{person.role}</p>
              <p className="mt-2 text-sm text-gray-500 font-sans">{person.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
