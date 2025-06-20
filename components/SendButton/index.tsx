interface SendButtonProps {
  isLoading: boolean;
}

export default function SendButton({ isLoading }: SendButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="p-3 rounded-full bg-accent text-white hover:bg-accent-dark transition-colors disabled:opacity-50"
    >
      {isLoading ? (
        <span className="block w-4 h-4 bg-white rounded-sm animate-pulse"></span>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )}
    </button>
  );
}