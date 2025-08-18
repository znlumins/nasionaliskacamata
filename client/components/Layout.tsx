import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Produk & Layanan", href: "/produk" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/kontak" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="bg-optik-red-700 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span className="text-xs sm:text-sm">+62 813-3680-4334</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span className="text-xs sm:text-sm">Senin - Minggu: 08:00 - 19:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-center lg:text-right">Jl.Panglima Sudirman 206A ( Depan Bank Syariah Indonesia ) Turen Malang</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F607a5b5f68f247e6a6ca32955e309b70%2Fcaada15ea42041b7bc8a05d02553a073?format=webp&width=800"
                alt="Nasionalis Optik - Solusi Penglihatan Anda"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-optik-red-600 py-2",
                    isActive(item.href)
                      ? "text-optik-red-600 border-b-2 border-optik-red-600"
                      : "text-optik-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                size="sm"
                className="bg-optik-red-600 hover:bg-optik-red-700 text-white font-medium"
              >
                <Link to="/kontak">Hubungi Kami</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-optik-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-optik-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-optik-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-2 px-3 text-sm font-medium transition-colors rounded-md",
                    isActive(item.href)
                      ? "text-optik-red-600 bg-optik-red-50"
                      : "text-optik-gray-700 hover:text-optik-red-600 hover:bg-optik-gray-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-optik-gray-200">
                <Button
                  asChild
                  className="w-full bg-optik-red-600 hover:bg-optik-red-700 text-white font-medium"
                >
                  <Link to="/kontak" onClick={() => setMobileMenuOpen(false)}>
                    Hubungi Kami
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-optik-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-optik-red-600 text-white p-2 rounded-lg">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">Optik Nasionalis Kacamata</h3>
                  <p className="text-optik-gray-300">Solusi Penglihatan Terbaik untuk Anda</p>
                </div>
              </div>
              <p className="text-optik-gray-300 mb-4">
                Optik terpercaya yang telah melayani masyarakat selama bertahun-tahun 
                dengan mengutamakan kualitas dan layanan yang ramah.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-optik-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-3 text-optik-gray-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">Jl.Panglima Sudirman 206A ( Depan Bank Syariah Indonesia ) Turen Malang</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+62 813-3680-4334</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Senin - Minggu: 08:00 - 19:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-optik-gray-700 mt-8 pt-8 text-center">
            <p className="text-optik-gray-400">
              &copy; 2024 Optik Nasionalis Kacamata. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
