
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PreInterview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Pre-Interview</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How AI Recruiter works?
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            The conversational AI agent will ask a series of questions and provide instant feedback to assist you in preparing for your job interview.
          </p>
        </div>

        <Button 
          onClick={() => navigate('/interview')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          I'm Ready
        </Button>
      </div>
    </div>
  );
};

export default PreInterview;
