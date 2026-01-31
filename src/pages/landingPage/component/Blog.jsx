import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { blogs } from './mockData.js';

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Travel Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, guides and inspiration for your Sri Lankan adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-gray-100 text-gray-700">{blog.date}</Badge>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-emerald-600 group-hover:text-white transition"
                >
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6 ">
            Read More <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}