import Textilkunst from "../assets/textilkunst.png"
import Kunsthandwerk from "../assets/Kunsthandwerk.jpg"
import Naturkosmetik from "../assets/Naturkosmetik.jpg"

const callouts = [
  {
    id: 1,
    name: 'Luzerner Genusswelt',
    href: '/shop-items',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    address: 'Marktplatz 5, 6003 Luzern',
  },
  {
    id: 2,
    name: 'Holzwerkstatt Luzern',
    href: '/shop-items',
    imageUrl:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    address: 'Industriestrasse 12, 6005 Luzern',
  },
  {
    id: 3,
    name: 'Blumenzauber Luzern',
    href: '/shop-items',
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    address: 'Seestrasse 45, 6006 Luzern',
  },
  {
    id: 4,
    name: 'Textilkunst Luzern',
    href: '/shop-items',
    imageUrl: Textilkunst,
    address: 'Altstadtgasse 8, 6004 Luzern',
  },
  {
    id: 5,
    name: 'Kunsthandwerk von Luzern',
    href: '/shop-items',
    imageUrl: Kunsthandwerk,
    address: 'Künstlergasse 22, 6002 Luzern',
  },
  {
    id: 6,
    name: 'Naturkosmetik Luzern',
    href: '/shop-items',
    imageUrl: Naturkosmetik,
    address: 'Hauptstrasse 31, 6003 Luzern',
  },
];

export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-20">Unsere Shop-Partner</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.id} className="group relative mb-20">
                {/* Bild verlinkt zur Shop-Items Seite */}
                <a href={callout.href} className="block relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                  <img
                    alt={callout.name}
                    src={callout.imageUrl}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 font-serif">
                  {callout.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 font-sans">{callout.address}</p>
                {/* "Mehr erfahren" verlinkt zur About-Seite */}
                <p className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                  <a href="/about-team">Mehr erfahren</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
