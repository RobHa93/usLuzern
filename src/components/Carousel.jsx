import { Carousel } from "@material-tailwind/react";

function CarouselSlider() {
  return (
    <Carousel className="rounded-xl sm:mt-20">
      <div className="relative lg:h-[400px] w-full sm:h-[200px]">
        <img
          src="src/assets/luzern1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white p-4">
          <h1 className="text-3xl font-bold font-serif">Einzigartige Produkte</h1>
          <p className="text-sm mt-2 font-sans">
            Entdecke einzigartige Produkte und lokale Schätze, handverlesen aus Luzern und der Region
          </p>
        </div>
      </div>

      <div className="relative lg:h-[400px] w-full sm:h-[200px]">
        <img
          src="src/assets/luzern2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white p-4">
          <h1 className="text-3xl font-bold font-serif">Regional. Authentisch. Persönlich</h1>
          <p className="text-sm mt-2 font-sans">
            Unsere Plattform verbindet lokale Hersteller und Kunden – für eine nachhaltige und authentische Kaufkultur.
          </p>
        </div>
      </div>

      <div className="relative lg:h-[400px] w-full sm:h-[200px]">
        <img
          src="src/assets/luzern3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white p-4">
          <h1 className="text-3xl font-bold font-serif">Unterstütze Luzern, kaufe lokal</h1>
          <p className="text-sm mt-2 font-sans">
            Gemeinsam fördern wir regionale Unternehmen und bieten dir exklusive Produkte direkt aus der Region.
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
