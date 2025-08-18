import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Users, 
  Award, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Glasses,
  Heart,
  Shield
} from "lucide-react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Interior Toko yang Nyaman",
      subtitle: "Suasana yang ramah dan profesional"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      title: "Kacamata Elegan & Berkualitas",
      subtitle: "Koleksi frame terlengkap dan terdepan"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      title: "Pelanggan Puas & Bahagia",
      subtitle: "Testimoni kepuasan dari ribuan pelanggan"
    }
  ];

  const services = [
    {
      icon: Eye,
      title: "Pemeriksaan Mata Gratis",
      description: "Pemeriksaan mata komprehensif oleh ahli optik berpengalaman untuk menentukan ukuran lensa yang tepat.",
      features: ["Tes refraksi lengkap", "Konsultasi gratis", "Teknologi modern"]
    },
    {
      icon: Glasses,
      title: "Koleksi Frame Terlengkap",
      description: "Ribuan pilihan frame dari brand lokal dan internasional untuk pria, wanita, dan anak-anak.",
      features: ["Brand terpercaya", "Model terbaru", "Harga terjangkau"]
    },
    {
      icon: Award,
      title: "Lensa Berkualitas Tinggi",
      description: "Lensa dengan teknologi terdepan untuk memberikan penglihatan yang jernih dan nyaman.",
      features: ["Anti UV", "Anti scratch", "Garansi kualitas"]
    }
  ];

  const testimonials = [
    {
      name: "Ibu Sari Dewi",
      role: "Guru",
      content: "Pelayanan di Optik Nasionalis sangat memuaskan! Staf yang ramah dan profesional membantu saya menemukan kacamata yang sempurna. Kualitas lensa juga sangat bagus.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Bapak Ahmad Rahman",
      role: "Pengusaha",
      content: "Sudah 10 tahun menjadi pelanggan setia. Optik Nasionalis selalu memberikan produk terbaik dengan harga yang fair. Sangat direkomendasikan!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Maya Putri",
      role: "Mahasiswa",
      content: "Frame kacamata di sini benar-benar trendy dan cocok untuk anak muda. Harganya juga student-friendly. Tim optik sangat membantu dalam pemilihan style yang pas!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const stats = [
    { number: "15+", label: "Tahun Pengalaman", icon: Award },
    { number: "10.000+", label: "Pelanggan Puas", icon: Users },
    { number: "500+", label: "Model Frame", icon: Glasses },
    { number: "98%", label: "Tingkat Kepuasan", icon: Heart }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Optik Nasionalis Kacamata
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Solusi Penglihatan Terbaik untuk Anda
            </p>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Optik terpercaya yang telah melayani masyarakat selama bertahun-tahun 
              dengan mengutamakan kualitas dan layanan yang ramah
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-optik-red-600 hover:bg-optik-red-700 text-white font-semibold px-8 py-4 text-lg"
            >
              <Link to="/produk" className="inline-flex items-center space-x-2">
                <span>Lihat Koleksi Kami</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-optik-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-optik-red-100 text-optik-red-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-optik-gray-900 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-optik-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="bg-optik-red-100 text-optik-red-700 mb-6">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-optik-gray-900 mb-6">
            Mengapa Memilih Optik Nasionalis?
          </h2>
          <p className="text-lg text-optik-gray-600 mb-8 leading-relaxed">
            Sebagai optik terpercaya yang telah berdiri selama puluhan tahun, kami berkomitmen 
            untuk memberikan solusi penglihatan terbaik dengan mengutamakan kualitas produk, 
            layanan profesional, dan kepuasan pelanggan. Pengalaman bertahun-tahun membuat 
            kami memahami kebutuhan setiap pelanggan dengan sempurna.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-optik-red-100 text-optik-red-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-optik-gray-900 mb-2">Kualitas Terjamin</h3>
              <p className="text-optik-gray-600">Produk berkualitas tinggi dengan garansi resmi</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-optik-red-100 text-optik-red-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-optik-gray-900 mb-2">Tim Profesional</h3>
              <p className="text-optik-gray-600">Ahli optik berpengalaman dan bersertifikat</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-optik-red-100 text-optik-red-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-optik-gray-900 mb-2">Layanan Ramah</h3>
              <p className="text-optik-gray-600">Pelayanan yang personal dan penuh perhatian</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-optik-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-optik-red-100 text-optik-red-700 mb-4">
              Layanan Unggulan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-optik-gray-900 mb-4">
              Layanan Terbaik untuk Penglihatan Anda
            </h2>
            <p className="text-lg text-optik-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan komprehensif untuk memenuhi 
              semua kebutuhan penglihatan Anda dengan standar kualitas tertinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-optik-red-100 text-optik-red-600 rounded-full mb-6 group-hover:bg-optik-red-600 group-hover:text-white transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-optik-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-optik-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-optik-gray-600">
                        <CheckCircle className="h-4 w-4 text-optik-red-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-optik-red-100 text-optik-red-700 mb-4">
              Testimoni Pelanggan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-optik-gray-900 mb-4">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-lg text-optik-gray-600 max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah 
              testimoni dari beberapa pelanggan setia Optik Nasionalis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-optik-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-optik-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-optik-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-optik-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Siap Menemukan Kacamata Ideal Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Kunjungi toko kami sekarang untuk pemeriksaan mata gratis dan 
            konsultasi pemilihan frame yang tepat untuk Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-optik-red-600 hover:bg-optik-gray-100 font-semibold px-8 py-4"
            >
              <Link to="/produk" className="inline-flex items-center space-x-2">
                <span>Lihat Produk</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-optik-red-600 font-semibold px-8 py-4"
            >
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
