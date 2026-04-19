import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Eleyson Ghana Limited</h3>
            <p className="text-slate-300 mb-4">
              Engineering the Future of Energy & Water. Leading provider of integrated renewable energy and hydrogeological engineering solutions in Ghana and West Africa.
            </p>
            <p className="text-slate-300">Founded in 2011</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-amber-400">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-amber-400">Services</Link></li>
              <li><Link href="/products" className="text-slate-300 hover:text-amber-400">Products</Link></li>
              <li><Link href="/projects" className="text-slate-300 hover:text-amber-400">Projects</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-amber-400">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-amber-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/solar" className="text-slate-300 hover:text-amber-400">Solar Engineering</Link></li>
              <li><Link href="/services/hydrological" className="text-slate-300 hover:text-amber-400">Hydrogeological Services</Link></li>
              <li><Link href="/request-quote" className="text-slate-300 hover:text-amber-400">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-slate-300">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-slate-300">info@eleysongh.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-slate-300">Accra, Ghana</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-slate-900 rounded-l"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 text-slate-900 px-4 py-2 rounded-r hover:bg-amber-400"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300">&copy; 2024 Eleyson Ghana Limited. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-300 hover:text-amber-400 text-sm">Facebook</a>
            <a href="#" className="text-slate-300 hover:text-amber-400 text-sm">Twitter</a>
            <a href="#" className="text-slate-300 hover:text-amber-400 text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;