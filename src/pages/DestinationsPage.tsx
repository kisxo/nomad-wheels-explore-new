import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import italyImg from "@/assets/destination-italy.jpg";
import japanImg from "@/assets/destination-japan.jpg";
import indonesiaImg from "@/assets/destination-indonesia.jpg";

const destinations = [
  {
    id: 1,
    name: "Italy",
    image: italyImg,
    description: "Experience ancient history and world-class cuisine",
    tours: 12,
    price: "From $1,899"
  },
  {
    id: 2,
    name: "Japan",
    image: japanImg,
    description: "Discover the perfect blend of tradition and innovation",
    tours: 15,
    price: "From $2,499"
  },
  {
    id: 3,
    name: "Indonesia",
    image: indonesiaImg,
    description: "Explore tropical paradise and vibrant cultures",
    tours: 10,
    price: "From $1,599"
  },
  {
    id: 4,
    name: "Greece",
    image: italyImg,
    description: "Ancient ruins and stunning Mediterranean coastlines",
    tours: 8,
    price: "From $1,799"
  },
  {
    id: 5,
    name: "Peru",
    image: japanImg,
    description: "Machu Picchu and Incan heritage await",
    tours: 9,
    price: "From $2,199"
  },
  {
    id: 6,
    name: "Iceland",
    image: indonesiaImg,
    description: "Land of fire, ice, and natural wonders",
    tours: 7,
    price: "From $2,899"
  }
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Destinations</h1>
              <p className="text-xl text-muted-foreground">
                Discover breathtaking locations around the globe. From ancient wonders to modern marvels, 
                find your next adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card key={destination.id} className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.tours} Tours Available</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{destination.price}</span>
                      <Button variant="outline" size="sm">View Tours</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
