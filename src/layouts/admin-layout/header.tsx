import { ArrowLeft, Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4 px-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="bg-[#FFFFFF] shadow-2xl border-2 border-[#f8f5f5]  rounded-xl p-3">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
        </button>
        <div className="flex items-center gap-2 bg-[#EBEAEF] rounded-3xl p-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className=" focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <img src="https://www.google.com/s2/favicons?domain=google.com" alt="google logo" />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-sm text-gray-700 font-sans">Admin name</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer bg-gray-200 p-1 rounded-full" />
      </div>
    </header>
  );
}
