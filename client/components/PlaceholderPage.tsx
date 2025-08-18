import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  features?: string[];
}

const PlaceholderPage = ({ title, description, features }: PlaceholderPageProps) => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-optik-red-100 text-optik-red-600 rounded-full mb-6">
                <Construction className="h-10 w-10" />
              </div>
              
              <h1 className="text-3xl font-bold text-optik-gray-900 mb-4 font-display">
                {title}
              </h1>
              
              <p className="text-lg text-optik-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              {features && features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-optik-gray-900 mb-4">
                    Yang akan tersedia:
                  </h3>
                  <ul className="text-left space-y-2 max-w-md mx-auto">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-optik-gray-600">
                        <div className="w-2 h-2 bg-optik-red-600 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-sm text-optik-gray-500 mb-6">
                  Halaman ini sedang dalam pengembangan. Silakan kembali ke beranda 
                  atau hubungi kami untuk informasi lebih lanjut.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-optik-red-600 hover:bg-optik-red-700">
                    <Link to="/" className="inline-flex items-center space-x-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Kembali ke Beranda</span>
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="border-optik-red-600 text-optik-red-600 hover:bg-optik-red-50">
                    <Link to="/kontak">Hubungi Kami</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
