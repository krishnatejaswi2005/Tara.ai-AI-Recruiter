
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jobCode = searchParams.get('jobCode') || '300';
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    linkedinLink: '',
    resume: null as File | null
  });

  const [isLoading, setIsLoading] = useState(false);

  // Get the correct webhook URL based on job code
  const getWebhookUrl = (code: string) => {
    switch (code) {
      case '200':
        return 'https://krishna2005.app.n8n.cloud/webhook/form1'; // Full Stack Developer
      case '100':
        return 'https://krishna2005.app.n8n.cloud/webhook/form2'; // IT Support
      case '300':
        return 'https://krishna2005.app.n8n.cloud/webhook/form3'; // Senior Accountant
      default:
        return 'https://krishna2005.app.n8n.cloud/webhook/form3'; // Default to Senior Accountant
    }
  };

  const getJobTitle = (code: string) => {
    switch (code) {
      case '200':
        return 'Full Stack Developer';
      case '100':
        return 'IT Support';
      case '300':
        return 'Senior Accountant';
      default:
        return 'Senior Accountant';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file only.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.resume) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields and upload your resume.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Prepare form data for submission
      const submitData = new FormData();
      submitData.append('Name', formData.fullName);
      submitData.append('Email', formData.email);
      submitData.append('Phone', formData.phoneNumber);
      submitData.append('LinkedIn', formData.linkedinLink);
      submitData.append('Resume', formData.resume);
      submitData.append('JobCode', jobCode);

      const webhookUrl = getWebhookUrl(jobCode);
      
      // Submit to n8n webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        // Store form data in localStorage for the interview process
        localStorage.setItem('applicationData', JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          linkedinLink: formData.linkedinLink,
          jobCode,
          jobTitle: getJobTitle(jobCode),
          resumeName: formData.resume?.name
        }));

        toast({
          title: "Application submitted!",
          description: "Proceeding to pre-interview preparation.",
        });

        setTimeout(() => {
          navigate('/pre-interview');
        }, 1000);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              {getJobTitle(jobCode)}
            </CardTitle>
            <p className="text-lg text-gray-600 mt-2">Apply</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="linkedinLink">LinkedIn Link</Label>
                  <Input
                    id="linkedinLink"
                    name="linkedinLink"
                    type="url"
                    value={formData.linkedinLink}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <Label htmlFor="resume" className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Upload PDF
                    </span>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </Label>
                  {formData.resume && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {formData.resume.name}
                    </p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg transition-colors"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationForm;
