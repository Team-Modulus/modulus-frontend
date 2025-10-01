export function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );
}
