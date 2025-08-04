'use client'
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const navItems = [
  'Personalize',
  'Users',
  'Notifications',
  'Search',
  'Share',
  'General',
  'Privacy',
  'Devices',
  'Ease of Access',
  'Sync your settings',
  'HomeGroup',
  'Windows Update',
];

// Dummy Components for each setting
const SettingsContent: Record<string, React.ReactNode> = {
  Personalize: <div className="text-lg">🎨 Personalize settings go here</div>,
  Users: <div className="text-lg">👥 User management area</div>,
  Notifications: <div className="text-lg">🔔 Notification toggles and stuff</div>,
  Search: <div className="text-lg">🔍 Search options</div>,
  Share: <div className="text-lg">📤 Sharing preferences</div>,
  General: <div className="text-lg">⚙️ General system options</div>,
  Privacy: <div className="text-lg">🛡️ Privacy controls</div>,
  Devices: <div className="text-lg">🖥️ Device list or connection settings</div>,
  'Ease of Access': <div className="text-lg">♿ Accessibility settings</div>,
  'Sync your settings': <div className="text-lg">🔄 Sync configuration</div>,
  HomeGroup: <div className="text-lg">🏠 HomeGroup stuff (RIP)</div>,
  'Windows Update': <div className="text-lg">⬇️ Update status and controls</div>,
};

export default function SettingsPanel() {
  const [selected, setSelected] = useState('Notifications');

  return (
    <>
      <div className="w-full bg-black h-12 flex justify-end">
        <a href='/' className="flex items-center justify-center text-white text-xl px-4 hover:bg-red-700">
          <IoMdClose />
        </a>
      </div>
      <div className="flex h-screen bg-white text-[#0078D7] text-2xl segoe">
        {/* Sidebar */}
        <div className="w-1/4 min-w-[220px] bg-[#f2f2f2] border-r border-gray-300">
          <h2 className="text-xl font-light text-black px-6 py-5">PC settings</h2>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setSelected(item)}
                className={`px-6 py-2 cursor-pointer ${item === selected
                    ? 'bg-[#0078D7] text-white font-medium'
                    : 'text-black hover:bg-gray-200'
                  }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-10">
          <h3 className="text-2xl font-light mb-6">{selected}</h3>
          <div className="space-y-6">
            {SettingsContent[selected] || (
              <div className="text-gray-500">No content available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
