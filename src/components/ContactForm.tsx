"use client";

export default function ContactForm() {
  return (
    <div className="py-24 text-gray-600">
      <form
        action=""
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-6">お問い合わせ</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          送信
        </button>
      </form>
    </div>
  );
}
