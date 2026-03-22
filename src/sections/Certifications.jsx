import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section className="c-space pt-20 pb-10" id="certifications">
      <h2 className="text-heading mb-10">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
          >
            <p className="text-lg font-semibold text-white">{cert.title}</p>
            <p className="text-sm text-neutral-400 mt-1">{cert.issuer}</p>
            <p className="text-sm text-neutral-500 mt-1">{cert.date}</p>

            <a
              href={cert.link}
              target="_blank"
              className="inline-block mt-4 text-indigo-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Certifications;