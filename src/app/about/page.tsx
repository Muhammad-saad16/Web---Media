import Image from 'next/image'
import Link from 'next/link'
import choose from '../../../public/choose.jpg'
import welcome from '../../../public/welcome.jpg'

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const values = [
    { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
    { title: "Quality", description: "Delivering excellence in every project" },
    { title: "Integrity", description: "Building trust through transparency" },
    { title: "Collaboration", description: "Working together to achieve greatness" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
        
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={welcome}
          alt="Agency team working"
          fill
          className="object-cover mt-20"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
           
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
         
          </p> */}
        {/* </div> */}
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
                  {stat.number}
                </h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            At our core, we are driven by a passion for innovation and a commitment to excellence. Our mission is to empower businesses through cutting-edge digital solutions that not only meet but exceed the evolving needs of the modern marketplace.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A0F1C] p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="text-[#4169E1] text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovate</h3>
              <p className="text-gray-400">Pushing boundaries with creative solutions</p>
            </div>
            <div className="bg-[#0A0F1C] p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="text-[#4169E1] text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-400">Ensuring data protection and privacy</p>
            </div>
            <div className="bg-[#0A0F1C] p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="text-[#4169E1] text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scale</h3>
              <p className="text-gray-400">Building solutions that grow with you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#0A0F1C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
            Our Process
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4169E1] to-[#9370DB]"></div>
            <div className="space-y-12">
              {[
                { step: 1, title: "Discovery", description: "Understanding your needs and objectives" },
                { step: 2, title: "Strategy", description: "Developing a comprehensive plan of action" },
                { step: 3, title: "Design", description: "Creating engaging and intuitive solutions" },
                { step: 4, title: "Development", description: "Building with cutting-edge technology" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-[#0A0F1C] p-6 rounded-lg inline-block">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#4169E1] z-10">
                    {item.step}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-[#0A0F1C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#4169E1] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                    <p className="text-gray-400">Our team comprises industry veterans with deep knowledge across various technologies and sectors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#4169E1] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-400">We don&apos;t believe in one-size-fits-all. Our solutions are custom-built to address your unique challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#4169E1] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-400">With a portfolio of successful projects across various industries, we have the experience to deliver results.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={choose}
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0A0F1C] to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTM3NEQiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMnptMjUgMGMwLTEuMTA1LS44OTUtMi0yLTJzLTIgLjg5NS0yIDIgLjg5NSAyIDIgMiAyLS44OTUgMi0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-[#0A0F1C]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text animate-gradient-x">
              Connect With Us
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join our digital community and stay updated with our latest projects and innovations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {[
              {
                name: 'Instagram',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                ),
                color: 'from-[#833AB4] to-[#E1306C]',
                link: 'https://www.instagram.com/webmedia181/'
              },
              {
                name: 'Twitter',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                ),
                color: 'from-[#1DA1F2] to-[#0C86D4]',
                link: '#'
              },
              {
                name: 'LinkedIn',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                color: 'from-[#0077B5] to-[#00A0DC]',
                link: 'https://www.linkedin.com/company/web-and-media-agency/'
              },
              {
                name: 'Facebook',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                color: 'from-[#1877F2] to-[#3b5998]',
                link: 'https://www.facebook.com/profile.php?id=61569358735093'
              },
              {
                name: 'TikTok',
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                ),
                color: 'from-[#00f2ea] to-[#ff0050]',
                link: 'https://www.tiktok.com/@webmedia21'
              }
            ].map((social, index) => (
              <Link
                key={index}
                href={social.link}
                className="group relative flex flex-col items-center justify-center"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${social.color} p-[2px] transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-${social.color.split('-')[1]}/50`}>
                  <div className="w-full h-full rounded-full bg-[#0A0F1C] flex items-center justify-center p-5 transition-all duration-300 ease-in-out group-hover:bg-opacity-80">
                    <div className="text-white transition-all duration-300 ease-in-out group-hover:scale-110">
                      {social.icon}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:transform group-hover:-translate-y-2">
                  <span className="text-sm font-medium text-white bg-[#0A0F1C] px-3 py-1 rounded-full shadow-md">{social.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6">Stay connected with us on social media</p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4169E1] to-[#9370DB] text-white font-medium hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4169E1]">
              Follow Us
            </button>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="hidden md:block">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob"
              style={{
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
                width: `${Math.random() * 20 + 10}rem`,
                height: `${Math.random() * 20 + 10}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

