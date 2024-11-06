const incentives = [
  {
      name: 'Kostenloser Versand',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-shipping-simple.svg',
      description:
          "Der Versand ist im Produktpreis enthalten – niemand zahlt extra dafür. So können unsere Produkte einfach und unkompliziert zu dir gelangen.",
  },
  {
      name: 'Qualitäts Test',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-simple.svg',
      description:
          "Alle unsere Produkte durchlaufen strenge Qualitätstests, um sicherzustellen, dass sie den höchsten Standards entsprechen. So kannst du dir sicher sein, langlebige und verlässliche Waren zu erhalten.",
  },
  {
      name: 'Umtauschmöglichkeiten',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
          "Falls dir das Produkt nicht gefällt, kannst du es an Freunde weitergeben oder gegen etwas anderes eintauschen. Direkt zurücknehmen können wir es allerdings nicht.",
  },
]

export default function Example() {
  return (
      <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
              <div className="mx-auto w-full px-4 lg:max-w-none">
                  <div className="w-full">
                      <h2 className="text-4xl mb-14 font-bold text-gray-900 text-center font-serif">
                          Wir setzen auf regionale Verbundenheit und Qualität
                      </h2>
                      <p className="mt-4 text-gray-500 font-sans">
                          Bei usLuzern steht die Förderung lokaler Produzenten im Mittelpunkt. Wir verbinden dich mit
                          einzigartigen Produkten direkt aus der Region, die sorgfältig geprüft und mit Leidenschaft
                          hergestellt wurden. Für uns bedeutet Kundenservice, dass jedes Produkt nicht nur überzeugt,
                          sondern auch eine Geschichte erzählt.
                      </p>
                  </div>
                  <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                      {incentives.map((incentive) => (
                          <div key={incentive.name} className="sm:flex lg:block">
                              <div className="sm:flex-shrink-0 m-a flex justify-center items-center">
                                  <img alt="" src={incentive.imageSrc} className="h-16 w-16" />
                              </div>

                              <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                  <h3 className="text-sm my-10 font-medium text-gray-900 font-serif">{incentive.name}</h3>
                                  <p className="mt-2 text-sm text-gray-500 font-sans">{incentive.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}
