import { DownloadButton } from '@/components/DownloadButton';
import { PhoneMockup } from '@/components/PhoneMockup';

// Move PhoneMockup component logic to this file to ensure simplicity and cohesion
export function AppDownloadSection() {

// Define a mockup within the same file for clarity
function PhoneMockup() {
  return (
    <div className="relative animate-float">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75" />

      {/* Phone frame */}
      <div className="relative w-64 md:w-72 mx-auto">
        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">

          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />

          {/* Screen */}
          <div className="bg-gray-950 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-8 pb-2">
              <span className="text-white text-xs font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-2 border border-white/60 rounded-sm relative">
                  <div className="absolute inset-0.5 right-1 bg-white/60 rounded-sm" />
                </div>
              </div>
            </div>

            {/* App content */}
            <div className="px-4 pb-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-white/50 text-xs">Good morning,</p>
                  <p className="text-white font-bold text-sm">Alex 👋</p>
                </div>
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
              </div>

              {/* Progress card */}
              <div className="bg-primary-600 rounded-2xl p-3 mb-3">
                <p className="text-white/70 text-xs mb-1">Today&apos;s Progress</p>
                <p className="text-white font-bold text-lg">8 / 12 Tasks</p>
                <div className="mt-2 bg-white/20 rounded-full h-1.5">
                  <div className="bg-white rounded-full h-1.5 w-2/3" />
                </div>
              </div>

              {/* Task list */}
              <p className="text-white/50 text-xs mb-2">UPCOMING</p>
              {[
                { title: "Design review", time: "10:00 AM", done: true, color: "bg-green-500" },
                { title: "Team standup", time: "11:30 AM", done: false, color: "bg-primary-500" },
                { title: "Write proposal", time: "2:00 PM", done: false, color: "bg-accent-500" },
                { title: "Client call", time: "4:00 PM", done: false, color: "bg-orange-500" },
              ].map((task, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 p-2 rounded-xl mb-1.5 ${
                    task.done ? "bg-white/5" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      task.done ? "bg-green-400" : task.color
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs font-medium truncate ${
                        task.done ? "text-white/40 line-through" : "text-white"
                      }`}
                    >
                      {task.title}
                    </p>
                  </div>
                  <span className="text-white/40 text-xs flex-shrink-0">{task.time}</span>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-white/10 flex justify-around py-3 px-4">
              {["🏠", "📋", "➕", "📊", "👤"].map((icon, idx) => (
                <button
                  key={idx}
                  className={`text-base ${
                    idx === 0 ? "text-primary-400" : "text-white/40"
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-gray-600 rounded-l-sm" />
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-sm" />
        <div className="absolute left-0 top-32 w-1 h-8 bg-gray-600 rounded-r-sm" />
      </div>
    </div>
  );
}

function PhoneMockup() {
return (
<div className="relative animate-float">
<div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75" />
<div className="relative w-64 md:w-72 mx-auto">
<div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />
<div className="bg-gray-950 rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">

<div className="flex justify-between items-center px-6 pt-8 pb-2"><span className="text-white text-xs font-semibold">9:41</span><div className="flex gap-1 items-center"><div className="w-4 h-2 border border-white/60 rounded-sm relative"><div className="absolute inset-0.5 right-1 bg-white/60 rounded-sm" /></div></div></div>

<div className="px-4 pb-4">

<div className="flex justify-between items-center mb-4"><div><p className="text-white/50 text-xs">Good morning,</p><p className="text-white font-bold text-sm">Alex 👋</p></div><div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">A</span></div></div>

<div className="bg-primary-600 rounded-2xl p-3 mb-3"><p className="text-white/70 text-xs mb-1">Today&apos;s Progress</p><p className="text-white font-bold text-lg">8 / 12 Tasks</p><div className="mt-2 bg-white/20 rounded-full h-1.5"><div className="bg-white rounded-full h-1.5 w-2/3" /></div></div>

<p className="text-white/50 text-xs mb-2">UPCOMING</p>
{[
{"title": "Design review", "time": "10:00 AM", "done": true, "color": "bg-green-500"},
{"title": "Team standup", "time": "11:30 AM", "done": false, "color": "bg-primary-500"},
{"title": "Write proposal", "time": "2:00 PM", "done": false, "color": "bg-accent-500"},
{"title": "Client call", "time": "4:00 PM", "done": false, "color": "bg-orange-500"}
].map((task, idx) => (
<div key={idx} className={`flex items-center gap-2 p-2 rounded-xl mb-1.5 ${task.done ? 'bg-white/5' : 'bg-white/10'}`}>
<div className={`w-2 h-2 rounded-full flex-shrink-0 ${task.done ? 'bg-green-400' : task.color}`} />
<div className="flex-1 min-w-0"><p className={`text-xs font-medium truncate ${task.done ? 'text-white/40 line-through' : 'text-white'}`}>{task.title}</p></div><span className="text-white/40 text-xs flex-shrink-0">{task.time}</span></div>))}

</div>

<div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-white/10 flex justify-around py-3 px-4">
{['🏠', '📋', '➕', '📊', '👤'].map((icon, idx) => (
<button key={idx} className={`text-base ${idx === 0 ? 'text-primary-400' : 'text-white/40'}`}>{icon}</button>))}
</div>

</div>
</div>

<div className="absolute right-0 top-24 w-1 h-12 bg-gray-600 rounded-l-sm" />
<div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-sm" />
<div className="absolute left-0 top-32 w-1 h-8 bg-gray-600 rounded-r-sm" />
</div></div>);
}

  return (
    <section
      id="download"
      className="relative overflow-hidden py-24 px-4"
      aria-labelledby="download-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Now Available on All Platforms</span>
            </div>

            <h2
              id="download-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Take Your
              <br />
              <span className="text-yellow-300">Productivity</span>
              <br />
              Everywhere
            </h2>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Download SwiftTask on iOS or Android and experience the power of smart task
              management in your pocket. Sync across all your devices, work offline, and
              never miss a deadline again.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              {[
                { value: '4.9★', label: 'App Store Rating' },
                { value: '2M+', label: 'Active Users' },
                { value: '50M+', label: 'Tasks Completed' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <DownloadButton
                platform="ios"
                href="#"
              />
              <DownloadButton
                platform="android"
                href="#"
              />
            </div>

            {/* QR Code hint */}
            <p className="mt-6 text-white/50 text-sm">
              Or scan the QR code on your phone to download instantly
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}