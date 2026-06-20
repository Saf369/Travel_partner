export default function BackpackScreen() {
  return (
    <div className="flex flex-col flex-1 w-full p-6 md:p-10 lg:px-14 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10 pt-4 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Backpack</h1>
        <p className="text-lg text-text-secondary">
          Your saved trips and itineraries
        </p>
      </div>

      {/* Content */}
      <div className="bg-background-element border border-background-selected p-10 rounded-3xl flex flex-col items-center justify-center min-h-[400px] text-center shadow-sm">
        <h3 className="text-xl font-semibold mb-2">No trips saved yet</h3>
        <p className="text-text-secondary">When you save destinations or deals, they will appear here.</p>
      </div>
    </div>
  );
}
