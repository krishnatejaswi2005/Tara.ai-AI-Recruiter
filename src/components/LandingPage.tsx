
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI Recruiter
              <br />
              <span className="text-blue-600">Agent</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Find top talent effortlessly with
              <br />
              24/7 AI recruiting assistance
            </p>
            
            <Button 
              onClick={() => navigate('/jobs')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View Jobs
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-2 bg-blue-600 rounded-full mx-auto"></div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                      <div className="w-4 h-8 bg-blue-600 rounded"></div>
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
