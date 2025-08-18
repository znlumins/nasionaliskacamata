import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/meraki";
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
          <div className="flex flex-row justify-between items-center gap-2 text-xs lg:text-sm">
            <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
              <div className="flex items-center gap-1">
                <Phone className="h-2.5 w-2.5 lg:h-3 lg:w-3 flex-shrink-0" />
                <span className="whitespace-nowrap">+62 813-3680-4334</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <Clock className="h-2.5 w-2.5 lg:h-3 lg:w-3 flex-shrink-0" />
                <span className="whitespace-nowrap">
                  Senin - Minggu: 08:00 - 19:00
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 min-w-0 flex-1 justify-end">
              <MapPin className="h-2.5 w-2.5 lg:h-3 lg:w-3 flex-shrink-0" />
              <span className="truncate text-right">
                Jl.Panglima Sudirman 206A ( Depan Bank Syariah Indonesia ) Turen
                Malang
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-optik-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F607a5b5f68f247e6a6ca32955e309b70%2Fcaada15ea42041b7bc8a05d02553a073?format=webp&width=800"
                alt="Nasionalis Optik - Solusi Penglihatan Anda"
                className="h-16 sm:h-20 w-auto mt-2"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-16 sm:h-20">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-optik-red-50",
                    isActive(item.href)
                      ? "text-optik-red-600 bg-optik-red-50 shadow-sm"
                      : "text-optik-gray-700 hover:text-optik-red-600",
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-optik-red-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild variant="primary" size="sm">
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
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-optik-gray-100 shadow-xl">
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-3 px-4 text-sm font-medium transition-all duration-300 rounded-xl",
                    isActive(item.href)
                      ? "text-optik-red-600 bg-optik-red-50 shadow-sm border border-optik-red-100"
                      : "text-optik-gray-700 hover:text-optik-red-600 hover:bg-optik-red-50 hover:shadow-sm",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-optik-gray-200">
                <Button asChild variant="primary" className="w-full">
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
      <footer className="bg-gradient-to-br from-optik-gray-900 to-optik-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F607a5b5f68f247e6a6ca32955e309b70%2Fc6cbd9efab5b40a5836e6f3d087e2910?format=webp&width=800"
                  alt="Nasionalis Optik - Solusi Penglihatan Anda"
                  className="h-14 sm:h-16 w-auto mb-2"
                />
              </div>
              <p className="text-optik-gray-300 mb-4">
                Optik terpercaya yang telah melayani masyarakat selama
                bertahun-tahun dengan mengutamakan kualitas dan layanan yang
                ramah.
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
                  <span className="text-sm">
                    Jl.Panglima Sudirman 206A ( Depan Bank Syariah Indonesia )
                    Turen Malang
                  </span>
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
              &copy; 2025 Optik Nasionalis Kacamata. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
