
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const JobListings = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "IT Job Analyst",
      description: "Analyze systems and provide technical solutions",
      salary: "$90,000 / yr",
      location: "Chicago, IL",
      jobCode: "300"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      description: "Develop web applications using modern technologies",
      salary: "$120,000 / yr",
      location: "New York, NY",
      jobCode: "200"
    },
    {
      id: 3,
      title: "Senior Account Executive",
      description: "Lead sales efforts and manage key client accounts",
      salary: "$100,000 / yr",
      location: "Los Angeles, CA",
      jobCode: "100"
    }
  ];

  const handleApply = (jobCode: string) => {
    navigate(`/apply?jobCode=${jobCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Jobs</h1>
          <p className="text-xl text-gray-600">Find your perfect opportunity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{job.description}</p>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-blue-600">{job.salary}</p>
                  <p className="text-gray-500">{job.location}</p>
                </div>
                <Button 
                  onClick={() => handleApply(job.jobCode)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
