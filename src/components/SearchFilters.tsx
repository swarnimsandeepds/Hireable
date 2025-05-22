
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  onSearch: (query: string, location: string, type: string) => void;
}

export const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location, type);
  };

  const handleClear = () => {
    setQuery("");
    setLocation("");
    setType("");
    onSearch("", "", "");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title or Company
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="e.g. Software Engineer, Google"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <Input
              type="text"
              placeholder="e.g. San Francisco, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Type
            </label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            type="submit"
            size="lg"
            className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
          >
            Search Jobs
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleClear}
            className="h-12 px-8 border-gray-200 hover:bg-gray-50"
          >
            Clear
          </Button>
        </div>
      </div>
    </form>
  );
};
