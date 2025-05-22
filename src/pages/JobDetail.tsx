
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { sampleJobs } from "@/data/sampleData";
import { ArrowLeft, MapPin, Clock, Building, Users, DollarSign, Globe } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = sampleJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Job not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to jobs
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to jobs
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <Link
                      to={`/company/${job.companyId}`}
                      className="inline-flex items-center text-xl text-blue-600 hover:text-blue-700"
                    >
                      <Building className="w-5 h-5 mr-2" />
                      {job.company}
                    </Link>
                  </div>
                  <img
                    src={job.companyLogo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{timeAgo(job.postedAt)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-blue-100 text-blue-800">{job.type}</Badge>
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">About this role</h3>
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Bachelor's degree in relevant field or equivalent experience</li>
                    <li>3+ years of experience in {job.skills[0]}</li>
                    <li>Strong problem-solving and analytical skills</li>
                    <li>Excellent communication and teamwork abilities</li>
                    <li>Experience with {job.skills.slice(0, 3).join(", ")}</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">What we offer</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Competitive salary and equity package</li>
                    <li>Comprehensive health, dental, and vision insurance</li>
                    <li>Flexible work arrangements and remote options</li>
                    <li>Professional development opportunities</li>
                    <li>Collaborative and inclusive work environment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <Button size="lg" className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="w-full mb-6">
                  Save Job
                </Button>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
                    <Link
                      to={`/company/${job.companyId}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View company profile
                    </Link>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Job ID</h4>
                    <p className="text-gray-600 text-sm">{job.id}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Posted</h4>
                    <p className="text-gray-600 text-sm">{timeAgo(job.postedAt)}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Share</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Copy Link
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
