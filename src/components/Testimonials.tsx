import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Mamá de Sofía (5 años)',
    content: 'Miss Ely hizo del cumpleaños de mi hija algo inolvidable. Los niños no pararon de reír y jugar. Su profesionalismo y cariño se nota en cada actividad.',
    rating: 5
  },
  {
    name: 'Carlos Pérez',
    role: 'Papá de Lucas (4 años)',
    content: 'Contraté a Miss Ely para la escuela en casa de mi hijo y el cambio ha sido increíble. Aprende mientras se divierte. 100% recomendada.',
    rating: 5
  },
  {
    name: 'Ana Torres',
    role: 'Mamá de Emma y Leo',
    content: 'Los experimentos y juegos que hace son educativos y seguros. Mis hijos la adoran y siempre preguntan cuándo volverá Miss Ely. Excelente profesional.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Lo que Dicen los Padres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La confianza de las familias es mi mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="w-12 h-12 text-purple-300 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
