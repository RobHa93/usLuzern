const companies = [
    {
      id: 1,
      name: 'Luzerner Genusswelt',
      href: '#',
      description:
        'Ein Paradies für Gourmets, die regionale Delikatessen aus Luzern entdecken möchten. Hier gibt es alles von handgemachten Schokoladen bis hin zu feinen Weinen und Käsevariationen.',
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      address: 'Marktplatz 5, 6003 Luzern',
    },
    {
      id: 2,
      name: 'Holzwerkstatt Luzern',
      href: '#',
      description:
        'Diese Werkstatt bietet maßgefertigte Holzmöbel und Dekoartikel aus regionalen Hölzern. Ideal für Menschen, die nachhaltige und handgefertigte Einrichtungsstücke suchen.',
      imageUrl:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      address: 'Industriestrasse 12, 6005 Luzern',
    },
    {
      id: 3,
      name: 'Blumenzauber Luzern',
      href: '#',
      description:
        'Ein Blumenladen, der auf saisonale und regionale Blumenarrangements spezialisiert ist. Perfekt für besondere Anlässe oder als Geschenk aus der Region.',
      imageUrl:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      address: 'Seestrasse 45, 6006 Luzern',
    },
    {
      id: 4,
      name: 'Textilkunst Luzern',
      href: '#',
      description:
        'Individuell gestaltete Kleidung und Textilien aus hochwertigen Materialien. Der Laden bietet alles von Schals bis zu handgefertigten Kleidungsstücken – einzigartig und lokal produziert.',
      imageUrl:
        '../src/assets//textilkunst.png',
      address: 'Altstadtgasse 8, 6004 Luzern',
    },
    {
      id: 5,
      name: 'Kunsthandwerk von Luzern',
      href: '#',
      description:
        'Galerie und Geschäft für handgefertigte Kunstwerke aus Luzern. Die perfekte Anlaufstelle für kunstvolle Geschenke und dekorative Einzelstücke.',
      imageUrl:
        '../src/assets//Kunsthandwerk.jpg',
      address: 'Künstlergasse 22, 6002 Luzern',
    },
    {
      id: 6,
      name: 'Naturkosmetik Luzern',
      href: '#',
      description:
        'Naturkosmetikprodukte aus regionalen Zutaten. Von Seifen über Cremes bis hin zu Körperpflegeprodukten – alles mit Rücksicht auf Umwelt und Nachhaltigkeit.',
      imageUrl:
        '../src/assets/Naturkosmetik.jpg',
      address: 'Hauptstrasse 31, 6003 Luzern',
    },
  ];
  
  export default function Example() {
    return (
      <div className=" pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-4xl mb-20 font-semibold tracking-tight text-gray-900 sm:text-5xl font-serif">
              Unsere Partnerfirmen
            </h2>
            <p className="mt-2 text-lg text-gray-600 font-sans">
              Entdecke lokale Unternehmen aus Luzern, die authentische und handgefertigte Produkte anbieten.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {companies.map((company) => (
                <article key={company.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt=""
                      src={company.imageUrl}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold text-gray-900 font-serif">
                        <a href={company.href}>
                          <span className="absolute inset-0" />
                          {company.name}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 font-sans">{company.description}</p>
                      <p className="mt-2 text-sm text-gray-500 font-sans">Adresse: {company.address}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }