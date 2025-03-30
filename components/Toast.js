export default function Toast({ message }) {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                      bg-gradient-to-r from-green-400 to-green-600 
                      text-white px-6 py-3 rounded-full
                      shadow-lg
                      animate-fade-in-out">
            {message}
        </div>
    );
} 