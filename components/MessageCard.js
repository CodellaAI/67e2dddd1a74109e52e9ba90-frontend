
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function MessageCard({ message, error }) {
  if (error) {
    return (
      <div className="bg-white border border-red-100 rounded-xl shadow-sm p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Connection Error</h3>
            <p className="mt-1 text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
      <div className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-gray-900">Server Response</h3>
          <p className="mt-1 text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
