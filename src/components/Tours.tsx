import tourMountain from "@/assets/tour-mountain.jpg";
import tourSunset from "@/assets/tour-sunset.jpg";
import tourKyoto from "@/assets/tour-kyoto.jpg";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

const tours = [
  {
    title: "Rocky Mountain Adventure",
    image: tourMountain,
    duration: "7 days",
    groupSize: "Small group",
    price: "From $1,299"
  },
  {
    title: "Sunrise Sunset Escape",
    image: tourSunset,
    duration: "5 days",
    groupSize: "Private tour",
    price: "From $899"
  },
  {
    title: "Kyoto Cultural Journey",
    image: tourKyoto,
    duration: "10 days",
    groupSize: "Small group",
    price: "From $2,199"
  }
];

const Tours = () => {
  return (
    <section id="tours" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top tours to spark your<br />wanderlust
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of unforgettable adventures. From challenging mountain treks 
            to cultural immersions, find the perfect journey that speaks to your adventurous spirit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{tour.price}</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
