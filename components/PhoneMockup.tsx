export function PhoneMockup() {
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
                { title: 'Design review', time: '10:00 AM', done: true, color: 'bg-green-500' },
                { title: 'Team standup', time: '11:30 AM', done: false, color: 'bg-primary-500' },
                { title: 'Write proposal', time: '2:00 PM', done: false, color: 'bg-accent-500' },
                { title: 'Client call', time: '4:00 PM', done: false, color: 'bg-orange-500' },
              ].map((task, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 p-2 rounded-xl mb-1.5 ${
                    task.done ? 'bg-white/5' : 'bg-white/10'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      task.done ? 'bg-green-400' : task.color
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs font-medium truncate ${
                        task.done ? 'text-white/40 line-through' : 'text-white'
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
              {['🏠', '📋', '➕', '📊', '👤'].map((icon, idx) => (
                <button
                  key={idx}
                  className={`text-base ${
                    idx === 0 ? 'text-primary-400' : 'text-white/40'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Side button */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-gray-600 rounded-l-sm" />
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-sm" />
        <div className="absolute left-0 top-32 w-1 h-8 bg-gray-600 rounded-r-sm" />
      </div>
    </div>
  );
}