import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let recognition = null;

    try {
      // Check for browser support
      if ('webkitSpeechRecognition' in window) {
        recognition = new window.webkitSpeechRecognition();
      } else if ('SpeechRecognition' in window) {
        recognition = new window.SpeechRecognition();
      } else {
        toast.error('Speech recognition is not supported in this browser');
        return;
      }

      // Configure recognition
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        console.log('Voice recognition started');
        toast.success('Voice recognition is active');
      };

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript.toLowerCase().trim();

        console.log('Voice command:', command); // Debug log

        // Navigation commands
        if (command.includes('about')) {
          navigate('/about');
          toast.success('Navigating to About page');
        } else if (command.includes('home')) {
          navigate('/');
          toast.success('Navigating to Home page');
        } else if (command.includes('projects')) {
          navigate('/projects');
          toast.success('Navigating to Projects page');
        } else if (command.includes('education')) {
          navigate('/education');
          toast.success('Navigating to Education page');
        } else if (command.includes('contact')) {
          navigate('/contact');
          toast.success('Navigating to Contact page');
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        toast.error(`Error: ${event.error}`);
        setIsListening(false);
      };

      recognition.onend = () => {
        console.log('Speech recognition ended');
        if (isListening) {
          recognition.start();
        }
      };

      // Start/Stop recognition based on isListening state
      if (isListening) {
        recognition.start();
      } else {
        recognition.stop();
      }

    } catch (error) {
      console.error('Speech recognition setup error:', error);
      toast.error('Failed to initialize speech recognition');
    }

    // Cleanup
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isListening, navigate]);

  const toggleListening = () => {
    setIsListening(prev => !prev);
  };

  return { isListening, toggleListening };
};

export default useSpeechRecognition; 