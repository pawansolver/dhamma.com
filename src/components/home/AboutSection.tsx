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
          <h2 className="section-heading !text-left !mb-3">
            We Provide Finest Patient&apos;s Care &amp; Amenities
          </h2>
          <span className="section-heading-line !ml-0 !mb-6" />
          <div className="text-gray-600 text-sm md:text-[15px] leading-[1.8] space-y-4 font-sans text-justify">
            <p>
              Dhamma Institute of Medical Sciences is a premier multi-speciality healthcare institution located Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, India, Bihar. We are committed to delivering world-class patient care with compassion, integrity, and clinical excellence — guided by the motto <strong className="text-brandBlue">सेवा परमो धर्म:</strong> — Service is the highest duty.
            </p>
            <p>
              Our state-of-the-art facility is equipped with modern OT complexes, a 60-bed ICU with 24-hour hi-tech trauma care, NICU, PICU, advanced diagnostic imaging (CT, MRI, X-ray, USG), and a fully functional pathology laboratory. We serve patients from all walks of life, ensuring no one is denied quality healthcare.
            </p>
            <p>
              Apart from clinical services, Dhamma Institute of Medical Sciences runs dedicated community outreach programs, free eye camps, rural health camps, and health awareness initiatives — bridging the healthcare gap for underserved communities across Bihar and Eastern India.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}