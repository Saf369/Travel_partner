import Image from "next/image";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const POPULAR_DESTINATIONS = [
  {
    id: "1",
    title: "Bali, Indonesia",
    description: "Explore the beautiful beaches and ancient temples.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    rating: "4.8",
  },
  {
    id: "2",
    title: "Santorini, Greece",
    description: "Experience stunning sunsets and iconic white architecture.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    rating: "4.9",
  },
  {
    id: "3",
    title: "Kyoto, Japan",
    description: "Walk through historic shrines and bamboo forests.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    rating: "4.7",
  },
  {
    id: "4",
    title: "Machu Picchu, Peru",
    description: "Hike the Inca trail to the ancient mountain city.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    rating: "4.9",
  }
];

const RECOMMENDED_DEALS = [
  {
    id: "1",
    title: "Swiss Alps Adventure",
    duration: "7 Days",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
  },
  {
    id: "2",
    title: "Maldives Getaway",
    duration: "5 Days",
    price: "$2,500",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full p-6 md:p-10 lg:px-14 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10 pt-4 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Discover</h1>
        <p className="text-lg text-text-secondary">
          Explore the best places in the world
        </p>
      </div>

      {/* Popular Destinations */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Popular Destinations</h2>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
            See All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((item) => (
            <Card key={item.id} className="flex flex-col group cursor-pointer border-transparent shadow-sm hover:shadow-xl hover:border-background-element">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm mt-1">{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center border-t border-background-element/50 pt-4 pb-5">
                <div className="flex items-center gap-1.5 bg-yellow-500/10 px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-bold text-foreground">
                    {item.rating}
                  </span>
                </div>
                <span className="text-sm font-medium text-text-secondary group-hover:text-foreground transition-colors">
                  View Details →
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Recommended Deals */}
      <section className="pb-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Recommended Deals</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {RECOMMENDED_DEALS.map((item) => (
            <Card key={item.id} className="flex flex-row overflow-hidden group cursor-pointer border-transparent shadow-sm hover:shadow-xl hover:border-background-element">
              <div className="relative w-[140px] md:w-[220px] shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-2">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{item.duration}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pb-4 md:pb-6">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    {item.price}
                  </span>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
