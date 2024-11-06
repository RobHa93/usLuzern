import Zielgruppe1 from "../assets/BildZielgruppe1.jpg"
import Zielgruppe2 from "../assets/BildZielgruppe2.jpg"
import Zielgruppe3 from "../assets/BildZielgruppe3.jpg"

const posts = [
  {
    id: 1,
    title: 'Kunden aus Luzern und Umgebung',
    href: '#',
    description:
      'Menschen, die regionale Produkte und Nachhaltigkeit schätzen. Sie möchten lokale Erzeugnisse unterstützen und bevorzugen Qualität aus der Region.',
    imageUrl:
    Zielgruppe1,
  },
  {
    id: 2,
    title: 'Regionale Produzenten und Unternehmen',
    href: '#',
    description:
      'Kleine Betriebe und Händler, die ihre Produkte einem breiteren Publikum zugänglich machen wollen, ohne eigene Online-Strukturen aufbauen zu müssen.',
    imageUrl:
    Zielgruppe2,
  },
  {
    id: 3,
    title: 'Neuankömmlinge und Touristen',
    href: '#',
    description:
      'Für Menschen, die die Luzerner Kultur erleben möchten, und für Touristen, die lokale Produkte als Souvenir oder zum Wiederentdecken suchen.',
    imageUrl:
    Zielgruppe3,
  },
];

export default function Zielgruppe() {
  return (
    <div className="bg-white pb-7 sm:pb-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl font-serif">
            Unsere Zielgruppen
          </h2>
          <p className="mt-2 text-lg text-gray-600 font-sans">
            Bei usLuzern stehen die Menschen und die Region im Mittelpunkt. Entdecke, wen wir mit unseren Angeboten erreichen.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-8 text-lg font-semibold text-gray-900 font-serif">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm text-gray-600 font-sans">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
