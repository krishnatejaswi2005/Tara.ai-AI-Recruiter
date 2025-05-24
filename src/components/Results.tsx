import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Results = () => {
	const [applicationData, setApplicationData] = useState<any>(null);
	const [atsScore] = useState(85); // Mock ATS score - would come from API in real implementation

	useEffect(() => {
		const storedData = localStorage.getItem("applicationData");
		if (storedData) {
			setApplicationData(JSON.parse(storedData));
		}
	}, []);

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
						<CheckCircle className="w-8 h-8 text-white" />
					</div>

					<h1 className="text-4xl font-bold text-gray-900 mb-4">Thank you</h1>
					<h2 className="text-2xl text-gray-600">Summary of the Interview</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* ATS Score Card */}
					<Card className="bg-white shadow-lg">
						<CardHeader className="text-center">
							<CardTitle className="text-xl font-bold text-gray-900">
								Resume Score
							</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<div className="relative w-32 h-32 mx-auto mb-4">
								<svg
									className="w-32 h-32 transform -rotate-90"
									viewBox="0 0 100 100"
								>
									<circle
										cx="50"
										cy="50"
										r="40"
										stroke="#E5E7EB"
										strokeWidth="8"
										fill="none"
									/>
									<circle
										cx="50"
										cy="50"
										r="40"
										stroke="#3B82F6"
										strokeWidth="8"
										fill="none"
										strokeDasharray={`${2 * Math.PI * 40}`}
										strokeDashoffset={`${
											2 * Math.PI * 40 * (1 - atsScore / 100)
										}`}
										className="transition-all duration-1000 ease-out"
									/>
								</svg>
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-3xl font-bold text-gray-900">
										{atsScore}%
									</span>
								</div>
							</div>
							<p className="text-lg font-semibold text-green-600">
								Passed to the 2nd Round
							</p>
						</CardContent>
					</Card>

					{/* AI Interview Evaluation Card */}
					<Card className="bg-white shadow-lg">
						<CardHeader>
							<CardTitle className="text-xl font-bold text-gray-900 text-center">
								AI Interview Evaluation
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 leading-relaxed">
								You provided concise and relevant responses. Your communication
								skills are effective, and your qualifications are a strong match
								for the position. Overall, well done!
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Application Summary */}
				{applicationData && (
					<Card className="bg-white shadow-lg mt-8">
						<CardHeader>
							<CardTitle className="text-xl font-bold text-gray-900">
								Application Summary
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-gray-500">Full Name</p>
									<p className="font-medium">{applicationData.fullName}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Email</p>
									<p className="font-medium">{applicationData.email}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Phone</p>
									<p className="font-medium">{applicationData.phoneNumber}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Job Code</p>
									<p className="font-medium">{applicationData.jobCode}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
};

export default Results;
