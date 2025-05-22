
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/JobCard";
import { sampleJobs, sampleCompanies } from "@/data/sampleData";
import { ArrowLeft, MapPin, Users, Globe, Building } from "lucide-react";

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const company = sampleCompanies.find((c) => c.id === id);
  const companyJobs = sampleJobs.filter((job) => job.companyId === id);

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Company not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to jobs
          </Link>
        </div>
      </header>

      {/* Company Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-6">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-24 h-24 rounded-xl bg-white p-2 object-cover"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
              <p className="text-xl text-blue-100 mb-4">{company.tagline}</p>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {company.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {company.size}
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {company.industry}
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <a href={company.website} className="hover:text-white">
                    {company.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {company.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{company.description}</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {company.values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Open Positions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Open Positions ({companyJobs.length})
              </h2>
              {companyJobs.length > 0 ? (
                <div className="grid gap-6">
                  {companyJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-600">No open positions at the moment.</p>
                    <p className="text-sm text-gray-500 mt-2">Check back later for new opportunities!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Company Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Founded</h4>
                    <p className="text-gray-900">{company.founded}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Headquarters</h4>
                    <p className="text-gray-900">{company.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Company Size</h4>
                    <p className="text-gray-900">{company.size}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Industry</h4>
                    <p className="text-gray-900">{company.industry}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button asChild className="w-full mb-3">
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Follow Company
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
