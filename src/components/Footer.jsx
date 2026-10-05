import qr from "../assets/whatsapp-qr.png";
import sparkle from "../assets/sparkle.png";
const base = "https://www.upskillacademy.tech";
const groups = [
  {
    title: "Services",
    links: [
      ["Tech Services", "/services"],
      ["Online Courses", "/courses"],
      ["Scholarship", "/scholarship-applications"],
      ["Careers", "/careers"],
      ["Student Projects", "/student-projects"],
      ["Partners", "/partners"],
      ["Corporate Training", "#"],
    ],
  },
  {
    title: "Helpful Links",
    links: [
      ["About Us", "/about"],
      ["Our Instructors", "/about"],
      ["Success Stories", "/testimonials"],
      ["Blog", "/blog"],
      ["FAQ", "/faq"],
    ],
  },
  {
    title: "Information",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Service", "/terms-of-service"],
      ["Contact Us", "/about"],
    ],
  },
];
export default function Footer() {
  return (
    <>
      <section className="relative top-6 flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <div className="relative mt-5 w-full max-w-[1050px] overflow-hidden rounded-2xl bg-gradient-to-r from-brand to-brand/60 py-4 sm:rounded-[30px] md:py-6">
          <img
            className="absolute right-8 top-6 hidden h-24 w-24 object-contain md:block lg:right-16 lg:top-10 lg:h-28 lg:w-28"
            src={sparkle}
            alt="Sparkle"
          />
          <div className="relative z-10 px-4 sm:px-6 md:px-8">
            <h2 className="mb-2 max-w-2xl text-sm font-bold leading-relaxed text-white sm:text-base md:text-lg lg:text-xl">
              Don't wait — take the next step toward your brighter future.
            </h2>
            <p className="mb-4 text-xs font-medium text-white sm:text-sm md:mb-6 md:text-base lg:text-xl">
              Your journey begins with one simple action today
            </p>
            <a
              href={base + "/student/login"}
              className="block w-full rounded-full bg-white px-4 py-2 text-center text-xs font-semibold text-brand shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 sm:inline-block sm:w-auto sm:px-5 sm:text-sm md:px-6 md:py-2.5"
            >
              Start Learning
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-tr from-[#E0F3FF] via-white to-[#F5FBFF] p-6 text-gray-800 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] sm:p-10 lg:p-16">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white px-4 py-8 shadow-sm sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
            <div className="">
              <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-gray-700 md:mx-0">
                Empowering Afghan Youth with Skills for a Digital Future{" "}
                <b>-Powered by Upskill</b>
              </p>
              <div className="mb-6 flex justify-center gap-4 text-lg text-gray-500 md:justify-start">
                {[
                  ["facebook-f", "https://www.facebook.com/upskill5000/"],
                  ["twitter", "#"],
                  ["instagram", "https://www.instagram.com/upskill555/"],
                  ["linkedin-in", "https://www.linkedin.com/company/up-skil/"],
                ].map(([icon, url]) => (
                  <a
                    className="transition-colors hover:text-brand"
                    key={icon}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon}
                  >
                    <i className={"fab fa-" + icon} />
                  </a>
                ))}
              </div>
              <p className="mb-4 text-sm font-medium text-gray-700">
                Let's Connect
              </p>
              <a
                href="https://wa.me/93781765151?text=Hello%20Upskill!"
                aria-label="Chat with us on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mx-auto h-16 w-16 rounded-xl border border-gray-200 bg-white p-1 shadow-md transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20 md:mx-0 md:h-24 md:w-24 lg:h-28 lg:w-28"
                  src={qr}
                  alt="WhatsApp QR Code"
                />
              </a>
            </div>
            {groups.map((group) => (
              <div key={group.title} className="">
                <h4 className="mb-4 text-base font-semibold text-gray-900">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map(([label, path]) => (
                    <li key={label}>
                      <a
                        className="inline-block text-sm text-gray-600 transition-colors hover:text-brand"
                        href={
                          path === "/blog"
                            ? "/blog"
                            : path === "#"
                              ? "#"
                              : base + path
                        }
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                {group.title === "Information" && (
                  <div className="mt-6 space-y-2 text-xs text-gray-600">
                    <p className="flex items-center justify-center md:justify-start">
                      <i className="fas fa-map-marker-alt mr-3 text-sm text-brand" />
                      Kabul, Afghanistan
                    </p>
                    <p className="flex items-center justify-center md:justify-start">
                      <i className="fas fa-phone mr-3 text-sm text-brand" />
                      <a href="https://wa.me/93781765151">+93 78 176 5151</a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row md:gap-0">
            <div className="mb-4 flex gap-4 md:mb-0">
              <a
                className="transition-colors hover:text-brand"
                href={base + "/privacy-policy"}
              >
                Privacy &amp; Policy
              </a>
              <a
                className="transition-colors hover:text-brand"
                href={base + "/terms-of-service"}
              >
                Terms &amp; Condition
              </a>
            </div>
            <p className="text-center">
              © 2026 Upskill Online. All rights reserved.
              <br />
              Powered by <b className="font-semibold text-brand">Upskill</b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
