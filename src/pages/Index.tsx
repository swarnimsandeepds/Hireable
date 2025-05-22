
import { useState } from "react";
import { SearchFilters } from "@/components/SearchFilters";
import { JobCard } from "@/components/JobCard";
import { sampleJobs } from "@/data/sampleData";
import { Job } from "@/types/job";

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(sampleJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleSearch = (query: string, location: string, type: string) => {
    setSearchQuery(query);
    setLocationFilter(location);
    setTypeFilter(type);

    let filtered = sampleJobs;

    if (query) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase()) ||
          job.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (type && type !== "all") {
      filtered = filtered.filter((job) => job.type === type);
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JobBoard
            </h1>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                For Companies
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sign In
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Career Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover thousands of job opportunities from top companies worldwide.
            Your next career move is just a search away.
          </p>
          <SearchFilters onSearch={handleSearch} />
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Latest Opportunities
              </h3>
              <p className="text-gray-600 mt-1">
                {filteredJobs.length} jobs found
                {searchQuery && ` for "${searchQuery}"`}
                {locationFilter && ` in ${locationFilter}`}
                {typeFilter && typeFilter !== "all" && ` • ${typeFilter}`}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
