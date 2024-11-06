const products = [
  {
    id: 1,
    name: 'T-Shirts mit Tierlogo (2er Set)',
    href: '#',
    price: 'CHF 40',
    description: 'Bequeme T-Shirts mit einem einzigartigen Tierlogo, ideal für Tierliebhaber.',
    options: '2 Farben',
    imageSrc: 'src/assets/item1.jpg',
    imageAlt: 'T-Shirts mit Tierlogo.',
  },
  {
    id: 2,
    name: 'Stylischer Schal',
    href: '#',
    price: 'CHF 25',
    description: 'Ein modischer Schal, der jedes Outfit aufwertet.',
    options: 'Einheitsgröße',
    imageSrc: 'src/assets/item2.jpg',
    imageAlt: 'Stylischer Schal.',
  },
  {
    id: 3,
    name: 'Moderne Kissen (2er Set)',
    href: '#',
    price: 'CHF 50',
    description: 'Ein Set aus zwei modernen Kissen, perfekt für Ihr Zuhause.',
    options: 'Verschiedene Designs',
    imageSrc: 'src/assets/item3.jpg',
    imageAlt: 'Moderne Kissen.',
  },
  {
    id: 4,
    name: 'T-Shirt mit Nummernlogo (2er Set)',
    href: '#',
    price: 'CHF 38',
    description: 'Sportliche T-Shirts mit einem coolen Nummernlogo, ideal für Sportler.',
    options: '2 Farben',
    imageSrc: 'src/assets/item4.jpg',
    imageAlt: 'T-Shirts mit Nummernlogo.',
  },
  {
    id: 5,
    name: 'Geschenkset',
    href: '#',
    price: 'CHF 65',
    description: 'Ein liebevoll zusammengestelltes Geschenkset für jeden Anlass.',
    options: 'Inklusive Verpackung',
    imageSrc: 'src/assets/item5.jpg',
    imageAlt: 'Geschenkset.',
  },
  {
    id: 6,
    name: 'Schmuck Set komplett',
    href: '#',
    price: 'CHF 120',
    description: 'Ein komplettes Schmuckset, das jedes Outfit perfekt ergänzt.',
    options: 'Inklusive Ohrringe und Halskette',
    imageSrc: 'src/assets/item6.jpg',
    imageAlt: 'Schmuck Set.',
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Produkte</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900 font-serif">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 font-sans">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500 font-sans">{product.options}</p>
                  <p className="text-base font-medium text-gray-900 font-serif">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
