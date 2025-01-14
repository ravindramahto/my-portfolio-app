import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import useSpeechRecognition from '../../hooks/useSpeechRecognition';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { isListening, toggleListening } = useSpeechRecognition();

  const handleVoiceToggle = () => {
    toggleListening();
    if (!isListening) {
      toast('Try saying: "about", "home", "projects", "education", or "contact"', {
        icon: '🎤',
        duration: 3000,
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Your existing nav items */}
          
          {/* Voice Command Button */}
          <button
            onClick={handleVoiceToggle}
            className={`p-2 rounded-full transition-all duration-300 ${
              isListening 
                ? 'bg-green-500/20 text-green-500' 
                : 'bg-gray-700/20 text-gray-400 hover:bg-gray-700/40'
            }`}
            title={isListening ? 'Voice Commands Active' : 'Enable Voice Commands'}
          >
            {isListening ? (
              <FaMicrophone className="w-5 h-5 animate-pulse" />
            ) : (
              <FaMicrophoneSlash className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 