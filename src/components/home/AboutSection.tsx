import Image from "next/image";
import { SparkleButton } from "@/components/ui/button-8";

export default function AboutSection() {
  return (
    <section id="about-section" className="section bg-bgLight">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10">
        <div className="flex-shrink-0 relative">
          {/* Outer decorative ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-brandGreen/20 animate-[spin_30s_linear_infinite]" />
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-brandGreen/30">
            {/* Top gradient fill */}
            <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-brandBlue to-brandBlue/70 z-0" />
            {/* Bottom gradient fill */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-brandGreen/60 to-transparent z-0" />
            {/* Image */}
            <Image
              src="/images/about-hospital.png"
              alt="Buddha Hospital & Research Institute Building"
              fill
              className="object-contain p-0.5 z-10 drop-shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="section-heading !text-left max-md:!text-center">About BHRI</h2>
          <span className="section-heading-line !mx-0 max-md:!mx-auto" />
          <p className="text-textmain/80 text-base leading-relaxed mb-4 text-justify">
            <strong className="text-textmain">Buddha Hospital &amp; Research Institute</strong>{" "}
            is a multi-Specialty hospital in Gaya. We offer reasonable pricing health care plans,
            insurance packages to clients. Buddha Hospital &amp; Research Institute has an
            outstanding and recognized team of doctors in all specialties including Cardiology,
            Gastroenterology, Nephrology, Respiratory, Orthopedics, Joint replacement, Bariatric
            Surgery and Neurosurgery.
          </p>
          <p className="text-textmain/80 text-base leading-relaxed mb-6 text-justify">
            Our doctors are assisted by a team of devoted nurses and paramedics. We have 24x7
            Emergency, Pharmacy and Ambulance Services, ICU, NICU, PICU, Operating Theaters,
            Dialysis, Diagnostics and Imaging, and Physiotherapy and Rehab facilities, and Health
            Check-up plans.
          </p>
          <SparkleButton href="/about/overview">Read More</SparkleButton>
        </div>
      </div>
    </section>
  );
}