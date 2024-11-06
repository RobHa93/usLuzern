export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7 font-serif">
          Immer auf dem neusten Stand bleiben? <br />
          Mit dem Newsletter erhalten Sie alle Updates.
        </h2>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email Adresse
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email Adresse eingeben ..."
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm font-sans"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-[#1E6EB4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1C63A3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E6EB4] font-sans"
            >
              Senden
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-900 font-sans">
            Datenschutz ist uns wichtig. Lesen Sie unsere{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Datenschutz&nbsp;Richtlinien
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
