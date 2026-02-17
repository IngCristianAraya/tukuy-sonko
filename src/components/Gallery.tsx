import { Image } from 'lucide-react';

export default function Gallery() {
  const placeholderImages = Array(6).fill(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Momentos Mágicos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturando la alegría y diversión de cada celebración
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {placeholderImages.map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Image className="w-16 h-16 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-500 font-medium">
                    Foto {index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            Próximamente: Galería completa de eventos y celebraciones
          </p>
        </div>
      </div>
    </section>
  );
}
