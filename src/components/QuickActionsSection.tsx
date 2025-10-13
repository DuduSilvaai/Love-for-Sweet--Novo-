import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Menu, Users } from "lucide-react";
import franqueado from "@/assets/franqueado.png";
const QuickActionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}

          {/* New Grid Layout */}
          <div className="grid grid-cols-1 gap-8">
            {/* Featured Action - Left Side */}
            <Card className="relative overflow-hidden border-0 shadow-2xl rounded-3xl">
              <img
                src={franqueado}
                alt="Franqueado Love for Sweet"
                className="w-full h-[225px] md:h-[265px] object-cover"
              />
            </Card>

            
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuickActionsSection;
