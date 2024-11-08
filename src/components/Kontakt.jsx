import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Example() {
  return (
    <div className="relative isolate bg-white overflow-hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-3 gap-x-8 px-6 lg:px-8">
        
        {/* Linkes Feld */}
        <div className="relative lg:col-span-1 px-6 pb-20 pt-24 sm:pt-32 lg:static lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl font-serif">
              Kontakt aufnehmen
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 font-sans">
              Wir sind hier, um dir bei Fragen zu unseren Produkten und unserem Service zu helfen. Kontaktiere uns gern für mehr Informationen oder Anfragen zu usLuzern.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-700 font-sans">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Adresse</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-600" />
                </dt>
                <dd>
                  Hertensteinstrasse 124
                  <br />
                  6353 Weggis, Luzern
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefonnummer</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-600" />
                </dt>
                <dd>
                  <a href="tel:+41 78 845 39 66" className="hover:text-black">
                    +41 78 845 39 66
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">E-Mail</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-600" />
                </dt>
                <dd>
                  <a href="mailto:kontakt@usluzern.ch" className="hover:text-black">
                    kontakt@usluzern.ch
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Rechtes Feld (Formular) */}
        <form action="#" method="POST" className="lg:col-span-2 px-6 pb-24 pt-20 sm:pb-32 lg:py-48">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-black font-serif">
                  Vorname
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm font-sans"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-black font-serif">
                  Nachname
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm font-sans"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-black font-serif">
                  E-Mail
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm font-sans"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-black font-serif">
                  Telefonnummer
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm font-sans"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-black font-serif">
                  Nachricht
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm font-sans"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
            <button
  type="submit"
  className="rounded-md bg-[#1E6EB4] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#1B61A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E6EB4] font-sans"
>
                Nachricht senden
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
