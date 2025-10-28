import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";
import tourMountain from "@/assets/tour-mountain.jpg";
import tourSunset from "@/assets/tour-sunset.jpg";
import tourKyoto from "@/assets/tour-kyoto.jpg";

const tours = [
  {
    id: 1,
    name: "Alpine Adventure",
    image: tourMountain,
    destination: "Swiss Alps",
    duration: "7 Days",
    groupSize: "8-12",
    price: "$2,499",
    category: "Adventure",
    description: "Trek through stunning mountain landscapes and charming villages"
  },
  {
    id: 2,
    name: "Mediterranean Dreams",
    image: tourSunset,
    destination: "Greek Islands",
    duration: "10 Days",
    groupSize: "10-15",
    price: "$1,899",
    category: "Relaxation",
    description: "Island hopping adventure with pristine beaches and ancient ruins"
  },
  {
    id: 3,
    name: "Cultural Journey",
    image: tourKyoto,
    destination: "Kyoto, Japan",
    duration: "8 Days",
    groupSize: "6-10",
    price: "$2,799",
    category: "Culture",
    description: "Immerse yourself in traditional Japanese culture and temples"
  },
  {
    id: 4,
    name: "Safari Expedition",
    image: tourMountain,
    destination: "Tanzania",
    duration: "12 Days",
    groupSize: "8-12",
    price: "$3,499",
    category: "Wildlife",
    description: "Witness the great migration and incredible wildlife"
  },
  {
    id: 5,
    name: "Ancient Wonders",
    image: tourSunset,
    destination: "Egypt",
    duration: "9 Days",
    groupSize: "12-16",
    price: "$2,199",
    category: "History",
    description: "Explore pyramids, temples, and the mysteries of ancient Egypt"
  },
  {
    id: 6,
    name: "Northern Lights",
    image: tourKyoto,
    destination: "Iceland",
    duration: "6 Days",
    groupSize: "6-8",
    price: "$2,899",
    category: "Nature",
    description: "Chase the aurora and discover Iceland's natural wonders"
  }
];

const ToursPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Tours</h1>
              <p className="text-xl text-muted-foreground">
                Carefully curated experiences designed to create unforgettable memories. 
                Each tour is led by expert guides who know these destinations inside out.
              </p>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="group overflow-hidden flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-0">
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{tour.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{tour.destination}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{tour.groupSize} people</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-primary">{tour.price}</span>
                      <Button>Book Now</Button>
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

export default ToursPage;
