
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Tara.ai</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Tara.ai is an innovative AI-powered recruitment platform that revolutionizes the hiring process. 
              Our advanced conversational AI agent provides personalized interview experiences and instant feedback 
              to help both candidates and employers make better decisions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With 24/7 availability and cutting-edge technology, we're making recruitment more efficient, 
              fair, and accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
