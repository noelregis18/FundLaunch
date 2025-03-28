
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export interface CampaignCardProps {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  raised: number;
  goal: number;
  daysLeft: number;
}

const CampaignCard = ({
  id,
  title,
  category,
  imageSrc,
  description,
  raised,
  goal,
  daysLeft,
}: CampaignCardProps) => {
  const progress = Math.round((raised / goal) * 100);
  
  return (
    <Link to={`/campaigns/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 h-full campaign-card">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2 min-h-[3.5rem]">{title}</h3>
          <p className="text-sm text-gray-600 mt-2 mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">${raised.toLocaleString()}</span>
              <span className="text-gray-500">
                {progress}% of ${goal.toLocaleString()}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t border-gray-100 flex justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-primary">{daysLeft}</span>{" "}
            {daysLeft === 1 ? "day" : "days"} left
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-primary">30</span> supporters
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CampaignCard;
