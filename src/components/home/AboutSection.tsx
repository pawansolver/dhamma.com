import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-section" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/surgeons-operating.png"
            alt="Surgery"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-brandBlue font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-3">
            ABOUT DHAMMA
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#0a1930] mb-6 leading-[1.2]">
            We Provide Finest Patient&apos;s Care &amp; Amenities
          </h2>
          <div className="text-gray-600 text-sm md:text-[15px] leading-[1.8] space-y-4 font-sans text-justify">
            <p>
              Dhamma Institute of Medical Science is going to be 340 bedded hospital and Teaching Institute that is situated near AIIMS, Patna.
            </p>
            <p>
              The objective of the Dhamma Institute of Medical Science, Patna is the establishment, maintenance and development of a teaching institute, where men and women shall receive an education of the highest grade in the art and science of medicine, nursing or one or other of the related professions, to equip them in the spirit of Christ, for service in the relief of suffering and in the promotion of health.
            </p>
            <p>
              Apart from the other facilities, there are 60 intensive care beds with the twenty-four hour hi-tech trauma care facility, serving a wide cross-section of the community, belonging to every economic segment of society. Medical services are given to the poor and needy patients. Three separate rural and urban health training centres have to establish.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}