
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

const Interview = () => {
  const navigate = useNavigate();
  const [showEndButton, setShowEndButton] = useState(false);

  useEffect(() => {
    // Add the ElevenLabs script to the page
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Show the end button after 30 seconds as a fallback
    const timer = setTimeout(() => {
      setShowEndButton(true);
    }, 30000);

    // Listen for when the conversation ends
    const handleConversationEnd = () => {
      console.log('AI interview completed');
      // Navigate to results after a short delay
      setTimeout(() => {
        navigate('/results');
      }, 2000);
    };

    // Add event listener for conversation end
    window.addEventListener('elevenlabs-conversation-end', handleConversationEnd);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('elevenlabs-conversation-end', handleConversationEnd);
      // Clean up script
      const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [navigate]);

  const handleManualEnd = () => {
    navigate('/results');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-4 bg-white rounded-full animate-pulse"></div>
            <div className="w-2 h-6 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-4 bg-white rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-6 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-4 bg-white rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Recruiter Angelina
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Your AI interview is about to begin. Please speak clearly and answer the questions honestly.
        </p>
      </div>

      {/* ElevenLabs Conversational AI Widget */}
      <div className="w-full max-w-2xl">
        <elevenlabs-convai agent-id="agent_01jw0pztjsfxfbjqcj0r25j3bk"></elevenlabs-convai>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          The conversation will automatically redirect you to the results page when completed.
        </p>
        
        {showEndButton && (
          <Button 
            onClick={handleManualEnd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            End Interview & View Results
          </Button>
        )}
      </div>
    </div>
  );
};

export default Interview;
