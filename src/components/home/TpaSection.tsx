import Image from "next/image";

export default function TpaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brandSaffron/10 text-brandSaffron text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-brandSaffron/20 mb-4">
            Cashless Facilities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brandBlue mb-4">
            Our Insurance Partners
          </h2>
          <div className="w-24 h-1 bg-brandSaffron mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We are empanelled with major health insurance providers and TPAs to offer seamless cashless treatments and superior healthcare experience.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 bg-white p-4 sm:p-8 hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.12)] transition-shadow duration-500">
          <Image
            src="/tpa.png"
            alt="TPA and Insurance Partners"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
