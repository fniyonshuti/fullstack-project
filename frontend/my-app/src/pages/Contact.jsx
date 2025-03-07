export default function ContactSection() {
    return (
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or need assistance? Contact us today.
            </p>
          </div>
  
          {/* Contact Content */}
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            
            {/* Left: Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="bg-blue-600 text-white p-3 rounded-full">
                  📍
                </span>
                <p className="text-gray-700">123 Career Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-600 text-white p-3 rounded-full">
                  📧
                </span>
                <p className="text-gray-700">support@careerconnect.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-600 text-white p-3 rounded-full">
                  📞
                </span>
                <p className="text-gray-700">+1 (123) 456-7890</p>
              </div>
  
              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">🌐</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">📘</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">🐦</a>
              </div>
            </div>
  
            {/* Right: Contact Form */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Message</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
                  Send Message
                </button>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  