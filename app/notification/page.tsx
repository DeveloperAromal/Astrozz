export default function Notification() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl px-4 py-4">Notifications</h1>
          <div className="space-y-4">
            <div className="p-4 bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold">New Message</h2>
              <p>You have received a new message from John Doe.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold">Reminder</h2>
              <p>Don't forget to attend the meeting tomorrow at 10 AM.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h2 className="text-lg font-semibold">Notification</h2>
              <p>Your subscription has been renewed successfully.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
