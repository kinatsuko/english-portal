export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-red-700 mb-8">
        Learning Videos
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
}