"use client";

import { useState, useEffect } from "react";
import { AppSettings } from "@/types";
import { getFromStorage, saveToStorage } from "@/lib/utils";

const SETTINGS_KEY = "taskflow_settings";

const defaultSettings: AppSettings = {
  defaultPriority: "medium",
  defaultCategory: "Personal",
  showCompletedTasks: true,
  enableNotifications: false,
  theme: "light",
  categories: ["Personal", "Work", "Shopping", "Health", "Finance", "Education"],
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [newCategory, setNewCategory] = useState("");
  const [saved, setSaved] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = getFromStorage<AppSettings>(SETTINGS_KEY);
    if (stored) {
      setSettings(stored);
    }
    setIsLoaded(true);
  }, []);

  const handleSave = () => {
    saveToStorage(SETTINGS_KEY, settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed && !settings.categories.includes(trimmed)) {
      setSettings((prev) => ({
        ...prev,
        categories: [...prev.categories, trimmed],
      }));
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (cat: string) => {
    setSettings((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== cat),
    }));
  };

  const handleResetData = () => {
    if (confirm("Are you sure you want to delete ALL tasks? This cannot be undone.")) {
      localStorage.removeItem("taskflow_todos");
      alert("All tasks have been deleted. Refresh the page to see the changes.");
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-500">Customize your TaskFlow experience.</p>
      </div>

      <div className="space-y-6">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Default Task Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Priority</label>
              <select
                value={settings.defaultPriority}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, defaultPriority: e.target.value as AppSettings["defaultPriority"] }))
                }
                className="input-field"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Category</label>
              <select
                value={settings.defaultCategory}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, defaultCategory: e.target.value }))
                }
                className="input-field"
              >
                {settings.categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Display Preferences</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.showCompletedTasks}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, showCompletedTasks: e.target.checked }))
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Show completed tasks in the list</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.enableNotifications}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, enableNotifications: e.target.checked }))
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Enable browser notifications for due tasks</span>
            </label>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Manage Categories</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
              placeholder="New category name..."
              className="input-field"
            />
            <button onClick={handleAddCategory} className="btn-primary whitespace-nowrap">
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {settings.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {cat}
                <button
                  onClick={() => handleRemoveCategory(cat)}
                  className="ml-1 text-blue-400 hover:text-blue-700 transition-colors"
                  aria-label={`Remove ${cat}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="card border-red-100">
          <h2 className="text-lg font-semibold text-red-700 mb-2">Danger Zone</h2>
          <p className="text-sm text-gray-500 mb-4">These actions are irreversible. Please proceed with caution.</p>
          <button onClick={handleResetData} className="btn-danger">
            Delete All Tasks
          </button>
        </div>

        <div className="flex justify-end">
          <button onClick={handleSave} className="btn-primary px-8">
            {saved ? "✓ Saved!" : "Save Settings"}
          </button>
        </div>
      </div>
    </div>
  );
}
