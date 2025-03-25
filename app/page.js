
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { Transition } from '@headlessui/react';
import MessageCard from '@/components/MessageCard';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/message`);
      setMessage(response.data.message);
    } catch (err) {
      setError('Could not connect to server. Please try again.');
      console.error('Error fetching message:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col">
        <div className="flex items-center justify-center mb-8">
          <MessageCircle className="h-10 w-10 text-primary-600 mr-2" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
            Simple Connect App
          </h1>
        </div>
        
        <div className="w-full max-w-md">
          <Transition
            show={!loading}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95"
          >
            <MessageCard message={message} error={error} />
          </Transition>

          {loading && (
            <div className="w-full flex justify-center py-10">
              <RefreshCw className="h-8 w-8 text-primary-500 animate-spin" />
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button 
              onClick={fetchMessage}
              className="btn-primary flex items-center"
            >
              Refresh Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="fixed bottom-6 text-gray-400 text-xs">
          Frontend + Backend Demo • Made with NextJS & Express
        </p>
      </div>
    </main>
  );
}
