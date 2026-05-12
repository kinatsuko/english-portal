export default function NotesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-900 mb-8">
        English Notes
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Grammar Notes
          </h2>

          <p className="text-gray-600 mb-5">
            Download grammar PDF notes.
          </p>

          <a
            href="/notes/grammar.pdf"
            target="_blank"
            className="bg-blue-700 text-white px-5 py-3 rounded-xl"
          >
            Download PDF
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Essay Writing
          </h2>

          <p className="text-gray-600 mb-5">
            Sample essay references.
          </p>

          <a
            href="/notes/essay.pdf"
            target="_blank"
            className="bg-green-700 text-white px-5 py-3 rounded-xl"
          >
            Download PDF
          </a>
        </div>

      </div>
    </div>
  );
}