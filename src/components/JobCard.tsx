
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Job } from "@/types/job";
import { MapPin, Clock, Building } from "lucide-react";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const timeAgo = (date: string) => {
    const now = new Date();
    const posted = new Date(date);
    const diffInHours = Math.floor((now.getTime() - posted.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300 bg-white">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link to={`/job/${job.id}`} className="block">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {job.title}
              </h3>
            </Link>
            <Link to={`/company/${job.companyId}`} className="inline-flex items-center mt-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Building className="w-4 h-4 mr-1" />
              {job.company}
            </Link>
          </div>
          <div className="ml-4 flex-shrink-0">
            <img
              src={job.companyLogo}
              alt={`${job.company} logo`}
              className="w-12 h-12 rounded-lg object-cover border border-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {timeAgo(job.postedAt)}
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            {job.type}
          </Badge>
          <Badge variant="outline" className="border-green-200 text-green-700">
            {job.salary}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs border-gray-200 text-gray-600">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link to={`/job/${job.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
